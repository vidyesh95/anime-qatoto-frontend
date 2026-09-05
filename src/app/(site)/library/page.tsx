import type { Metadata } from "next";

import PlannedPage from "@/components/shared/planned-page";

export const metadata: Metadata = {
  title: "Library",
  description: "Your saved anime, watch history, and playlists.",
};

export default function Page() {
  return (
    <PlannedPage
      title="Library"
      summary="Your saved anime, watch history, and playlists."
      whatItWillDo={[
        "Collect everything you have saved or bookmarked in one place",
        "Keep watch history and resume positions across devices",
        "Group episodes into playlists you can reorder and share",
      ]}
      insteadFor={{
        label: "Favorite",
        href: "/anime/favorite",
        note: "The liked and bookmarked lists already render from fixtures on",
      }}
    />
  );
}
