"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { PRIMARY_NAV, isRouteActive } from "@/components/layout/nav-config";

/**
 * The under-`md` counterpart to the sidebar, from the same `PRIMARY_NAV` array.
 *
 * `pb-[env(safe-area-inset-bottom)]` keeps the row clear of the iOS home indicator; the
 * matching allowance on `<main>` is what stops the last rail hiding behind this bar.
 */
export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 flex items-stretch justify-around gap-2 border-t border-border bg-background px-2 pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      {PRIMARY_NAV.map((item) => {
        const isActive = isRouteActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className="flex flex-1 flex-col items-center gap-1 pt-3 pb-4 text-xs tracking-[0.5px]"
          >
            <span
              className={`flex h-8 w-16 items-center justify-center rounded-full transition-colors ${
                isActive ? "bg-primary" : ""
              }`}
            >
              <Image
                src={isActive ? item.activeIcon : item.inactiveIcon}
                width={24}
                height={24}
                alt=""
                className="dark:invert"
              />
            </span>
            <span
              className={`font-medium ${isActive ? "text-foreground" : "text-muted-foreground"}`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
