// Shared domain types for the anime surface.
//
// This app has no backend: every screen renders from `@/mocks/anime-mocks`. These shapes are
// the contract between those fixtures and the components, and are deliberately UI-shaped --
// `views` and `likes` are pre-formatted display strings ("730.1k views", "8.8m"), not numbers,
// because nothing here ever does arithmetic on them.

export type Media = { id: string; imageSrc: string; title: string };

export type RankedEpisode = {
  id: string;
  rank: number;
  imageSrc: string;
  title: string;
  channelName: string;
  views: string;
  likes: string;
  verified?: boolean;
};

export type DailyEpisode = {
  id: string;
  imageSrc: string;
  title: string;
  channelName: string;
  views: string;
  likes: string;
  verified?: boolean;
};

export type Period = "Weekly" | "Monthly" | "Yearly";
export type RankingSort = "Trending" | "Most viewed" | "Most liked" | "Newest";
export type Day = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";
export type Genre =
  | "All"
  | "Fantasy"
  | "Romance"
  | "Immortal"
  | "Martial Arts"
  | "Adventure"
  | "Action"
  | "Slice of Life"
  | "Sci-fi"
  | "Comedy"
  | "Horror"
  | "History";
export type GenreSort = "Hottest" | "Latest" | "Completed";
export type FavoriteTab = "Liked" | "Bookmarked";

/**
 * A slide in the hero carousel.
 *
 * In the repo this was extracted from, the hero was an async server component reading
 * `GET /anime/hero-slides`, and the shape came from a Zod-parsed wire schema. With no
 * backend the fetch layer is gone and this is a plain local type -- but the field names are
 * kept identical so `AnimeHeroCarousel` could be pointed back at a real endpoint unchanged.
 *
 * `destinationPath` is nullable because a slide is allowed to be decorative: the carousel
 * renders a plain `<div>` instead of a `<Link>` when there is nowhere to go.
 */
export type HeroSlide = {
  id: string;
  imageUrl: string;
  title: string;
  destinationPath: string | null;
};
