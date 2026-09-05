/**
 * The prompt box. `readOnly` rather than `disabled` on purpose: a disabled textarea greys its
 * own text out and drops out of the tab order, so the sample prompt -- which is the whole
 * point of the mock -- would be the hardest thing on the page to read.
 */
export default function PromptPanel({ prompt }: { prompt: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <label htmlFor="studio-prompt" className="text-sm font-medium text-foreground">
        Describe the scene
      </label>
      <textarea
        id="studio-prompt"
        rows={4}
        readOnly
        value={prompt}
        className="mt-2 w-full resize-none rounded-xl border border-border bg-input px-3 py-2 text-sm text-foreground"
      />
      <div className="mt-2 flex items-center justify-between gap-3">
        <span className="text-xs text-brand-muted">{prompt.length} / 2000</span>
        <button
          type="button"
          disabled
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground opacity-70"
        >
          Generate
        </button>
      </div>
    </div>
  );
}
