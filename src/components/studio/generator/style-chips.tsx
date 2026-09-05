import Image from "next/image";

import type { StyleChip } from "@/types/studio";

/** The `genre-chips` idiom, one selection, inert. */
export default function StyleChips({
  chips,
  selectedId,
}: {
  chips: StyleChip[];
  selectedId: string;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-foreground">Style</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {chips.map((chip) => {
          const isActive = chip.id === selectedId;
          return (
            <button
              key={chip.id}
              type="button"
              disabled
              aria-pressed={isActive}
              className={`inline-flex h-8 items-center gap-2 rounded-lg border text-sm leading-5 font-medium tracking-[0.1px] ${
                isActive
                  ? "border-transparent bg-primary pr-4 pl-2 text-primary-foreground"
                  : "border-border px-4 text-foreground"
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
              {chip.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
