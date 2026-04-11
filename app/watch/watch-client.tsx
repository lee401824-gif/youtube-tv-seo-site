"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SiteHeader from "@/app/components/site-header";
import {
  type ChannelCacheData,
  type ChannelConfig,
  type VideoItem,
  getChannelLabel,
  getEffectiveKeywords,
  getNormalizedKeywordSet,
  normalizeKeyword,
  normalizeName,
  PLAYLIST_MAX_SIZE,
} from "@/app/lib/channel-types";
import {
  clearChannelCache,
  clearPlaybackProgress,
  loadApiKey,
  loadChannelCache,
  loadChannelConfigs,
  loadLastChannelIndex,
  loadLastVideoId,
  loadLastVideoIndex,
  loadPlaylistGenerationSettings,
  saveChannelCache,
  saveLastChannelIndex,
  saveLastVideoId,
  saveLastVideoIndex,
  type PlaylistGenerationSettings,
} from "@/app/lib/local-store";
import { fetchVideosForKeyword } from "@/app/lib/youtube-api";

declare global {
  interface Window {
    YT?: {
      Player: new (
        elementId: string,
        options: {
          width?: string | number;
          height?: string | number;
          videoId?: string;
          playerVars?: Record<string, string | number>;
          events?: {
            onReady?: () => void;
            onStateChange?: (event: { data: number }) => void;
            onError?: (event: { data: number }) => void;
          };
        },
      ) => YouTubePlayerInstance;
      PlayerState: {
        ENDED: number;
        PLAYING: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

type YouTubePlayerInstance = {
  loadVideoById: (videoId: string) => void;
  destroy: () => void;
};

type FetchVideosBatchResult = {
  videos: VideoItem[];
  nextPageTokenByKeyword: Record<string, string>;
};

let youtubeApiPromise: Promise<void> | null = null;

function cloneGenerationSettingsSnapshot(
  settings: PlaylistGenerationSettings,
): { durationMode: string; playlistMaxSize: number; languageMode: string } {
  return {
    durationMode: settings.durationMode,
    playlistMaxSize: settings.playlistMaxSize,
    languageMode: settings.languageMode,
  };
}

function getEffectivePlaylistMaxSize(settings: PlaylistGenerationSettings): number {
  const normalized = Math.round(settings.playlistMaxSize);

  if (!Number.isFinite(normalized) || normalized < 1) {
    return PLAYLIST_MAX_SIZE;
  }

  return normalized;
}

function doesCacheMatchGenerationSettings(
  cache: ChannelCacheData | undefined,
  settings: PlaylistGenerationSettings,
): boolean {
  if (!cache?.generationSettingsSnapshot) {
    return false;
  }

  return (
    cache.generationSettingsSnapshot.durationMode === settings.durationMode &&
    cache.generationSettingsSnapshot.playlistMaxSize === settings.playlistMaxSize &&
    cache.generationSettingsSnapshot.languageMode === settings.languageMode
  );
}

function loadYouTubeIframeApi(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.YT?.Player) {
    return Promise.resolve();
  }

  if (youtubeApiPromise) {
    return youtubeApiPromise;
  }

  youtubeApiPromise = new Promise<void>((resolve) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.youtube.com/iframe_api"]',
    );

    if (existingScript) {
      const previousReady = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previousReady?.();
        resolve();
      };
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;

    const previousReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previousReady?.();
      resolve();
    };

    document.body.appendChild(script);
  });

  return youtubeApiPromise;
}

