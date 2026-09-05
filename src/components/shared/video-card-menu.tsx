"use client";

// TRANSPORT: none. Every row here is INERT BY DESIGN.
//
// The version this was lifted from was a 554-line wired client island: five TanStack Query
// mutations (save, share, not-interested, creator mute), a queue context, and three sheet
// components for share / save-to-playlist / report. All of that talks to a backend, and this
// app has none -- so porting it would have meant porting the auth, query and mutation stack
// to render controls that could not do anything anyway.
//
// WHAT IS KEPT IS THE CHROME, because that is the part the card's layout depends on: the
// kebab trigger that has to swallow the stretched link's click, the bottom-sheet-on-mobile /
// dropdown-on-desktop panel, the grab handle, and the row metrics. Escape and outside-press
// still close the menu -- an open panel you cannot dismiss would be a worse mock than none.
//
// The props are unchanged so `video-card.tsx` did not have to be touched; most are unread
// here and stay in the type as the contract a real menu would need.

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function iconSrc(iconBaseName: string, isFilled = false): string {
  return `/icons/${iconBaseName}_24dp_000000_FILL${isFilled ? 1 : 0}_wght400_GRAD0_opsz24.svg`;
}

type VideoCardMenuProps = {
  videoId?: string;
  title: string;
  shareUrl?: string;
  hasSaved?: boolean;
  creatorId?: string;
  channelName?: string;
  thumbnailSrc?: string;
};

const MENU_ROWS = [
  { icon: "bookmark", label: "Save" },
  { icon: "playlist_add", label: "Add to queue" },
  { icon: "share", label: "Share" },
  { icon: "flag", label: "Report" },
] as const;

export default function VideoCardMenu({ title, hasSaved = false }: VideoCardMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (keyboardEvent: KeyboardEvent) => {
      if (keyboardEvent.key === "Escape") setIsMenuOpen(false);
    };
    const handlePressOutside = (pointerEvent: MouseEvent) => {
      const pressedNode = pointerEvent.target;
      if (
        pressedNode instanceof Node &&
        panelRef.current &&
        !panelRef.current.contains(pressedNode)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePressOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePressOutside);
    };
  }, [isMenuOpen]);

  return (
    <div ref={panelRef} className="relative shrink-0">
      <button
        type="button"
        aria-label={`More options for ${title}`}
        aria-expanded={isMenuOpen}
        aria-haspopup="menu"
        onClick={(clickEvent) => {
          // The card wraps a stretched link; without this the click navigates instead.
          clickEvent.preventDefault();
          clickEvent.stopPropagation();
          setIsMenuOpen((wasOpen) => !wasOpen);
        }}
        className="relative z-10 cursor-pointer rounded-full p-1 hover:bg-black/20"
      >
        <Image src={iconSrc("more_vert")} width={24} height={24} alt="" className="size-4" />
      </button>

      {isMenuOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 sm:hidden"
          />
          <div
            role="menu"
            aria-label="Video options"
            className="fixed inset-x-0 bottom-0 z-50 max-h-[90dvh] overflow-y-auto rounded-t-2xl bg-background pb-8 shadow-lg sm:absolute sm:inset-x-auto sm:top-full sm:right-0 sm:bottom-auto sm:mt-1 sm:w-64 sm:max-w-[calc(100vw-1rem)] sm:rounded-xl sm:border sm:border-border sm:py-1 sm:pb-1 sm:shadow-lg"
          >
            <div className="flex justify-center pt-3 pb-1 sm:hidden">
              <span className="h-1.5 w-10 rounded-full bg-black/15" />
            </div>

            {MENU_ROWS.map((row) => (
              <button
                key={row.label}
                type="button"
                role="menuitem"
                disabled
                className="flex w-full flex-row items-center gap-3 px-4 py-2.5 text-left text-sm opacity-60"
              >
                <Image
                  src={iconSrc(row.icon, row.icon === "bookmark" && hasSaved)}
                  width={24}
                  height={24}
                  alt=""
                  className="shrink-0"
                />
                {row.label}
              </button>
            ))}

            <p className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              This is a UI preview — these actions are not wired up.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
