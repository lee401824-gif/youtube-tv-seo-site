import type { KeywordSearchResult, VideoItem } from "@/app/lib/channel-types";
import {
  loadPlaylistGenerationSettings,
  type PlaylistDurationMode,
  type PlaylistLanguageMode,
} from "@/app/lib/local-store";

const HOST = "www.googleapis.com";
const SEARCH_PATH = "/youtube/v3/search";
const VIDEOS_PATH = "/youtube/v3/videos";

export async function fetchVideosForKeyword(params: {
  apiKey: string;
  keyword: string;
  maxResults?: number;
  pageToken?: string | null;
}): Promise<KeywordSearchResult> {
  const trimmedApiKey = params.apiKey.trim();
  const trimmedKeyword = params.keyword.trim();
  const generationSettings = loadPlaylistGenerationSettings();

  if (!trimmedApiKey) {
    throw new Error("API key is empty.");
  }

  if (!trimmedKeyword) {
    return { videos: [], nextPageToken: null };
  }

  const relevanceLanguage = getRelevanceLanguage(generationSettings.languageMode);

  const queryParams: Record<string, string> = {
    part: "snippet",
    q: trimmedKeyword,
    type: "video",
    maxResults: String(params.maxResults ?? 50),
    order: "relevance",
    regionCode: "US",
    safeSearch: "moderate",
    videoEmbeddable: "true",
    key: trimmedApiKey,
  };

  if (relevanceLanguage) {
    queryParams.relevanceLanguage = relevanceLanguage;
  }

  const trimmedPageToken = params.pageToken?.trim() ?? "";
  if (trimmedPageToken) {
    queryParams.pageToken = trimmedPageToken;
  }

  const searchUri = new URL(`https://${HOST}${SEARCH_PATH}`);
  Object.entries(queryParams).forEach(([key, value]) => {
    searchUri.searchParams.set(key, value);
  });

  const searchResponse = await fetch(searchUri.toString());
  if (!searchResponse.ok) {
    throw new Error(`search.list failed: ${searchResponse.status}`);
  }

  const searchJson = (await searchResponse.json()) as {
    nextPageToken?: string;
    items?: Array<{ id?: { videoId?: string } }>;
  };

  const nextPageToken = searchJson.nextPageToken?.trim() || null;
  const orderedIds = (searchJson.items ?? [])
    .map((item) => item?.id?.videoId?.trim() ?? "")
    .filter(Boolean);

  if (!orderedIds.length) {
    return { videos: [], nextPageToken };
  }

  const videosUri = new URL(`https://${HOST}${VIDEOS_PATH}`);
  const videoQuery: Record<string, string> = {
    part: "snippet,contentDetails,status",
    id: orderedIds.join(","),
    key: trimmedApiKey,
  };
  Object.entries(videoQuery).forEach(([key, value]) => {
    videosUri.searchParams.set(key, value);
  });

  const videosResponse = await fetch(videosUri.toString());
  if (!videosResponse.ok) {
    throw new Error(`videos.list failed: ${videosResponse.status}`);
  }

  const videosJson = (await videosResponse.json()) as {
    items?: Array<{
      id?: string;
      snippet?: { title?: string; liveBroadcastContent?: string };
      contentDetails?: { duration?: string };
      status?: { embeddable?: boolean };
    }>;
  };

  const byId = new Map<string, VideoItem>();
  for (const item of videosJson.items ?? []) {
    const videoId = item.id?.trim() ?? "";
    if (!videoId) continue;

    const embeddable = item.status?.embeddable === true;
    const liveBroadcastContent = item.snippet?.liveBroadcastContent ?? "none";
    const durationSeconds = parseIso8601Duration(item.contentDetails?.duration ?? "");

    if (!embeddable) continue;
    if (liveBroadcastContent !== "none") continue;
    if (!matchesDurationFilter(durationSeconds, generationSettings.durationMode)) continue;

    byId.set(videoId, {
      videoId,
      title: item.snippet?.title?.trim() || "Untitled video",
      sourceKeyword: trimmedKeyword,
      durationSeconds,
    });
  }

  const orderedVideos: VideoItem[] = [];
  for (const id of orderedIds) {
    const match = byId.get(id);
    if (match) {
      orderedVideos.push(match);
    }
  }

  return {
    videos: orderedVideos,
    nextPageToken,
  };
}

function getRelevanceLanguage(languageMode: PlaylistLanguageMode): string | null {
  switch (languageMode) {
    case "en":
      return "en";
    case "ko":
      return "ko";
    case "ja":
      return "ja";
    case "zh":
      return "zh";
    case "hi":
      return "hi";
    case "pt-BR":
      return "pt";
    case "all":
      return null;
    default:
      return "en";
  }
}

function matchesDurationFilter(
  durationSeconds: number,
  durationMode: PlaylistDurationMode,
): boolean {
  switch (durationMode) {
    case "min_180":
      return durationSeconds >= 180;
    case "min_120":
      return durationSeconds >= 120;
    case "min_60":
      return durationSeconds >= 60;
    case "max_179":
      return durationSeconds > 0 && durationSeconds < 180;
    case "all":
      return durationSeconds > 0;
    default:
      return durationSeconds >= 180;
  }
}

function parseIso8601Duration(input: string): number {
  if (!input || !input.startsWith("P")) {
    return 0;
  }

  const match = /^P(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/.exec(input);
  if (!match) {
    return 0;
  }

  const days = Number(match[1] ?? 0);
  const hours = Number(match[2] ?? 0);
  const minutes = Number(match[3] ?? 0);
  const seconds = Number(match[4] ?? 0);

  return days * 86400 + hours * 3600 + minutes * 60 + seconds;
}
