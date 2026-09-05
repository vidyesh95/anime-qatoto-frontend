import Link from "next/link";

/**
 * The honest placeholder, and the reason it is not a bare `<h1>`.
 *
 * Several destinations are listed in the nav with nothing distinguishing them from the ones
 * that work. Clicking one and getting a naked heading means the navigation made a promise the
 * page did not keep. This says plainly that there is nothing here yet, says what it would do,
 * and -- only when there genuinely is one -- points at the nearest thing that does work.
 *
 * `insteadFor` IS OPTIONAL AND USUALLY ABSENT, deliberately. A link that does not answer the
 * need costs more than no link, because it spends the reader's trust to save them nothing.
 */
export default function PlannedPage({
  title,
  summary,
  whatItWillDo,
  insteadFor,
}: {
  readonly title: string;
  readonly summary: string;
  readonly whatItWillDo: readonly string[];
  readonly insteadFor?: {
    readonly label: string;
    readonly href: string;
    readonly note: string;
  };
}) {
  return (
    <div className="p-4 lg:p-6">
      <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{summary}</p>

      <div className="mt-6 max-w-2xl rounded-2xl border border-dashed border-border p-6">
        <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
          Not built yet
        </p>
        <p className="mt-2 text-sm text-foreground">
          This page has no working version. It is in the nav so the shape of the app is visible, not
          because there is something here to use.
        </p>

        {whatItWillDo.length > 0 && (
          <>
            <p className="mt-4 text-sm font-medium text-foreground">What it will do</p>
            <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              {whatItWillDo.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          </>
        )}

        {insteadFor === undefined ? (
          <p className="mt-4 text-sm text-muted-foreground">
            There is nowhere else in the app that does this today.
          </p>
        ) : (
          <p className="mt-4 text-sm text-muted-foreground">
            {insteadFor.note}{" "}
            <Link href={insteadFor.href} className="text-foreground underline">
              {insteadFor.label}
            </Link>
            .
          </p>
        )}
      </div>
    </div>
  );
}
