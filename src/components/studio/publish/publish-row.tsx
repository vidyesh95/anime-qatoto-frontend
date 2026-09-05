import Image from "next/image";

import type { PublishItem, PublishState } from "@/types/studio";

/** Exhaustive by construction: a new state is a compile error, not an unstyled chip. */
const STATE_BADGE: Record<PublishState, { label: string; className: string }> = {
  draft: { label: "Draft", className: "bg-muted text-muted-foreground" },
  uploading: { label: "Uploading", className: "bg-primary text-primary-foreground" },
  published: { label: "Published", className: "bg-brand-accent text-white" },
  failed: { label: "Failed", className: "bg-destructive text-destructive-foreground" },
};

const VISIBILITY_LABEL: Record<PublishItem["visibility"], string> = {
  public: "Public",
  unlisted: "Unlisted",
  private: "Private",
};

export default function PublishRow({ item }: { item: PublishItem }) {
  const badge = STATE_BADGE[item.state];

  return (
    <li className="flex gap-3 p-3 transition-colors hover:bg-black/5 dark:hover:bg-white/5">
      <div className="relative aspect-video w-32 shrink-0 overflow-hidden rounded bg-muted sm:w-40">
        <Image src={item.thumbnailSrc} alt="" fill sizes="160px" className="object-cover" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <p className="line-clamp-2 text-sm leading-5 font-medium text-foreground">{item.title}</p>

        <div className="mt-1.5 flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${badge.className}`}>
            {badge.label}
          </span>
          <span className="text-xs text-brand-muted">{VISIBILITY_LABEL[item.visibility]}</span>
        </div>

        {item.state === "uploading" && (
          <progress
            value={item.progress}
            max={100}
            aria-label={`Upload progress for ${item.title}`}
            className="mt-2 block h-1 w-full max-w-xs overflow-hidden rounded-full bg-muted [&::-moz-progress-bar]:bg-primary [&::-webkit-progress-bar]:bg-muted [&::-webkit-progress-value]:bg-primary"
          />
        )}

        <p
          {...(item.state === "failed" ? { role: "alert" as const } : {})}
          className={`mt-auto pt-1.5 text-xs ${
            item.state === "failed" ? "text-destructive" : "text-brand-muted"
          }`}
        >
          {item.detail}
        </p>
      </div>
    </li>
  );
}
