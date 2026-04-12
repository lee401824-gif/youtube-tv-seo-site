export type ChannelConfig = {
  displayName: string;
  keywords: string[];
};

export type VideoItem = {
  videoId: string;
  title: string;
  sourceKeyword: string;
  durationSeconds: number;
};

export type PlaylistGenerationSnapshot = {
  durationMode: string;
  playlistMaxSize: number;
  regionCode: string;
};

export type ChannelCacheData = {
  displayNameSnapshot: string;
  keywordsSnapshot: string[];
  playlist: VideoItem[];
  nextPageTokenByKeyword: Record<string, string>;
  generationSettingsSnapshot?: PlaylistGenerationSnapshot;
};

export type KeywordSearchResult = {
  videos: VideoItem[];
  nextPageToken: string | null;
};

export const MINIMUM_CHANNEL_COUNT = 6;
export const DEFAULT_KEYWORD_COUNT = 3;
export const PLAYLIST_MAX_SIZE = 300;

export function createEmptyChannel(): ChannelConfig {
  return {
    displayName: "",
    keywords: Array.from({ length: DEFAULT_KEYWORD_COUNT }, () => ""),
  };
}

export function normalizeChannelConfig(
  input: Partial<ChannelConfig> | null | undefined,
): ChannelConfig {
  const rawKeywords = Array.isArray(input?.keywords) ? input?.keywords : [];
  const keywords = rawKeywords.map((item) => String(item ?? ""));

  while (keywords.length < DEFAULT_KEYWORD_COUNT) {
    keywords.push("");
  }

  return {
    displayName: String(input?.displayName ?? ""),
    keywords,
  };
}

export function ensureMinimumChannels(configs: ChannelConfig[]): ChannelConfig[] {
  const safeConfigs = configs.map((item) => normalizeChannelConfig(item));

  while (safeConfigs.length < MINIMUM_CHANNEL_COUNT) {
    safeConfigs.push(createEmptyChannel());
  }

  return safeConfigs;
}

export function getChannelLabel(channel: ChannelConfig, index: number): string {
  const trimmed = channel.displayName.trim();
  if (trimmed) {
    return trimmed;
  }
  return `Channel ${index + 1}`;
}

export function getEffectiveKeywords(channel: ChannelConfig): string[] {
  const result: string[] = [];
  const seen = new Set<string>();

  for (const raw of channel.keywords) {
    const trimmed = raw.trim();
    if (!trimmed) {
      continue;
    }

    const normalized = trimmed.toLowerCase();
    if (seen.has(normalized)) {
      continue;
    }

    seen.add(normalized);
    result.push(trimmed);
  }

  return result;
}

export function getNormalizedKeywordSet(channel: ChannelConfig): string[] {
  return getEffectiveKeywords(channel).map((item) => item.trim().toLowerCase());
}

export function normalizeKeyword(input: string): string {
  return input.trim().toLowerCase();
}

export function normalizeName(input: string): string {
  return input.trim().toLowerCase();
}

export function createEmptyChannelCache(): ChannelCacheData {
  return {
    displayNameSnapshot: "",
    keywordsSnapshot: [],
    playlist: [],
    nextPageTokenByKeyword: {},
  };
}
