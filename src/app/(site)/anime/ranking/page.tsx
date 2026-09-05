import type { Metadata } from "next";

import RankingPage from "@/components/anime/pages/ranking-page";

export const metadata: Metadata = {
  title: "Ranking",
  description: "The most-watched anime this week, month, and year.",
};

export default function Page() {
  return <RankingPage />;
}
