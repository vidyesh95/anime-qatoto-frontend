import type { Metadata } from "next";

import FavoritePage from "@/components/anime/pages/favorite-page";

export const metadata: Metadata = {
  title: "Favorite",
  description: "Anime you have liked and bookmarked.",
};

export default function Page() {
  return <FavoritePage />;
}
