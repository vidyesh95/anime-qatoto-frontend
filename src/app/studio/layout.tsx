import type { Metadata } from "next";

import StudioNavbar from "@/components/studio/studio-navbar";
import StudioSidebar from "@/components/studio/studio-sidebar";
import { SidebarProvider } from "@/state/sidebar-context";

/**
 * Standalone chrome, deliberately outside the `(site)` group so it does not inherit the
 * browsing navbar and sidebar.
 *
 * `robots: noindex` for the whole group in one place rather than on each page: Next merges
 * metadata down the segment chain per field, so every page under here inherits it unless it
 * sets its own. A creator's workspace has nothing a crawler should list.
 */
export const metadata: Metadata = {
  title: {
    default: "Studio",
    template: "%s · Studio · Anime Qatoto",
  },
  robots: { index: false, follow: false },
};

export default function StudioLayout({ children }: LayoutProps<"/studio">) {
  return (
    <SidebarProvider>
      <StudioNavbar />
      <div className="flex">
        <StudioSidebar />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </SidebarProvider>
  );
}
