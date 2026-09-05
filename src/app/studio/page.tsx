import type { Metadata } from "next";

import AspectRatioPicker from "@/components/studio/generator/aspect-ratio-picker";
import PromptPanel from "@/components/studio/generator/prompt-panel";
import ResultsGrid from "@/components/studio/generator/results-grid";
import StyleChips from "@/components/studio/generator/style-chips";
import {
  MOCK_GENERATION_JOBS,
  STUDIO_ASPECT_RATIOS,
  STUDIO_STYLE_CHIPS,
} from "@/mocks/studio-mocks";

export const metadata: Metadata = {
  title: "Generate",
  description: "Describe a scene and generate anime from it.",
};

const SAMPLE_PROMPT =
  "A swordsman waits out the rain under a shrine gate at dusk, steam rising off his shoulders. Hold on his hands, then pull back as the rain stops.";

export default function StudioGeneratePage() {
  return (
    <div className="space-y-6 p-4 lg:p-6">
      <header>
        <h1 className="text-2xl font-semibold text-foreground">Generate</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Describe a scene, pick a style, and render it. This is a UI preview — nothing here is
          wired to a model yet.
        </p>
      </header>

      <div className="max-w-3xl space-y-5">
        <PromptPanel prompt={SAMPLE_PROMPT} />
        <StyleChips chips={STUDIO_STYLE_CHIPS} selectedId="seinen" />
        <AspectRatioPicker ratios={STUDIO_ASPECT_RATIOS} selectedId="16-9" />
      </div>

      <ResultsGrid jobs={MOCK_GENERATION_JOBS} />
    </div>
  );
}
