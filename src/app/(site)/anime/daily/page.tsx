import type { Metadata } from "next";

import DailyPage from "@/components/anime/pages/daily-page";

export const metadata: Metadata = {
  title: "Daily",
  description: "This week's episode schedule, day by day.",
};

export default function Page() {
  return <DailyPage />;
}
