"use client";

import { THEME_STORAGE_KEY } from "@/components/theme/theme-script";

/**
 * NO STATE AND NO EFFECT, deliberately.
 *
 * The obvious build reads `documentElement.classList` in a `useEffect` and stores it. That
 * cannot work cleanly here: the value is only knowable on the client, so the server renders
 * one icon and the effect immediately swaps it -- a cascading render, and a visible flicker
 * on every load.
 *
 * Instead BOTH icons are rendered and CSS picks. The `dark` variant is driven by the same
 * class `ThemeScript` sets before first paint, so the correct glyph is showing in the very
 * first frame and React never re-renders this component at all.
 *
 * INLINE SVG rather than `next/image` over `public/icons`, unlike every other icon in the
 * app: the set shipped `dark_mode` with no `light_mode`, and a half-matched pair looks
 * broken mid-toggle. `currentColor` also means they follow `text-foreground` for free.
 */
function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4.25" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true">
      {/* A big disc minus an offset disc, cut by the even-odd rule -- a crescent, no arc maths. */}
      <path
        fillRule="evenodd"
        d="M12 21a9 9 0 1 1 0-18 9 9 0 1 1 0 18Zm4.5-4.2a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
      />
    </svg>
  );
}

/**
 * Module scope, not a closure: with no state left this captures nothing, so re-creating it on
 * every render would be pure waste. The DOM class is the single source of truth -- read it,
 * flip it, persist it.
 */
function toggleTheme() {
  const next = !document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark", next);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
  } catch {
    /* storage blocked: the class still flipped, it just will not survive a reload */
  }
}

export default function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="grid size-10 cursor-pointer place-items-center rounded-full text-foreground transition-colors hover:bg-black/5 dark:hover:bg-white/10"
    >
      <span className="grid size-6 place-items-center dark:hidden">
        <MoonIcon />
      </span>
      <span className="hidden size-6 place-items-center dark:grid">
        <SunIcon />
      </span>
    </button>
  );
}
