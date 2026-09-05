import Image from "next/image";

import type { EditorScene } from "@/types/studio";

/** The `daily-episode-row` layout: 3:4 thumb, title, note, duration pinned bottom-right. */
export default function ClipList({ scenes }: { scenes: EditorScene[] }) {
  return (
    <section>
      <h2 className="text-sm font-medium text-foreground">Clips</h2>
      <ul className="mt-2 divide-y divide-border rounded-xl border border-border bg-card">
        {scenes.map((scene) => (
          <li
            key={scene.id}
            className="flex gap-3 p-2.5 transition-colors hover:bg-black/5 dark:hover:bg-white/5"
          >
            <div className="relative aspect-video w-24 shrink-0 overflow-hidden rounded bg-muted">
              <Image src={scene.thumbnailSrc} alt="" fill sizes="96px" className="object-cover" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <p className="truncate text-sm font-medium text-foreground">{scene.label}</p>
              <p className="mt-0.5 line-clamp-2 text-xs text-brand-muted">{scene.note}</p>
              <span className="mt-auto pt-1 font-mono text-xs text-foreground">
                {scene.duration}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
