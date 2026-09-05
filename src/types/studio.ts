// Shapes for the Studio surfaces: the AI generator, the video editor, and the publish queue.
//
// STATIC MOCK. Nothing in the Studio is wired -- no model is called, no file is written, no
// upload happens. These types exist so the fixtures and the components agree on a shape, and
// so that wiring them later is a change of source rather than a change of markup.
//
// Durations and counts are PRE-FORMATTED DISPLAY STRINGS, matching the convention the anime
// types already use: nothing here does arithmetic on them, and a mock that stores `"2:14"`
// cannot drift from what the component prints.

export type GenerationStatus = "queued" | "rendering" | "ready" | "failed";

export type StyleChip = {
  id: string;
  label: string;
};

export type AspectRatio = {
  id: string;
  label: string;
  /** Tailwind aspect utility the preview tile uses, e.g. `aspect-video`. */
  aspectClass: string;
};

export type GenerationJob = {
  id: string;
  prompt: string;
  thumbnailSrc: string;
  status: GenerationStatus;
  /** Absent while queued -- there is no length until something has been rendered. */
  duration?: string;
  styleLabel: string;
  createdLabel: string;
  /** Only set when `status` is `failed`; the card renders it in place of the duration. */
  failureReason?: string;
};

export type TimelineClip = {
  id: string;
  label: string;
  thumbnailSrc: string;
  duration: string;
  /** Share of the timeline's width, 0-1. The track sizes each block from this. */
  widthFraction: number;
  kind: "scene" | "transition" | "title";
};

export type EditorScene = {
  id: string;
  label: string;
  thumbnailSrc: string;
  duration: string;
  note: string;
};

export type PublishState = "draft" | "uploading" | "published" | "failed";

export type PublishItem = {
  id: string;
  title: string;
  thumbnailSrc: string;
  state: PublishState;
  visibility: "public" | "unlisted" | "private";
  /** 0-100. Only meaningful while `state` is `uploading`. */
  progress: number;
  detail: string;
};
