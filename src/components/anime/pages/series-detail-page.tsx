// TRANSPORT: mock — reads `MOCK_ANIME_SERIES` from `@/mocks/anime-mocks`.
//
// The version this came from was an async server component over `GET /anime/series/:slug`,
// and it split failure into two states: a 404 meant the series is genuinely not public, while
// any other error meant the READ failed and rendering "this show does not exist" would be a
// lie a crawler could cache.
//
// With a local fixture map that second state cannot occur -- an object lookup does not fail --
// so the `unavailable` arm is gone rather than kept as unreachable code. `not-found` stays
// real: any slug without a fixture still has to 404.

import { notFound } from "next/navigation";

import EpisodeGrid from "@/components/anime/sections/episode-grid";
import SeriesHero from "@/components/anime/sections/series-hero";
import { MOCK_ANIME_SERIES } from "@/mocks/anime-mocks";

export default function AnimeSeriesDetailPage({ seriesSlug }: { seriesSlug: string }) {
  const series = MOCK_ANIME_SERIES[seriesSlug];

  // `notFound()` is typed `never` and throws, so nothing below runs for an unknown slug.
  if (series === undefined) notFound();

  return (
    <div className="pb-12">
      <SeriesHero series={series} />
      <EpisodeGrid seasons={series.seasons} />
    </div>
  );
}
