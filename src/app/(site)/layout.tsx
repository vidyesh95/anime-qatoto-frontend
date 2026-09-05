import MobileBottomNav from "@/components/layout/mobile-bottom-nav";
import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";
import { SidebarProvider } from "@/state/sidebar-context";

/**
 * The browsing shell: everything except /studio, which brings its own chrome.
 *
 * A ROUTE GROUP RATHER THAN A NESTED SEGMENT, because the anime catalogue is the home page.
 * `(site)` contributes no URL segment, so `(site)/page.tsx` is `/` while still sitting under
 * a layout that /studio does not inherit. The alternative -- putting this chrome in the root
 * layout -- would put the site navbar on top of the studio navbar.
 *
 * `SidebarProvider` is the only provider left. The repo this came from also wrapped a
 * TanStack Query client, a queue context and two auth-gated Suspense slots; with no backend
 * and no auth, the collapse toggle is the only shared state there is.
 */
export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <SidebarProvider>
      <Navbar />
      <div className="flex">
        <Sidebar />
        {/*
          The bottom padding clears the mobile bottom bar, which is `fixed` and would
          otherwise sit on top of the last rail. It is dropped at `md` where that bar is gone.
        */}
        <main className="min-w-0 flex-1 pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0">
          {children}
        </main>
      </div>
      <MobileBottomNav />
    </SidebarProvider>
  );
}
