import type { Metadata } from "next";

import WatchPage from "@/components/anime/pages/watch-page";

export const metadata: Metadata = {
  title: "Watch",
  description: "Watch an episode.",
};

export default async function Page({ searchParams }: PageProps<"/anime/watch">) {
  const { v } = await searchParams;
  // `v` is `string | string[] | undefined` -- a repeated ?v= would make it an array.
  const videoId = Array.isArray(v) ? v[0] : v;
  return <WatchPage videoId={videoId} />;
}
