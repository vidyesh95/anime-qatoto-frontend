"use client";

import Image from "next/image";
import Link from "next/link";

import ThemeToggle from "@/components/theme/theme-toggle";
import { useSidebar } from "@/state/sidebar-context";

/**
 * Mirrors the site navbar's metrics exactly -- same `sticky top-0 z-50`, same `py-2` -- and
 * swaps the wordmark. That is not cosmetic: the studio surfaces reuse the same `sticky top-13`
 * tab idiom as the anime pages, so the two bars have to be the same height or the strips come
 * to rest in different places on either side of the app.
 */
export default function StudioNavbar() {
  const { toggleSidebar } = useSidebar();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="relative mx-auto flex items-center justify-between px-4 py-2 lg:px-6">
        <div className="flex min-w-0 items-center gap-2.5 lg:gap-4.5">
          <button
            type="button"
            aria-label="Toggle sidebar"
            className="hidden cursor-pointer rounded-full p-2 transition-colors hover:bg-black/5 md:block dark:hover:bg-white/10"
            onClick={toggleSidebar}
          >
            <Image
              src="/icons/menu_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
              alt=""
              width={24}
              height={24}
              className="dark:invert"
            />
          </button>
          <div className="flex min-w-0 items-baseline gap-2">
            <Link href="/" className="shrink-0 font-serif text-2xl font-medium text-brand-accent">
              Anime Qatoto
            </Link>
            <span aria-hidden="true" className="shrink-0 font-serif text-xl text-brand-accent/40">
              |
            </span>
            <span className="truncate text-lg font-medium text-foreground">Studio</span>
          </div>
        </div>

        <div className="flex items-center gap-x-1">
          <ThemeToggle />
          <Image
            src="/dummy/profile_image_01.avif"
            alt=""
            width={32}
            height={32}
            className="size-8 shrink-0 rounded-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
}
