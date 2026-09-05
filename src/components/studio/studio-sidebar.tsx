"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { STUDIO_NAV, isRouteActive } from "@/components/layout/nav-config";
import { useSidebar } from "@/state/sidebar-context";

/**
 * Three destinations, from `STUDIO_NAV`. Same active-pill idiom as the site sidebar so the
 * two rails do not look like they came from different apps.
 *
 * `isRouteActive` prefix-matches, which is what keeps /studio/editor from also lighting
 * "Generate" -- /studio would otherwise match every studio sub-path.
 */
export default function StudioSidebar() {
  const { isCollapsed } = useSidebar();
  const pathname = usePathname();

  return (
    <aside
      className={`hidden shrink-0 border-r border-border bg-sidebar md:block ${
        isCollapsed ? "w-20" : "w-56"
      }`}
      aria-label="Studio"
    >
      <nav className="sticky top-13 flex flex-col gap-1 p-2">
        {STUDIO_NAV.map((item) => {
          const isActive =
            item.href === "/studio" ? pathname === "/studio" : isRouteActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={
                isCollapsed
                  ? "flex flex-col items-center gap-1 rounded-xl px-1 py-3 text-[10px] tracking-[0.5px] transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                  : "flex flex-row items-center gap-4 rounded-full px-4 py-2.5 text-sm transition-colors hover:bg-black/5 dark:hover:bg-white/10"
              }
            >
              <span
                className={`grid place-items-center transition-colors ${
                  isCollapsed ? "h-8 w-16 rounded-full" : "size-6"
                } ${isActive && isCollapsed ? "bg-primary" : ""}`}
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
    </aside>
  );
}