export default function WatchClient() {
  const playerRef = useRef<YouTubePlayerInstance | null>(null);
  const playerMountIdRef = useRef("yt-player-root");
  const channelRailRef = useRef<HTMLDivElement | null>(null);

  const selectedVideoIdRef = useRef("");
  const isSelectingFromPlaylistRef = useRef(false);
  const isAppendingMoreRef = useRef(false);
  const isGeneratingPlaylistRef = useRef(false);
  const isHandlingVideoErrorRef = useRef(false);
  const isAdvancingRef = useRef(false);
  const consecutiveErrorCountRef = useRef(0);
  const lastHandledErrorKeyRef = useRef<string | null>(null);

  const currentChannelIndexRef = useRef(0);
  const currentVideoIndexRef = useRef(0);
  const channelsRef = useRef<ChannelConfig[]>([]);
  const channelCacheBySlotRef = useRef<Record<number, ChannelCacheData>>({});
  const hasStartedRef = useRef(false);

  const playSpecificVideoRef = useRef<
    (params: {
      channelIndex: number;
      videoIndex: number;
      updateStatusPrefix: string;
      forcePlay?: boolean;
    }) => Promise<void>
  >(async () => {});

  const [apiKey, setApiKey] = useState("");
  const [channels, setChannels] = useState<ChannelConfig[]>([]);
  const [channelCacheBySlot, setChannelCacheBySlot] = useState<Record<number, ChannelCacheData>>({});
  const [sessionNextVideoIndexBySlot, setSessionNextVideoIndexBySlot] = useState<Record<number, number>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [isGeneratingPlaylist, setIsGeneratingPlaylist] = useState(false);
  const [isAppendingMoreVideos, setIsAppendingMoreVideos] = useState(false);
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState("Select a channel.");
  const [currentChannelIndex, setCurrentChannelIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const currentPlaylist = channelCacheBySlot[currentChannelIndex]?.playlist ?? [];
  const currentVideo = currentPlaylist[currentVideoIndex] ?? null;

  useEffect(() => {
    currentChannelIndexRef.current = currentChannelIndex;
  }, [currentChannelIndex]);

  useEffect(() => {
    currentVideoIndexRef.current = currentVideoIndex;
  }, [currentVideoIndex]);

  useEffect(() => {
    channelsRef.current = channels;
  }, [channels]);

  useEffect(() => {
    channelCacheBySlotRef.current = channelCacheBySlot;
  }, [channelCacheBySlot]);

  useEffect(() => {
    hasStartedRef.current = hasStarted;
  }, [hasStarted]);

  const refreshRefs = useCallback(() => {
    isGeneratingPlaylistRef.current = isGeneratingPlaylist;
    isAppendingMoreRef.current = isAppendingMoreVideos;
  }, [isAppendingMoreVideos, isGeneratingPlaylist]);

  useEffect(() => {
    refreshRefs();
  }, [refreshRefs]);

  useEffect(() => {
    const loadedApiKey = loadApiKey();
    const loadedChannels = loadChannelConfigs();
    const loadedLastChannelIndex = loadLastChannelIndex();

    const cacheMap: Record<number, ChannelCacheData> = {};
    const sessionMap: Record<number, number> = {};

    for (let index = 0; index < loadedChannels.length; index += 1) {
      const cache = loadChannelCache(index);
      if (cache) {
        cacheMap[index] = cache;
      }

      const storageKey = getSlotStorageKey(index);
      const savedIndex = loadLastVideoIndex(storageKey);
      sessionMap[index] = savedIndex ?? 0;
    }

    setApiKey(loadedApiKey);
    setChannels(loadedChannels);
    setChannelCacheBySlot(cacheMap);
    setSessionNextVideoIndexBySlot(sessionMap);
    setCurrentChannelIndex(
      loadedLastChannelIndex >= 0 && loadedLastChannelIndex < loadedChannels.length
        ? loadedLastChannelIndex
        : 0,
    );
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (isGeneratingPlaylist || isAppendingMoreVideos) {
      return;
    }

    const existingCache = channelCacheBySlot[currentChannelIndex];
    if (!existingCache?.playlist?.length) {
      return;
    }

    const generationSettings = loadPlaylistGenerationSettings();
    const matches = doesCacheMatchGenerationSettings(existingCache, generationSettings);

    if (!matches) {
      setStatusMessage("Playlist settings changed. Click a channel to rebuild the playlist.");
    }
  }, [
    channelCacheBySlot,
    currentChannelIndex,
    isAppendingMoreVideos,
    isGeneratingPlaylist,
    isLoading,
  ]);

  const handleVideoEnded = useCallback(async () => {
    if (isAdvancingRef.current) return;

    const channelIndex = currentChannelIndexRef.current;
    const videoIndex = currentVideoIndexRef.current;
    const playlist = channelCacheBySlotRef.current[channelIndex]?.playlist ?? [];

    if (!playlist.length) return;

    isAdvancingRef.current = true;

    try {
      const nextIndex = (videoIndex + 1) % playlist.length;
      const channelLabel = getChannelLabel(
        channelsRef.current[channelIndex],
        channelIndex,
      );

      await playSpecificVideoRef.current({
        channelIndex,
        videoIndex: nextIndex,
        updateStatusPrefix: `${channelLabel} auto-playing next video`,
      });
    } finally {
      isAdvancingRef.current = false;
    }
  }, []);

  const handleVideoError = useCallback(async (errorCode: number) => {
    if (isHandlingVideoErrorRef.current) return;
    if (!hasStartedRef.current) return;
    if (isSelectingFromPlaylistRef.current) return;

    const channelIndex = currentChannelIndexRef.current;
    const videoIndex = currentVideoIndexRef.current;
    const playlist = channelCacheBySlotRef.current[channelIndex]?.playlist ?? [];

    if (!playlist.length) return;

    const errorKey = `${channelIndex}_${videoIndex}_${errorCode}`;
    if (lastHandledErrorKeyRef.current === errorKey) return;

    lastHandledErrorKeyRef.current = errorKey;
    isHandlingVideoErrorRef.current = true;

    try {
      consecutiveErrorCountRef.current += 1;

      if (consecutiveErrorCountRef.current >= playlist.length) {
        setStatusMessage(
          `There are no playable videos in ${getChannelLabel(
            channelsRef.current[channelIndex],
            channelIndex,
          )}.`,
        );
        return;
      }

      setStatusMessage("This video could not be played. Skipping to the next video...");
      await new Promise((resolve) => window.setTimeout(resolve, 500));

      const nextIndex = (videoIndex + 1) % playlist.length;
      const channelLabel = getChannelLabel(
        channelsRef.current[channelIndex],
        channelIndex,
      );

      await playSpecificVideoRef.current({
        channelIndex,
        videoIndex: nextIndex,
        updateStatusPrefix: `${channelLabel} auto-skipping to next video`,
      });
    } finally {
      isHandlingVideoErrorRef.current = false;
    }
  }, []);

  const ensurePlayer = useCallback(
    async (videoId: string) => {
      await loadYouTubeIframeApi();

      if (!playerRef.current && typeof window !== "undefined" && window.YT?.Player) {
        playerRef.current = new window.YT.Player(playerMountIdRef.current, {
          width: "100%",
          height: "100%",
          videoId,
          playerVars: {
            autoplay: 1,
            rel: 0,
            playsinline: 1,
          },
          events: {
            onStateChange: (event) => {
              const endedValue = window.YT?.PlayerState?.ENDED;
              const playingValue = window.YT?.PlayerState?.PLAYING;

              if (event.data === playingValue) {
                consecutiveErrorCountRef.current = 0;
                lastHandledErrorKeyRef.current = null;
              }

              if (event.data === endedValue) {
                void handleVideoEnded();
              }
            },
            onError: (event) => {
              void handleVideoError(event.data);
            },
          },
        });
        return;
      }

      if (playerRef.current) {
        playerRef.current.loadVideoById(videoId);
      }
    },
    [handleVideoEnded, handleVideoError],
  );

  useEffect(() => {
    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, []);

  const playSpecificVideo = useCallback(
    async (params: {
      channelIndex: number;
      videoIndex: number;
      updateStatusPrefix: string;
      forcePlay?: boolean;
    }) => {
      const playlist = channelCacheBySlotRef.current[params.channelIndex]?.playlist ?? [];
      if (!playlist.length) return;
      if (params.videoIndex < 0 || params.videoIndex >= playlist.length) return;

      const video = playlist[params.videoIndex];
      if (!video?.videoId) return;

      setHasStarted(true);
      lastHandledErrorKeyRef.current = null;
      consecutiveErrorCountRef.current = 0;

      selectedVideoIdRef.current = video.videoId;
      saveLastChannelIndex(params.channelIndex);
      saveLastVideoIndex(getSlotStorageKey(params.channelIndex), params.videoIndex);
      saveLastVideoId(getSlotStorageKey(params.channelIndex), video.videoId);

      const nextIndex = (params.videoIndex + 1) % playlist.length;
      setSessionNextVideoIndexBySlot((current) => ({
        ...current,
        [params.channelIndex]: nextIndex,
      }));

      setCurrentChannelIndex(params.channelIndex);
      setCurrentVideoIndex(params.videoIndex);
      currentChannelIndexRef.current = params.channelIndex;
      currentVideoIndexRef.current = params.videoIndex;

      setStatusMessage(`${params.updateStatusPrefix} (${params.videoIndex + 1}/${playlist.length})`);

      await ensurePlayer(video.videoId);
    },
    [ensurePlayer],
  );

  useEffect(() => {
    playSpecificVideoRef.current = playSpecificVideo;
  }, [playSpecificVideo]);

  const fetchVideosForKeywords = useCallback(
    async (params: {
      keywords: string[];
      nextPageTokenByKeyword: Record<string, string>;
      useStoredNextPageToken: boolean;
    }): Promise<FetchVideosBatchResult> => {
      const resultVideos: VideoItem[] = [];
      const seenVideoIds = new Set<string>();
      const updatedTokenMap = { ...params.nextPageTokenByKeyword };

      for (const keyword of params.keywords) {
        const normalizedKeyword = normalizeKeyword(keyword);
        const pageToken = params.useStoredNextPageToken
          ? params.nextPageTokenByKeyword[normalizedKeyword]
          : undefined;

        const searchResult = await fetchVideosForKeyword({
          apiKey,
          keyword,
          maxResults: 50,
          pageToken,
        });

        if (!searchResult.nextPageToken?.trim()) {
          delete updatedTokenMap[normalizedKeyword];
        } else {
          updatedTokenMap[normalizedKeyword] = searchResult.nextPageToken;
        }

        for (const video of searchResult.videos) {
          if (!video.videoId || seenVideoIds.has(video.videoId)) {
            continue;
          }

          seenVideoIds.add(video.videoId);
          resultVideos.push(video);
        }
      }

      return {
        videos: resultVideos,
        nextPageTokenByKeyword: updatedTokenMap,
      };
    },
    [apiKey],
  );

  const mergePlaylistKeepFirst = useCallback((existing: VideoItem[], incoming: VideoItem[]): VideoItem[] => {
    const merged: VideoItem[] = [];
    const seen = new Set<string>();

    for (const video of [...existing, ...incoming]) {
      if (!video.videoId || seen.has(video.videoId)) {
        continue;
      }
      seen.add(video.videoId);
      merged.push(video);
    }

    return merged;
  }, []);

  const trimPlaylistAndAdjustProgress = useCallback(
    (slotIndex: number, playlist: VideoItem[]): VideoItem[] => {
      const generationSettings = loadPlaylistGenerationSettings();
      const effectiveMaxSize = getEffectivePlaylistMaxSize(generationSettings);

      if (playlist.length <= effectiveMaxSize) {
        return playlist;
      }

      const overflow = playlist.length - effectiveMaxSize;
      const trimmed = playlist.slice(overflow);
      const storageKey = getSlotStorageKey(slotIndex);
      const savedIndex = loadLastVideoIndex(storageKey);

      if (savedIndex != null) {
        saveLastVideoIndex(storageKey, Math.max(0, savedIndex - overflow));
      }

      setSessionNextVideoIndexBySlot((current) => ({
        ...current,
        [slotIndex]: Math.max(0, (current[slotIndex] ?? 0) - overflow),
      }));

      if (currentChannelIndexRef.current === slotIndex) {
        setCurrentVideoIndex((value) => Math.max(0, value - overflow));
      }

      return trimmed;
    },
    [],
  );

  const ensurePlaylistUpToDate = useCallback(
    async (slotIndex: number): Promise<boolean> => {
      const config = channels[slotIndex];
      if (!config) return false;

      const currentKeywords = getEffectiveKeywords(config);
      const currentNormalizedKeywords = getNormalizedKeywordSet(config);
      const currentDisplayName = config.displayName;
      const existingCache = channelCacheBySlot[slotIndex];
      const generationSettings = loadPlaylistGenerationSettings();

      if (!currentKeywords.length) {
        return false;
      }

      let requiresFullRefresh = false;
      let keywordsToSearch: string[] = [];

      if (!existingCache) {
        requiresFullRefresh = true;
        keywordsToSearch = currentKeywords;
      } else if (!doesCacheMatchGenerationSettings(existingCache, generationSettings)) {
        requiresFullRefresh = true;
        keywordsToSearch = currentKeywords;
      } else {
        const oldNameNormalized = normalizeName(existingCache.displayNameSnapshot);
        const newNameNormalized = normalizeName(currentDisplayName);

        if (oldNameNormalized !== newNameNormalized) {
          requiresFullRefresh = true;
          keywordsToSearch = currentKeywords;
        } else {
          const oldKeywordSet = new Set(existingCache.keywordsSnapshot);
          const newKeywordSet = new Set(currentNormalizedKeywords);

          if (
            oldKeywordSet.size === newKeywordSet.size &&
            [...oldKeywordSet].every((item) => newKeywordSet.has(item))
          ) {
            return true;
          }

          keywordsToSearch = currentKeywords.filter(
            (keyword) => !oldKeywordSet.has(keyword.trim().toLowerCase()),
          );
        }
      }

      setIsGeneratingPlaylist(true);
      isGeneratingPlaylistRef.current = true;
      setStatusMessage("Building playlist...");

      try {
        if (requiresFullRefresh) {
          clearChannelCache(slotIndex);
          clearPlaybackProgress(getSlotStorageKey(slotIndex));

          const fetchResult = await fetchVideosForKeywords({
            keywords: keywordsToSearch,
            nextPageTokenByKeyword: {},
            useStoredNextPageToken: false,
          });

          const trimmed = trimPlaylistAndAdjustProgress(slotIndex, fetchResult.videos);
          const newCache: ChannelCacheData = {
            displayNameSnapshot: currentDisplayName,
            keywordsSnapshot: currentNormalizedKeywords,
            playlist: trimmed,
            nextPageTokenByKeyword: fetchResult.nextPageTokenByKeyword,
            generationSettingsSnapshot: cloneGenerationSettingsSnapshot(generationSettings),
          };

          saveChannelCache(slotIndex, newCache);
          setChannelCacheBySlot((current) => ({ ...current, [slotIndex]: newCache }));
          return true;
        }

        if (!keywordsToSearch.length) {
          return true;
        }

        const existingPlaylist = [...(existingCache?.playlist ?? [])];
        const fetchResult = await fetchVideosForKeywords({
          keywords: keywordsToSearch,
          nextPageTokenByKeyword: existingCache?.nextPageTokenByKeyword ?? {},
          useStoredNextPageToken: false,
        });

        const merged = mergePlaylistKeepFirst(existingPlaylist, fetchResult.videos);
        const trimmed = trimPlaylistAndAdjustProgress(slotIndex, merged);
        const updatedCache: ChannelCacheData = {
          displayNameSnapshot: currentDisplayName,
          keywordsSnapshot: currentNormalizedKeywords,
          playlist: trimmed,
          nextPageTokenByKeyword: {
            ...(existingCache?.nextPageTokenByKeyword ?? {}),
            ...fetchResult.nextPageTokenByKeyword,
          },
          generationSettingsSnapshot: cloneGenerationSettingsSnapshot(generationSettings),
        };

        saveChannelCache(slotIndex, updatedCache);
        setChannelCacheBySlot((current) => ({ ...current, [slotIndex]: updatedCache }));
        return true;
      } catch {
        return false;
      } finally {
        setIsGeneratingPlaylist(false);
        isGeneratingPlaylistRef.current = false;
      }
    },
    [
      channelCacheBySlot,
      channels,
      fetchVideosForKeywords,
      mergePlaylistKeepFirst,
      trimPlaylistAndAdjustProgress,
    ],
  );

  const playChannel = useCallback(
    async (channelIndex: number) => {
      if (channelIndex < 0 || channelIndex >= channels.length) return;

      if (
        isGeneratingPlaylistRef.current ||
        isAppendingMoreRef.current ||
        isSelectingFromPlaylistRef.current
      ) {
        return;
      }

      const config = channels[channelIndex];
      const effectiveKeywords = getEffectiveKeywords(config);

      if (!apiKey.trim()) {
        setStatusMessage("Please enter your API key in the API setup page.");
        return;
      }

      if (!effectiveKeywords.length) {
        setStatusMessage("Please enter at least one keyword in the channel setup page.");
        return;
      }

      const success = await ensurePlaylistUpToDate(channelIndex);
      const playlist =
        channelCacheBySlot[channelIndex]?.playlist ??
        loadChannelCache(channelIndex)?.playlist ??
        [];

      if (!success && !playlist.length) {
        setStatusMessage("Failed to build the playlist.");
        return;
      }

      const startIndex = sessionNextVideoIndexBySlot[channelIndex] ?? 0;

      await playSpecificVideo({
        channelIndex,
        videoIndex: Math.min(startIndex, Math.max(0, playlist.length - 1)),
        updateStatusPrefix: `${getChannelLabel(config, channelIndex)} now playing`,
      });
    },
    [
      apiKey,
      channelCacheBySlot,
      channels,
      ensurePlaylistUpToDate,
      playSpecificVideo,
      sessionNextVideoIndexBySlot,
    ],
  );

  const appendMoreVideosForChannel = useCallback(
    async (slotIndex: number) => {
      if (slotIndex < 0 || slotIndex >= channels.length) return;

      if (
        isGeneratingPlaylistRef.current ||
        isAppendingMoreRef.current ||
        isSelectingFromPlaylistRef.current
      ) {
        return;
      }

      const config = channels[slotIndex];
      const currentKeywords = getEffectiveKeywords(config);
      const currentNormalizedKeywords = getNormalizedKeywordSet(config);
      const existingCache = channelCacheBySlot[slotIndex];
      const generationSettings = loadPlaylistGenerationSettings();

      if (!apiKey.trim()) {
        setStatusMessage("Please enter your API key in the API setup page.");
        return;
      }

      if (!currentKeywords.length) {
        setStatusMessage("Please enter at least one keyword in the channel setup page.");
        return;
      }

      if (!existingCache || !existingCache.playlist.length) {
        setStatusMessage("Create the playlist first by clicking a channel button.");
        return;
      }

      if (!doesCacheMatchGenerationSettings(existingCache, generationSettings)) {
        setStatusMessage("Playlist settings changed. Click the channel button first to rebuild the playlist.");
        return;
      }

      setIsAppendingMoreVideos(true);
      isAppendingMoreRef.current = true;
      setStatusMessage(`Loading more videos for ${getChannelLabel(config, slotIndex)}...`);

      try {
        const fetchResult = await fetchVideosForKeywords({
          keywords: currentKeywords,
          nextPageTokenByKeyword: existingCache.nextPageTokenByKeyword,
          useStoredNextPageToken: true,
        });

        const oldPlaylist = [...existingCache.playlist];
        const merged = mergePlaylistKeepFirst(oldPlaylist, fetchResult.videos);
        const addedCount = merged.length - oldPlaylist.length;
        const trimmed = trimPlaylistAndAdjustProgress(slotIndex, merged);

        const updatedCache: ChannelCacheData = {
          displayNameSnapshot: config.displayName,
          keywordsSnapshot: currentNormalizedKeywords,
          playlist: trimmed,
          nextPageTokenByKeyword: fetchResult.nextPageTokenByKeyword,
          generationSettingsSnapshot: cloneGenerationSettingsSnapshot(generationSettings),
        };

        saveChannelCache(slotIndex, updatedCache);
        setChannelCacheBySlot((current) => ({ ...current, [slotIndex]: updatedCache }));

        setStatusMessage(
          addedCount > 0
            ? `${addedCount} new videos were added to ${getChannelLabel(config, slotIndex)}.`
            : `No new videos were found for ${getChannelLabel(config, slotIndex)}.`,
        );
      } catch {
        setStatusMessage("Failed to build the playlist.");
      } finally {
        setIsAppendingMoreVideos(false);
        isAppendingMoreRef.current = false;
      }
    },
    [
      apiKey,
      channelCacheBySlot,
      channels,
      fetchVideosForKeywords,
      mergePlaylistKeepFirst,
      trimPlaylistAndAdjustProgress,
    ],
  );

  const jumpToPlaylistVideo = useCallback(
    async (selectedIndex: number) => {
      if (isSelectingFromPlaylistRef.current) return;

      const playlist = channelCacheBySlot[currentChannelIndex]?.playlist ?? [];
      if (!playlist.length) {
        setStatusMessage("There is no playlist for the current channel.");
        return;
      }

      if (selectedIndex < 0 || selectedIndex >= playlist.length) return;

      isSelectingFromPlaylistRef.current = true;

      try {
        await playSpecificVideo({
          channelIndex: currentChannelIndex,
          videoIndex: selectedIndex,
          updateStatusPrefix: `${getChannelLabel(
            channels[currentChannelIndex],
            currentChannelIndex,
          )} selected from playlist`,
          forcePlay: true,
        });
      } finally {
        isSelectingFromPlaylistRef.current = false;
      }
    },
    [channelCacheBySlot, channels, currentChannelIndex, playSpecificVideo],
  );

  const playPreviousVideo = useCallback(async () => {
    if (!hasStarted) {
      setStatusMessage("Please select a channel first.");
      return;
    }

    if (!currentPlaylist.length) {
      setStatusMessage("There is no playlist for the current channel.");
      return;
    }

    const previousIndex =
      (currentVideoIndex - 1 + currentPlaylist.length) % currentPlaylist.length;

    await playSpecificVideo({
      channelIndex: currentChannelIndex,
      videoIndex: previousIndex,
      updateStatusPrefix: `${getChannelLabel(
        channels[currentChannelIndex],
        currentChannelIndex,
      )} previous video`,
    });
  }, [
    channels,
    currentChannelIndex,
    currentPlaylist,
    currentVideoIndex,
    hasStarted,
    playSpecificVideo,
  ]);

  const playNextVideoManually = useCallback(async () => {
    if (!hasStarted) {
      setStatusMessage("Please select a channel first.");
      return;
    }

    if (!currentPlaylist.length) {
      setStatusMessage("There is no playlist for the current channel.");
      return;
    }

    const nextIndex = (currentVideoIndex + 1) % currentPlaylist.length;

    await playSpecificVideo({
      channelIndex: currentChannelIndex,
      videoIndex: nextIndex,
      updateStatusPrefix: `${getChannelLabel(
        channels[currentChannelIndex],
        currentChannelIndex,
      )} next video`,
    });
  }, [
    channels,
    currentChannelIndex,
    currentPlaylist,
    currentVideoIndex,
    hasStarted,
    playSpecificVideo,
  ]);

  useEffect(() => {
    if (!hasStarted) return;

    const storageKey = getSlotStorageKey(currentChannelIndex);
    const savedId = loadLastVideoId(storageKey);
    const playlist = channelCacheBySlot[currentChannelIndex]?.playlist ?? [];
    if (!savedId || !playlist.length) return;

    const foundIndex = playlist.findIndex((item) => item.videoId === savedId);
    if (foundIndex >= 0 && foundIndex !== currentVideoIndex) {
      setCurrentVideoIndex(foundIndex);
      currentVideoIndexRef.current = foundIndex;
    }
  }, [channelCacheBySlot, currentChannelIndex, currentVideoIndex, hasStarted]);

  function scrollChannels(direction: "left" | "right"): void {
    if (!channelRailRef.current) {
      return;
    }

    channelRailRef.current.scrollBy({
      left: direction === "left" ? -220 : 220,
      behavior: "smooth",
    });
  }

  if (isLoading) {
    return (
      <main className="page">
        <SiteHeader currentPath="/watch" />
        <style jsx global>{sharedStyles}</style>

        <div className="watchViewport">
          <div className="watchPlayerCard" style={{ flex: 1 }}>
            <div className="watchPlayerFrame">
              <div className="watchPlayerPlaceholder">
                <div className="watchPlayerIcon" />
                <div className="watchPlayerMessage">Loading saved browser data...</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <SiteHeader currentPath="/watch" />
      <style jsx global>{sharedStyles}</style>

      <div className="watchViewport">
        <div className="watchControlRow">
          <button
            type="button"
            className="secondaryButton watchControlButton"
            onClick={() => void playPreviousVideo()}
          >
            Previous
          </button>

          <button
            type="button"
            className="secondaryButton watchControlButton"
            onClick={() => void playNextVideoManually()}
          >
            Next
          </button>

          <button
            type="button"
            className={`secondaryButton watchControlButton ${
              isPlaylistOpen ? "watchTopButtonActive" : ""
            }`}
            onClick={() => setIsPlaylistOpen((current) => !current)}
          >
            Current Playlist
          </button>
        </div>

        <div className={`watchPlayerArea ${isPlaylistOpen ? "" : "playlistClosed"}`}>
          <div className="watchPlayerCard">
            <div className="watchPlayerFrame">
              {!currentVideo?.videoId ? (
                <div className="watchPlayerPlaceholder">
                  <div className="watchPlayerIcon" />
                  <div className="watchPlayerMessage">
                    Playback starts when you select a channel.
                  </div>
                </div>
              ) : null}

              <div
                id={playerMountIdRef.current}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  inset: 0,
                }}
              />
            </div>
          </div>

          {isPlaylistOpen ? (
            <aside className="watchPlaylistPanel">
              <div className="watchPlaylistHeader">Current Playlist</div>

              <div className="watchPlaylistBody">
                {currentPlaylist.length ? (
                  currentPlaylist.map((item, index) => {
                    const isCurrentPlaying = hasStarted && index === currentVideoIndex;

                    return (
                      <button
                        key={`${item.videoId}-${index}`}
                        type="button"
                        className="watchPlaylistRow"
                        onClick={() => void jumpToPlaylistVideo(index)}
                      >
                        <span
                          className={`watchPlaylistBadge ${
                            isCurrentPlaying ? "watchPlaylistBadgeActive" : ""
                          }`}
                        >
                          {index + 1}
                        </span>

                        <span className="watchPlaylistContent">
                          <span className="watchPlaylistTitle">{item.title}</span>
                          <span className="watchPlaylistSubtitle">
                            Click to play this video
                          </span>
                        </span>

                        <span className="watchPlaylistArrow">›</span>
                      </button>
                    );
                  })
                ) : (
                  <div className="watchPlaylistEmpty">There is no playlist yet.</div>
                )}
              </div>
            </aside>
          ) : null}
        </div>

        <div className="watchStatusRow">
          <div className="watchStatusText">{statusMessage}</div>

          <button
            type="button"
            className="secondaryButton watchFillButton"
            onClick={() => void appendMoreVideosForChannel(currentChannelIndex)}
          >
            {isAppendingMoreVideos ? "Loading..." : "Load More for Selected Channel"}
          </button>
        </div>

        <div className="watchChannelRow">
          <button
            type="button"
            className="watchRailArrow"
            onClick={() => scrollChannels("left")}
            aria-label="Scroll channels left"
          >
            ‹
          </button>

          <div className="watchChannelRail" ref={channelRailRef}>
            {channels.map((channel, index) => {
              const isActive = index === currentChannelIndex;

              return (
                <button
                  key={`${getChannelLabel(channel, index)}-${index}`}
                  type="button"
                  className={`watchChannelButton ${
                    isActive ? "primaryButton" : "secondaryButton"
                  }`}
                  onClick={() => void playChannel(index)}
                >
                  {getChannelLabel(channel, index)}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="watchRailArrow"
            onClick={() => scrollChannels("right")}
            aria-label="Scroll channels right"
          >
            ›
          </button>
        </div>
      </div>
    </main>
  );
}

function getSlotStorageKey(slotIndex: number): string {
  return `slot_${slotIndex}`;
}

const sharedStyles = `
  .watchViewport {
    height: calc(100vh - 93px);
    min-height: calc(100vh - 93px);
    max-height: calc(100vh - 93px);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 12px 16px 14px;
    gap: 10px;
    background:
      linear-gradient(
        90deg,
        rgba(30, 58, 100, 0.50) 0%,
        rgba(2, 6, 23, 0.96) 22%,
        rgba(2, 6, 23, 0.98) 78%,
        rgba(30, 58, 100, 0.32) 100%
      );
  }

  .watchControlRow {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    min-height: 48px;
    flex-shrink: 0;
  }

  .watchControlButton {
    min-height: 44px;
    padding: 0 16px;
    border-radius: 14px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
  }

  .watchPlayerArea {
    flex: 1;
    min-height: 0;
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 12px;
  }

  .watchPlayerArea.playlistClosed {
    grid-template-columns: 1fr;
  }

  .watchPlayerCard {
    min-height: 0;
    border-radius: 28px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background:
      linear-gradient(
        180deg,
        rgba(16, 24, 40, 0.88),
        rgba(8, 15, 30, 0.92)
      );
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.20);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .watchPlayerFrame {
    width: 100%;
    height: 100%;
    background: #000;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .watchPlayerPlaceholder {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    color: rgba(255, 255, 255, 0.72);
    text-align: center;
    padding: 24px;
  }

  .watchPlayerIcon {
    width: 78px;
    height: 56px;
    border: 5px solid rgba(255, 255, 255, 0.18);
    border-radius: 8px;
    position: relative;
    box-sizing: border-box;
  }

  .watchPlayerIcon::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -12px;
    transform: translateX(-50%);
    width: 30px;
    height: 8px;
    background: rgba(255, 255, 255, 0.18);
    border-radius: 2px;
  }

  .watchPlayerMessage {
    font-size: 18px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.82);
  }

  .watchPlaylistPanel {
    min-height: 0;
    border-radius: 28px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background:
      linear-gradient(
        180deg,
        rgba(16, 24, 40, 0.88),
        rgba(8, 15, 30, 0.92)
      );
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.20);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .watchPlaylistHeader {
    padding: 16px 18px 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 16px;
    font-weight: 800;
    color: #f8fafc;
    flex-shrink: 0;
  }

  .watchPlaylistBody {
    padding: 0;
    overflow-y: auto;
    display: block;
  }

  .watchPlaylistRow {
    width: 100%;
    min-height: 120px;
    padding: 18px 16px;
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    background: transparent;
    color: #e2e8f0;
    display: grid;
    grid-template-columns: 64px minmax(0, 1fr) 28px;
    align-items: center;
    gap: 14px;
    text-align: left;
    cursor: pointer;
    transition:
      background-color 0.18s ease,
      color 0.18s ease;
  }

  .watchPlaylistRow:hover {
    background: rgba(255, 255, 255, 0.03);
    color: #ffffff;
  }

  .watchPlaylistBadge {
    width: 48px;
    height: 48px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.24);
    color: #f8fafc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 800;
    flex-shrink: 0;
  }

  .watchPlaylistBadgeActive {
    background: #dc2626;
    color: #ffffff;
    box-shadow: 0 8px 18px rgba(220, 38, 38, 0.28);
  }

  .watchPlaylistContent {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .watchPlaylistTitle {
    display: block;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    color: #f8fafc;
    white-space: normal;
    word-break: keep-all;
    overflow-wrap: anywhere;
  }

  .watchPlaylistSubtitle {
    display: block;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.45;
    color: #94a3b8;
    white-space: normal;
  }

  .watchPlaylistArrow {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 34px;
    line-height: 1;
    color: #cbd5e1;
    flex-shrink: 0;
  }

  .watchPlaylistEmpty {
    font-size: 14px;
    color: #cbd5e1;
    padding: 16px;
  }

  .watchStatusRow {
    min-height: 52px;
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.02);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 0 12px 0 16px;
    flex-shrink: 0;
  }

  .watchStatusText {
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
    font-weight: 600;
    color: #f0f4f8;
  }

  .watchFillButton {
    min-height: 40px;
    padding: 0 14px;
    border-radius: 14px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    flex-shrink: 0;
  }

  .watchChannelRow {
    min-height: 92px;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.32);
    display: grid;
    grid-template-columns: 40px 1fr 40px;
    align-items: center;
    gap: 8px;
    padding: 0 4px;
    flex-shrink: 0;
  }

  .watchRailArrow {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    line-height: 1;
    cursor: pointer;
    transition:
      background-color 0.18s ease,
      border-color 0.18s ease,
      color 0.18s ease,
      transform 0.18s ease;
  }

  .watchRailArrow:hover {
    background: rgba(96, 165, 250, 0.16);
    border-color: rgba(96, 165, 250, 0.38);
    color: #ffffff;
    transform: translateY(-1px);
  }

  .watchChannelRail {
    min-width: 0;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    gap: 12px;
    padding: 8px 4px;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.35) transparent;
  }

  .watchChannelRail::-webkit-scrollbar {
    height: 10px;
  }

  .watchChannelRail::-webkit-scrollbar-track {
    background: transparent;
  }

  .watchChannelRail::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.35);
    border-radius: 999px;
  }

  .watchChannelButton {
    min-width: 150px;
    height: 58px;
    padding: 0 18px;
    border-radius: 18px;
    font-size: 16px;
    font-weight: 800;
    flex-shrink: 0;
    cursor: pointer;
    transition:
      background-color 0.18s ease,
      border-color 0.18s ease,
      color 0.18s ease,
      transform 0.18s ease;
  }

  .watchChannelButton:hover {
    transform: translateY(-1px);
  }

  .watchTopButtonActive {
    background: #60a5fa !important;
    color: #0b1220 !important;
    border-color: rgba(96, 165, 250, 0.5) !important;
    box-shadow: 0 8px 24px rgba(96, 165, 250, 0.20);
  }

  @media (max-width: 1200px) {
    .watchPlayerArea {
      grid-template-columns: 1fr 320px;
    }
  }

  @media (max-width: 980px) {
    .watchViewport {
      height: auto;
      min-height: calc(100vh - 93px);
      max-height: none;
      overflow: auto;
    }

    .watchPlayerArea,
    .watchPlayerArea.playlistClosed {
      grid-template-columns: 1fr;
    }

    .watchPlaylistPanel {
      min-height: 260px;
    }

    .watchPlaylistRow {
      grid-template-columns: 56px minmax(0, 1fr) 24px;
      min-height: 108px;
      padding: 16px 14px;
    }

    .watchPlaylistBadge {
      width: 42px;
      height: 42px;
      font-size: 16px;
    }

    .watchPlaylistTitle {
      font-size: 15px;
    }

    .watchPlaylistSubtitle {
      font-size: 12px;
    }

    .watchPlaylistArrow {
      font-size: 28px;
    }
  }
`;