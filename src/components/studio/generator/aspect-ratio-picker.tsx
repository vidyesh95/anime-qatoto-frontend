import Image from "next/image";

import type { AspectRatio } from "@/types/studio";

/** The `genre-sort-tabs` segmented control: rounded ends, `-ml-px` to collapse borders. */
export default function AspectRatioPicker({
  ratios,
  selectedId,
}: {
  ratios: AspectRatio[];
  selectedId: string;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-foreground">Aspect ratio</legend>
      <div className="mt-2 flex w-full sm:w-80">
        {ratios.map((ratio, i) => {
          const isActive = ratio.id === selectedId;
          const isFirst = i === 0;
          const isLast = i === ratios.length - 1;
          return (
            <button
              key={ratio.id}
              type="button"
              disabled
              aria-pressed={isActive}
              className={`inline-flex h-10 flex-1 items-center justify-center gap-2 border border-border px-3 py-2.5 text-sm leading-5 font-medium tracking-[0.1px] ${
                isFirst ? "rounded-l-full" : "-ml-px"
              } ${isLast ? "rounded-r-full" : ""} ${
                isActive ? "z-10 bg-primary text-primary-foreground" : "text-foreground"
              }`}
            >
              {isActive && (
                <Image
                  src="/icons/check_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                  width={18}
                  height={18}
                  alt=""
                />
              )}
              {ratio.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
