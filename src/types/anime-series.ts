// Series / season / episode shapes for the anime detail page.
//
// These were Zod-parsed wire schemas (`@/lib/anime/schemas`) in the repo this UI came from,
// where the `Public` prefix marked "safe to send to an unauthenticated client". There is no
// wire here and nothing to parse, so they are plain types -- but the FIELD NAMES AND
// NULLABILITY ARE UNCHANGED, so `series-hero`, `episode-grid` and the detail page could be
// pointed back at a real endpoint without touching their bodies.
//
// The nullable fields are not incidental: every one of them is a branch the components
// actually render (no poster -> flat muted band, no duration -> no chip, and so on), so the
// fixtures in `@/mocks/anime-mocks` deliberately exercise both sides.

export type AnimeSeriesStatus = "ongoing" | "completed" | "hiatus";

export const ANIME_SERIES_STATUS_LABELS: Record<AnimeSeriesStatus, string> = {
  ongoing: "Ongoing",
  completed: "Completed",
  hiatus: "On hiatus",
};

export type PublicAnimeEpisode = {
  episodeId: string;
  videoId: string;
  episodeNumber: number;
  episodeTitle: string;
  thumbnailUrl: string | null;
  durationSeconds: number | null;
  audioMode: "subbed" | "dubbed" | null;
  audioLanguage: string | null;
  ageRating: string | null;
  releasedAt: string | null;
};

export type PublicAnimeSeason = {
  seasonId: string;
  seasonLabel: string;
  position: number;
  episodes: PublicAnimeEpisode[];
};

export type PublicAnimeSeriesDetail = {
  seriesSlug: string;
  title: string;
  description: string | null;
  posterUrl: string | null;
  genreTags: string[];
  status: AnimeSeriesStatus;
  seasons: PublicAnimeSeason[];
  updatedAt: string;
};
