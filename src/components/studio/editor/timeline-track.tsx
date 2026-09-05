import Image from "next/image";

import type { TimelineClip } from "@/types/studio";

/**
 * Clip blocks are sized from `widthFraction` as a percentage, so the track reads as a real
 * timeline -- a two-second transition is visibly a sliver next to an eighteen-second scene.
 * Equal-width blocks would have been easier and would have said nothing true about the cut.
 *
 * The fractions in the fixture sum to 1. Nothing enforces that; they are just authored to.
 */
const KIND_TINT: Record<TimelineClip["kind"], string> = {
  scene: "border-brand-accent/40",
  transition: "border-secondary",
  title: "border-primary",
};

export default function TimelineTrack({
  clips,
  playheadPercent,
}: {
  clips: TimelineClip[];
  playheadPercent: number;
}) {
  return (
    <section>
      <h2 className="text-sm font-medium text-foreground">Timeline</h2>
      <div className="relative mt-2 overflow-x-auto">
        <div className="flex min-w-160 gap-1">
          {clips.map((clip) => (
            <div
              key={clip.id}
              style={{ width: `${clip.widthFraction * 100}%` }}
              className={`relative shrink-0 overflow-hidden rounded-lg border-2 bg-card ${KIND_TINT[clip.kind]}`}
            >
              <div className="relative aspect-video min-h-12 bg-muted">
                <Image src={clip.thumbnailSrc} alt="" fill sizes="200px" className="object-cover" />
              </div>
              <div className="px-1.5 py-1">
                <p className="truncate text-[11px] leading-4 font-medium text-foreground">
                  {clip.label}
                </p>
                <p className="font-mono text-[10px] text-brand-muted">{clip.duration}</p>
              </div>
            </div>
          ))}
        </div>

        {/* The playhead spans the whole track, so it sits outside the flex row. */}
        <span
          aria-hidden="true"
          style={{ left: `${playheadPercent}%` }}
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-destructive"
        />
      </div>
    </section>
  );
}
