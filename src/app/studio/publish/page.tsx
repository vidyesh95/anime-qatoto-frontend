import type { Metadata } from "next";

import PublishQueue from "@/components/studio/publish/publish-queue";
import { MOCK_PUBLISH_ITEMS } from "@/mocks/studio-mocks";

export const metadata: Metadata = {
  title: "Publish",
  description: "Queue finished episodes for upload to YouTube.",
};

export default function StudioPublishPage() {
  return (
    <div className="space-y-6 p-4 lg:p-6">
      <header>
        <h1 className="text-2xl font-semibold text-foreground">Publish</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Finished episodes queued for YouTube. This is a UI preview — no account is connected and
          nothing uploads.
        </p>
      </header>

      <PublishQueue items={MOCK_PUBLISH_ITEMS} />
    </div>
  );
}
