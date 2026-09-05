import type { Metadata } from "next";

import AnimeSeriesDetailPage from "@/components/anime/pages/series-detail-page";
import { MOCK_ANIME_SERIES, MOCK_ANIME_SERIES_SLUGS } from "@/mocks/anime-mocks";

/**
 * `dynamicParams = false` is load-bearing, not tidiness.
 *
 * Left at its default (true) an unknown slug still renders, hits `notFound()` and shows the
 * right page -- but the response goes out as `200` with `x-nextjs-prerender: 1`, because the
 * not-found result gets prerendered and the status is lost through the cache. A soft 404 like
 * that is exactly what a crawler indexes as a thin page.
 *
 * The fixture set is CLOSED -- there is no backend, so a series that is not in
 * `MOCK_ANIME_SERIES` cannot exist -- which makes 404-ing at the router both correct and
 * cheaper than rendering to discover the same thing. The `notFound()` in the component stays
 * as the guard for a slug that is listed but has no fixture.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return MOCK_ANIME_SERIES_SLUGS.map((seriesSlug) => ({ seriesSlug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/anime/series/[seriesSlug]">): Promise<Metadata> {
  const { seriesSlug } = await params;
  const series = MOCK_ANIME_SERIES[seriesSlug];

  if (series === undefined) return { title: "Series not found" };

  return {
    title: series.title,
    ...(series.description === null ? {} : { description: series.description }),
  };
}

export default async function Page({ params }: PageProps<"/anime/series/[seriesSlug]">) {
  const { seriesSlug } = await params;
  return <AnimeSeriesDetailPage seriesSlug={seriesSlug} />;
}
