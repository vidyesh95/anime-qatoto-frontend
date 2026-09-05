import type { Metadata } from "next";

import GenrePage from "@/components/anime/pages/genre-page";

export const metadata: Metadata = {
  title: "Genre",
  description: "Browse anime by genre.",
};

export default function Page() {
  return <GenrePage />;
}
