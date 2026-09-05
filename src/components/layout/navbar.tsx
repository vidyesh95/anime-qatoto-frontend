"use client";

import Image from "next/image";
import Link from "next/link";

import ThemeToggle from "@/components/theme/theme-toggle";
import { useSidebar } from "@/state/sidebar-context";

/**
 * `sticky top-0` with `bg-background`, and the height is load-bearing: the tab strips on
 * /anime/daily, /anime/ranking, /anime/favorite and the episode grid all pin themselves at
 * `top-13` (3.25rem) so they come to rest flush under this bar. Change the vertical padding
 * here and those four go with it.
 */
export default function Navbar() {
  const { toggleSidebar } = useSidebar();

  return (
    <nav className="sticky top-0 z-50 bg-background">
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
          <Link
            href="/"
            className="shrink-0 font-serif text-2xl font-medium text-brand-accent sm:text-3xl"
          >
            Anime Qatoto
          </Link>
        </div>

        <div className="hidden items-center justify-end gap-2 xl:absolute xl:left-1/2 xl:flex xl:w-xl xl:-translate-x-1/2">
          <form action="/" method="get" className="group relative flex items-center rounded-full">
            <input
              type="search"
              id="nav-search-query"
              name="query"
              aria-label="Search"
              placeholder="Search anime"
              className="w-64 rounded-l-full border border-primary bg-input py-1.75 pl-4 text-foreground focus:w-72 focus:pl-10 lg:w-101 lg:focus:w-107"
            />
            <Image
              src="/icons/search_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
              alt=""
              width={24}
              height={24}
              className="absolute top-2 left-2 hidden group-focus-within:block dark:invert"
            />
            <button
              type="submit"
              aria-label="Search"
              className="cursor-pointer rounded-r-full bg-primary py-2 pr-4 pl-2"
            >
              <Image
                src="/icons/search_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                alt=""
                width={24}
                height={24}
              />
            </button>
          </form>
        </div>

        <div className="flex items-center gap-x-1">
          <Link
            href="/"
            aria-label="Search"
            className="cursor-pointer rounded-full border border-primary bg-input p-1.75 xl:hidden"
          >
            <Image
              src="/icons/search_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
              alt=""
              width={24}
              height={24}
              className="dark:invert"
            />
          </Link>
          <ThemeToggle />
          {/*
            A STATIC AVATAR, not an account menu. There is no auth in this app, and a menu
            whose every row is inert reads as broken rather than as a preview.
          */}
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
