import {
  type ChannelCacheData,
  type ChannelConfig,
  ensureMinimumChannels,
} from "@/app/lib/channel-types";

const API_KEY_KEY = "youtube_api_key";
const CHANNEL_CONFIGS_KEY = "channel_configs_json";
const LAST_CHANNEL_INDEX_KEY = "last_channel_index";
const PLAYLIST_GENERATION_SETTINGS_KEY = "playlist_generation_settings";

export type PlaylistDurationMode =
  | "min_180"
  | "min_120"
  | "min_60"
  | "all"
  | "max_179";

export type PlaylistLanguageMode =
  | "en"
  | "ko"
  | "ja"
  | "zh"
  | "hi"
  | "pt-BR"
  | "all";

export type PlaylistGenerationSettings = {
  durationMode: PlaylistDurationMode;
  playlistMaxSize: number;
  languageMode: PlaylistLanguageMode;
};

const DEFAULT_PLAYLIST_GENERATION_SETTINGS: PlaylistGenerationSettings = {
  durationMode: "min_180",
  playlistMaxSize: 300,
  languageMode: "en",
};

function canUseStorage(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function getLastVideoIndexKey(channelSlotKey: string): string {
  return `last_video_index_${channelSlotKey}`;
}

function getLastVideoIdKey(channelSlotKey: string): string {
  return `last_video_id_${channelSlotKey}`;
}

function getChannelCacheKey(slotIndex: number): string {
  return `channel_cache_slot_${slotIndex}`;
}

function isValidDurationMode(value: unknown): value is PlaylistDurationMode {
  return (
    value === "min_180" ||
    value === "min_120" ||
    value === "min_60" ||
    value === "all" ||
    value === "max_179"
  );
}

function isValidLanguageMode(value: unknown): value is PlaylistLanguageMode {
  return (
    value === "en" ||
    value === "ko" ||
    value === "ja" ||
    value === "zh" ||
    value === "hi" ||
    value === "pt-BR" ||
    value === "all"
  );
}

function normalizePlaylistMaxSize(value: unknown): number {
  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    return DEFAULT_PLAYLIST_GENERATION_SETTINGS.playlistMaxSize;
  }

  const rounded = Math.round(parsed);
  const minimum = 1;
  const maximum = 1000;

  if (rounded < minimum) {
    return minimum;
  }

  if (rounded > maximum) {
    return maximum;
  }

  return rounded;
}

function normalizePlaylistGenerationSettings(
  input: Partial<PlaylistGenerationSettings> | null | undefined,
): PlaylistGenerationSettings {
  return {
    durationMode: isValidDurationMode(input?.durationMode)
      ? input.durationMode
      : DEFAULT_PLAYLIST_GENERATION_SETTINGS.durationMode,
    playlistMaxSize: normalizePlaylistMaxSize(input?.playlistMaxSize),
    languageMode: isValidLanguageMode(input?.languageMode)
      ? input.languageMode
      : DEFAULT_PLAYLIST_GENERATION_SETTINGS.languageMode,
  };
}

export function getDefaultPlaylistGenerationSettings(): PlaylistGenerationSettings {
  return {
    ...DEFAULT_PLAYLIST_GENERATION_SETTINGS,
  };
}

export function loadPlaylistGenerationSettings(): PlaylistGenerationSettings {
  if (!canUseStorage()) {
    return getDefaultPlaylistGenerationSettings();
  }

  const raw = window.localStorage.getItem(PLAYLIST_GENERATION_SETTINGS_KEY);
  if (!raw) {
    return getDefaultPlaylistGenerationSettings();
  }

  try {
    const parsed = JSON.parse(raw) as Partial<PlaylistGenerationSettings>;
    return normalizePlaylistGenerationSettings(parsed);
  } catch {
    return getDefaultPlaylistGenerationSettings();
  }
}

export function savePlaylistGenerationSettings(
  settings: PlaylistGenerationSettings,
): void {
  if (!canUseStorage()) {
    return;
  }

  const safeSettings = normalizePlaylistGenerationSettings(settings);

  window.localStorage.setItem(
    PLAYLIST_GENERATION_SETTINGS_KEY,
    JSON.stringify(safeSettings),
  );
}

export function loadApiKey(): string {
  if (!canUseStorage()) {
    return "";
  }

  return window.localStorage.getItem(API_KEY_KEY) ?? "";
}

export function saveApiKey(apiKey: string): void {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.setItem(API_KEY_KEY, apiKey);
}

export function loadChannelConfigs(): ChannelConfig[] {
  if (!canUseStorage()) {
    return ensureMinimumChannels([]);
  }

  const raw = window.localStorage.getItem(CHANNEL_CONFIGS_KEY);
  if (!raw) {
    return ensureMinimumChannels([]);
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return ensureMinimumChannels([]);
    }

    return ensureMinimumChannels(parsed as ChannelConfig[]);
  } catch {
    return ensureMinimumChannels([]);
  }
}

export function saveChannelConfigs(configs: ChannelConfig[]): void {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.setItem(CHANNEL_CONFIGS_KEY, JSON.stringify(configs));
}

export function loadChannelCache(slotIndex: number): ChannelCacheData | null {
  if (!canUseStorage()) {
    return null;
  }

  const raw = window.localStorage.getItem(getChannelCacheKey(slotIndex));
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as ChannelCacheData;
  } catch {
    return null;
  }
}

export function saveChannelCache(slotIndex: number, cacheData: ChannelCacheData): void {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.setItem(getChannelCacheKey(slotIndex), JSON.stringify(cacheData));
}

export function clearChannelCache(slotIndex: number): void {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.removeItem(getChannelCacheKey(slotIndex));
}

export function loadLastChannelIndex(): number {
  if (!canUseStorage()) {
    return 0;
  }

  const raw = window.localStorage.getItem(LAST_CHANNEL_INDEX_KEY);
  const value = Number(raw ?? "0");
  return Number.isFinite(value) && value >= 0 ? value : 0;
}

export function saveLastChannelIndex(index: number): void {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.setItem(LAST_CHANNEL_INDEX_KEY, String(index));
}

export function loadLastVideoIndex(channelSlotKey: string): number | null {
  if (!canUseStorage()) {
    return null;
  }

  const raw = window.localStorage.getItem(getLastVideoIndexKey(channelSlotKey));
  if (raw == null) {
    return null;
  }

  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : null;
}

export function saveLastVideoIndex(channelSlotKey: string, index: number): void {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.setItem(getLastVideoIndexKey(channelSlotKey), String(index));
}

export function loadLastVideoId(channelSlotKey: string): string | null {
  if (!canUseStorage()) {
    return null;
  }

  return window.localStorage.getItem(getLastVideoIdKey(channelSlotKey));
}

export function saveLastVideoId(channelSlotKey: string, videoId: string): void {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.setItem(getLastVideoIdKey(channelSlotKey), videoId);
}

export function clearPlaybackProgress(channelSlotKey: string): void {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.removeItem(getLastVideoIndexKey(channelSlotKey));
  window.localStorage.removeItem(getLastVideoIdKey(channelSlotKey));
}
