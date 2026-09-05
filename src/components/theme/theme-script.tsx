/**
 * Runs BEFORE first paint, which is the whole point — a theme applied in `useEffect` paints
 * the light palette first and then flips, and that flash is worse than not having the toggle.
 *
 * `suppressHydrationWarning` on `<html>` is required because this script mutates `className`
 * before React hydrates, so the server markup and the live DOM legitimately disagree.
 */
export const THEME_STORAGE_KEY = "anime-qatoto.theme";

const script = `
(function () {
  try {
    var stored = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored === "dark" || (stored !== "light" && prefersDark)) {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {
    /* private mode / blocked storage: fall through to the light default */
  }
})();
`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
