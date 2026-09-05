import type { Metadata } from "next";

import ClipList from "@/components/studio/editor/clip-list";
import EditorPreview from "@/components/studio/editor/editor-preview";
import InspectorPanel from "@/components/studio/editor/inspector-panel";
import TimelineTrack from "@/components/studio/editor/timeline-track";
import { MOCK_EDITOR_SCENES, MOCK_TIMELINE_CLIPS } from "@/mocks/studio-mocks";

export const metadata: Metadata = {
  title: "Editor",
  description: "Arrange generated scenes into an episode.",
};

export default function StudioEditorPage() {
  return (
    <div className="space-y-6 p-4 lg:p-6">
      <header>
        <h1 className="text-2xl font-semibold text-foreground">Editor</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Arrange generated scenes into an episode. This is a UI preview — playback and editing are
          not wired up.
        </p>
      </header>

      <div className="flex flex-col gap-6 xl:flex-row">
        <div className="min-w-0 flex-1 space-y-6">
          <EditorPreview
            posterSrc="/dummy/thumbnail_image01.avif"
            elapsed="0:14"
            total="0:51"
            progress={27}
          />
          <TimelineTrack clips={MOCK_TIMELINE_CLIPS} playheadPercent={27} />
          <ClipList scenes={MOCK_EDITOR_SCENES} />
        </div>
        <InspectorPanel
          activeTab="Scenes"
          sceneCount={MOCK_EDITOR_SCENES.length}
          totalDuration="0:51"
        />
      </div>
    </div>
  );
}
