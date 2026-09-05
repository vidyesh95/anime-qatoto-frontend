// TRANSPORT: mock — every rail and the hero read from `@/mocks/anime-mocks`.
//
// THE HERO IS IMPORTED DIRECTLY, unlike the repo this came from. There, the hero was an async
// server component fetching `GET /anime/hero-slides`, and this file is `"use client"` -- a
// client component cannot import an async server component, so the route had to render the
// hero itself and pass it down as a `heroSlot` prop through a `<Suspense>` boundary with an
// aspect-matched fallback box.
//
// With fixtures there is nothing async and nothing to await, so the slot, the Suspense
// boundary and the fallback all went away and the carousel is just an import. Keeping the
// indirection would have meant threading a prop through two files to defer a synchronous
// array read.
"use client";

import AnimeHeroCarousel from "@/components/anime/sections/anime-hero-carousel";
import MediaRail from "@/components/anime/rails/media-rail";
import CategoryLinks from "@/components/anime/sections/category-links";
import {
  ANIME_CATEGORIES,
  MOCK_COMPLETED_SERIES,
  MOCK_HERO_SLIDES,
  MOCK_NEW_ARRIVALS,
  MOCK_RECENT_EPISODES,
  MOCK_RECOMMENDED_ANIME,
  MOCK_TRENDING_ANIME,
} from "@/mocks/anime-mocks";

export default function AnimePage() {
  return (
    <div className="pb-10">
      <AnimeHeroCarousel slides={MOCK_HERO_SLIDES} />
      <CategoryLinks categories={ANIME_CATEGORIES} />
      <div className="mt-4 space-y-4">
        <MediaRail
          title="Recent Episode 💡"
          href="/?view=recent"
          items={MOCK_RECENT_EPISODES}
          variant="landscape"
        />
        <MediaRail
          title="Recommended For You 🔬"
          href="/?view=recommended"
          items={MOCK_RECOMMENDED_ANIME}
          variant="landscape"
        />
        <MediaRail
          title="Completed Series 👍🏻"
          href="/?view=completed"
          items={MOCK_COMPLETED_SERIES}
          variant="poster"
        />
        <MediaRail
          title="Trending 📈"
          href="/?view=trending"
          items={MOCK_TRENDING_ANIME}
          variant="poster-lg"
        />
        <MediaRail
          title="New Arrivals 🛬"
          href="/?view=new"
          items={MOCK_NEW_ARRIVALS}
          variant="poster-lg"
        />
      </div>
    </div>
  );
}
