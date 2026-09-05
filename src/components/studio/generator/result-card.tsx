import Image from "next/image";

import type { GenerationJob, GenerationStatus } from "@/types/studio";

/**
 * One badge style per status, defined as a map rather than a chain of ternaries so a new
 * status is a compile error here (the Record is exhaustive) instead of a silently unstyled
 * chip at runtime.
 */
const STATUS_BADGE: Record<GenerationStatus, { label: string; className: string }> = {
  queued: { label: "Queued", className: "bg-muted text-muted-foreground" },
  rendering: { label: "Rendering", className: "bg-primary text-primary-foreground" },
  ready: { label: "Ready", className: "bg-brand-accent text-white" },
  failed: { label: "Failed", className: "bg-destructive text-destructive-foreground" },
};

export default function ResultCard({ job }: { job: GenerationJob }) {
  const badge = STATUS_BADGE[job.status];

  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-card">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={job.thumbnailSrc}
          alt=""
          fill
          sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 90vw"
          className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
            job.status === "ready" ? "" : "opacity-50"
          }`}
        />

        <span
          className={`absolute top-2 left-2 rounded-full px-2 py-0.5 text-[11px] font-medium ${badge.className}`}
        >
          {badge.label}
        </span>

        {job.duration !== undefined && (
          <span className="absolute right-2 bottom-2 rounded bg-black/75 px-1.5 py-0.5 text-[11px] font-medium text-white">
            {job.duration}
          </span>
        )}

        {job.status === "rendering" && (
          // An indeterminate bar, not a percentage: the mock has no real progress to report
          // and a fixed "62%" that never moves reads as a stuck job.
          <span className="absolute inset-x-0 bottom-0 h-0.5 overflow-hidden bg-black/20">
            <span className="block h-full w-1/3 animate-pulse bg-primary" />
          </span>
        )}
      </div>

      <div className="p-3">
        <p className="line-clamp-2 text-sm leading-5 font-medium text-foreground">{job.prompt}</p>
        <p className="mt-1 text-xs text-brand-muted">
          {job.styleLabel} · {job.createdLabel}
        </p>
        {job.failureReason !== undefined && (
          <p role="alert" className="mt-1 text-xs text-destructive">
            {job.failureReason}
          </p>
        )}
      </div>
    </article>
  );
}
