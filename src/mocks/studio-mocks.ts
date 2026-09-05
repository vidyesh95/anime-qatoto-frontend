// Fixtures for the Studio surfaces. Nothing here is generated, rendered or uploaded -- these
// are the values the static mock draws itself from.
//
// Each list deliberately covers EVERY state its component can render. A fixture set where all
// four jobs were `ready` would leave the queued, rendering and failed branches unrendered,
// which is exactly how a status badge ships with the wrong colour.

import type {
  AspectRatio,
  EditorScene,
  GenerationJob,
  PublishItem,
  StyleChip,
  TimelineClip,
} from "@/types/studio";

export const STUDIO_STYLE_CHIPS: StyleChip[] = [
  { id: "shonen", label: "Shonen" },
  { id: "shojo", label: "Shojo" },
  { id: "seinen", label: "Seinen" },
  { id: "chibi", label: "Chibi" },
  { id: "cel-90s", label: "90s cel" },
  { id: "watercolor", label: "Watercolour" },
  { id: "noir", label: "Ink noir" },
];

export const STUDIO_ASPECT_RATIOS: AspectRatio[] = [
  { id: "16-9", label: "16:9", aspectClass: "aspect-video" },
  { id: "9-16", label: "9:16", aspectClass: "aspect-[9/16]" },
  { id: "1-1", label: "1:1", aspectClass: "aspect-square" },
  { id: "4-3", label: "4:3", aspectClass: "aspect-[4/3]" },
];

export const MOCK_GENERATION_JOBS: GenerationJob[] = [
  {
    id: "job-01",
    prompt: "A swordsman waits out the rain under a shrine gate, steam rising off his shoulders",
    thumbnailSrc: "/dummy/thumbnail_image01.avif",
    status: "ready",
    duration: "0:12",
    styleLabel: "Seinen",
    createdLabel: "2 minutes ago",
  },
  {
    id: "job-02",
    prompt: "Two students race a train along a seawall at golden hour",
    thumbnailSrc: "/dummy/thumbnail_image02.avif",
    status: "ready",
    duration: "0:08",
    styleLabel: "90s cel",
    createdLabel: "11 minutes ago",
  },
  {
    id: "job-03",
    prompt: "A courier fox crosses a frozen river at night, lantern swinging",
    thumbnailSrc: "/dummy/thumbnail_image03.avif",
    status: "rendering",
    styleLabel: "Watercolour",
    createdLabel: "just now",
  },
  {
    id: "job-04",
    prompt: "Rooftop duel above a neon market, rain on the blades",
    thumbnailSrc: "/dummy/thumbnail_image04.avif",
    status: "queued",
    styleLabel: "Ink noir",
    createdLabel: "just now",
  },
  {
    id: "job-05",
    prompt: "A quiet kitchen at dawn, one cup of tea going cold",
    thumbnailSrc: "/dummy/thumbnail_image05.avif",
    status: "ready",
    duration: "0:15",
    styleLabel: "Shojo",
    createdLabel: "1 hour ago",
  },
  {
    id: "job-06",
    prompt: "Mecha hangar wakes up, floodlights coming on in sequence",
    thumbnailSrc: "/dummy/thumbnail_image06.avif",
    status: "failed",
    styleLabel: "Shonen",
    createdLabel: "1 hour ago",
    failureReason: "Render timed out",
  },
];

export const MOCK_TIMELINE_CLIPS: TimelineClip[] = [
  {
    id: "clip-01",
    label: "Cold open",
    thumbnailSrc: "/dummy/thumbnail_image01.avif",
    duration: "0:12",
    widthFraction: 0.24,
    kind: "scene",
  },
  {
    id: "clip-02",
    label: "Title card",
    thumbnailSrc: "/dummy/thumbnail_image07.avif",
    duration: "0:03",
    widthFraction: 0.07,
    kind: "title",
  },
  {
    id: "clip-03",
    label: "Seawall chase",
    thumbnailSrc: "/dummy/thumbnail_image02.avif",
    duration: "0:18",
    widthFraction: 0.33,
    kind: "scene",
  },
  {
    id: "clip-04",
    label: "Cross-dissolve",
    thumbnailSrc: "/dummy/thumbnail_image08.avif",
    duration: "0:02",
    widthFraction: 0.05,
    kind: "transition",
  },
  {
    id: "clip-05",
    label: "Frozen river",
    thumbnailSrc: "/dummy/thumbnail_image03.avif",
    duration: "0:16",
    widthFraction: 0.31,
    kind: "scene",
  },
];

export const MOCK_EDITOR_SCENES: EditorScene[] = [
  {
    id: "scene-01",
    label: "Cold open",
    thumbnailSrc: "/dummy/thumbnail_image01.avif",
    duration: "0:12",
    note: "Rain loop, no dialogue",
  },
  {
    id: "scene-02",
    label: "Seawall chase",
    thumbnailSrc: "/dummy/thumbnail_image02.avif",
    duration: "0:18",
    note: "Camera tracks left, 2x speed ramp",
  },
  {
    id: "scene-03",
    label: "Frozen river",
    thumbnailSrc: "/dummy/thumbnail_image03.avif",
    duration: "0:16",
    note: "Lantern is the only key light",
  },
  {
    id: "scene-04",
    label: "Kitchen at dawn",
    thumbnailSrc: "/dummy/thumbnail_image05.avif",
    duration: "0:15",
    note: "Hold on the cup for the last beat",
  },
];

export const MOCK_PUBLISH_ITEMS: PublishItem[] = [
  {
    id: "pub-01",
    title: "Ember and Ash — Episode 1: The Unfinished Edge",
    thumbnailSrc: "/dummy/thumbnail_image01.avif",
    state: "published",
    visibility: "public",
    progress: 100,
    detail: "Published 3 days ago",
  },
  {
    id: "pub-02",
    title: "Ember and Ash — Episode 2: Nine Days of Rain",
    thumbnailSrc: "/dummy/thumbnail_image02.avif",
    state: "uploading",
    visibility: "unlisted",
    progress: 62,
    detail: "Uploading — about 4 minutes left",
  },
  {
    id: "pub-03",
    title: "The Quiet Tide — Episode 1: Low Water",
    thumbnailSrc: "/dummy/thumbnail_image05.avif",
    state: "draft",
    visibility: "private",
    progress: 0,
    detail: "Draft — no thumbnail or description yet",
  },
  {
    id: "pub-04",
    title: "Studio test render — rooftop duel",
    thumbnailSrc: "/dummy/thumbnail_image04.avif",
    state: "failed",
    visibility: "private",
    progress: 0,
    detail: "Upload rejected — video is shorter than 5 seconds",
  },
];
