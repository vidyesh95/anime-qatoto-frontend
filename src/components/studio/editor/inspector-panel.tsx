/**
 * The right rail. `sticky top-13` matches the anime tab strips -- the studio navbar is the
 * same height as the site one, so the panel comes to rest flush under it.
 *
 * The tab strip is drawn in its selected state and does not switch: with three panels' worth
 * of fixtures and no state, a tab that highlights on click but changes nothing below it would
 * be a worse lie than one that plainly does not move.
 */
const TABS = ["Scenes", "Audio", "Export"] as const;

export default function InspectorPanel({
  activeTab,
  sceneCount,
  totalDuration,
}: {
  activeTab: (typeof TABS)[number];
  sceneCount: number;
  totalDuration: string;
}) {
  return (
    <aside className="w-full shrink-0 xl:w-72">
      <div className="sticky top-13 rounded-2xl border border-border bg-card">
        <div className="flex border-b border-border">
          {TABS.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                disabled
                aria-pressed={isActive}
                className={`relative flex-1 px-3 py-2.5 text-sm font-medium ${
                  isActive ? "text-brand-accent" : "text-brand-muted"
                }`}
              >
                {tab}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-px h-0.75 rounded-t-full bg-brand-accent" />
                )}
              </button>
            );
          })}
        </div>

        <dl className="divide-y divide-border text-sm">
          <div className="flex items-center justify-between px-3 py-2.5">
            <dt className="text-brand-muted">Scenes</dt>
            <dd className="font-medium text-foreground">{sceneCount}</dd>
          </div>
          <div className="flex items-center justify-between px-3 py-2.5">
            <dt className="text-brand-muted">Duration</dt>
            <dd className="font-mono font-medium text-foreground">{totalDuration}</dd>
          </div>
          <div className="flex items-center justify-between px-3 py-2.5">
            <dt className="text-brand-muted">Resolution</dt>
            <dd className="font-medium text-foreground">1920 × 1080</dd>
          </div>
          <div className="flex items-center justify-between px-3 py-2.5">
            <dt className="text-brand-muted">Frame rate</dt>
            <dd className="font-medium text-foreground">24 fps</dd>
          </div>
        </dl>

        <div className="border-t border-border p-3">
          <button
            type="button"
            disabled
            className="w-full rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground opacity-70"
          >
            Export
          </button>
        </div>
      </div>
    </aside>
  );
}
