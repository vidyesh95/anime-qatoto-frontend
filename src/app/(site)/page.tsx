import type { Metadata } from "next";

import AnimePage from "@/components/anime/anime-page";

export const metadata: Metadata = {
  title: "Anime",
  description: "Browse trending anime, recent episodes, and completed series.",
};

export default function Home() {
  return <AnimePage />;
}
