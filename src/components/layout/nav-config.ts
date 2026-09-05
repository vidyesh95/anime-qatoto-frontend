// The three primary surfaces, in one place.
//
// The sidebar, the mobile bottom bar and the studio nav all used to carry their own copies of
// this list in the repo this came from, which is how `/store` ended up in one and not another.
// One array, three consumers.
//
// Each entry names BOTH icon weights: Material Symbols ships FILL0 and FILL1 as separate
// files, and the active state is the filled one -- there is no CSS that turns one into the
// other, so a missing FILL1 would silently render the outline in the active pill.

export type NavItem = {
  href: string;
  label: string;
  activeIcon: string;
  inactiveIcon: string;
};

function iconPair(baseName: string): Pick<NavItem, "activeIcon" | "inactiveIcon"> {
  return {
    activeIcon: `/icons/${baseName}_24dp_000000_FILL1_wght400_GRAD0_opsz24.svg`,
    inactiveIcon: `/icons/${baseName}_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg`,
  };
}

export const PRIMARY_NAV: NavItem[] = [
  { href: "/", label: "Home", ...iconPair("home") },
  { href: "/studio", label: "Studio", ...iconPair("video_call") },
  { href: "/library", label: "Library", ...iconPair("video_library") },
];

export const STUDIO_NAV: NavItem[] = [
  { href: "/studio", label: "Generate", ...iconPair("video_call") },
  { href: "/studio/editor", label: "Editor", ...iconPair("slideshow") },
  { href: "/studio/publish", label: "Publish", ...iconPair("stream") },
];

/**
 * `/` matches only itself; everything else stays active for its own sub-paths, so
 * `/studio/editor` keeps `/studio` lit in the primary nav.
 *
 * Without the exact-match special case `/` would prefix-match every route in the app.
 */
export function isRouteActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}
