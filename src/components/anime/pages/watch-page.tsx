// TRANSPORT: mock — the rail reads `@/mocks/anime-mocks`; the player is a static frame.
//
// A DELIBERATELY SMALL WATCH SURFACE. The repo this UI came from has a full watch page:
// real playback, chapters, a queue, a share sheet, comments, engagement mutations. All of
// that is backend-wired, and none of it can work here -- so rather than port a player that
// cannot play, this renders the frame, the metadata and the related rail, which is what the
// catalogue needs in order for every card link to land somewhere real.

import Image from "next/image";

import MediaRail from "@/components/anime/rails/media-rail";
import { MOCK_RECOMMENDED_ANIME, MOCK_TRENDING_ANIME } from "@/mocks/anime-mocks";

export default function WatchPage({ videoId }: { videoId: string | undefined }) {
  return (
    <div className="pb-10">
      <div className="px-4 pt-2 lg:px-6">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
          <Image
            src="/dummy/anime_hero.avif"
            alt=""
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 grid place-items-center">
            {/*
              INLINE, because the icon set has no `play_arrow`. A triangle nudged right of
              centre (optical centring -- a centred triangle reads as sitting left) is not
              worth a dependency, and `currentColor` keeps it white on the dark frame.
            */}
            <span className="grid size-16 place-items-center rounded-full bg-black/55 text-white ring-1 ring-white/25">
              <svg
                viewBox="0 0 24 24"
                width={32}
                height={32}
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9 6.5v11l9-5.5-9-5.5Z" />
              </svg>
            </span>
          </div>
          <p className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent p-3 text-xs text-white">
            Playback is not wired up in this preview.
          </p>
        </div>

        <h1 className="mt-3 text-lg font-medium text-foreground sm:text-xl">
          Ember and Ash — Episode 1: The Unfinished Edge
        </h1>

        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-brand-muted">
          <span>730.1k views</span>
          <span aria-hidden="true">·</span>
          <span>Subbed · Japanese</span>
          <span aria-hidden="true">·</span>
          <span>PG-13</span>
          {videoId !== undefined && (
            <>
              <span aria-hidden="true">·</span>
              <span className="font-mono">v={videoId}</span>
            </>
          )}
        </div>

        <div className="mt-3 flex items-center gap-2 border-b border-border pb-4">
          <Image
            src="/dummy/profile_image_02.avif"
            alt=""
            width={40}
            height={40}
            className="size-10 shrink-0 rounded-full object-cover"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-foreground">Qatoto Originals</p>
            <p className="text-xs text-brand-muted">1.2m subscribers</p>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-4">
        <MediaRail
          title="Up next"
          href="/?view=recommended"
          items={MOCK_RECOMMENDED_ANIME}
          variant="landscape"
        />
        <MediaRail
          title="Trending 📈"
          href="/?view=trending"
          items={MOCK_TRENDING_ANIME}
          variant="poster-lg"
        />
      </div>
    </div>
  );
}
