import Image from "next/image";

/**
 * The player frame. Transport controls are drawn, not wired -- the scrubber is a static fill
 * and the buttons do nothing, which is why they are `disabled` rather than merely unhandled:
 * a control that looks live and swallows a click is worse than one that says it is off.
 */
export default function EditorPreview({
  posterSrc,
  elapsed,
  total,
  progress,
}: {
  posterSrc: string;
  elapsed: string;
  total: string;
  progress: number;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative aspect-video bg-black">
        <Image
          src={posterSrc}
          alt=""
          fill
          sizes="(min-width: 1280px) 800px, 100vw"
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 grid place-items-center">
          <span className="grid size-14 place-items-center rounded-full bg-black/55 text-white ring-1 ring-white/25">
            <svg viewBox="0 0 24 24" width={28} height={28} fill="currentColor" aria-hidden="true">
              <path d="M9 6.5v11l9-5.5-9-5.5Z" />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 px-3 py-2.5">
        <span className="font-mono text-xs text-brand-muted">{elapsed}</span>
        {/*
          A real <progress> rather than a div with role="progressbar": it carries the value
          semantics for free, and the vendor pseudo-elements are the only way to colour the
          bar and the fill separately.
        */}
        <progress
          value={progress}
          max={100}
          aria-label="Playback position"
          className="h-1 flex-1 overflow-hidden rounded-full bg-muted [&::-moz-progress-bar]:bg-brand-accent [&::-webkit-progress-bar]:bg-muted [&::-webkit-progress-value]:bg-brand-accent"
        />
        <span className="font-mono text-xs text-brand-muted">{total}</span>
      </div>
    </div>
  );
}
