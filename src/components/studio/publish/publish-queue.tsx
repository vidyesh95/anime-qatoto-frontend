import PublishRow from "@/components/studio/publish/publish-row";
import type { PublishItem } from "@/types/studio";

export default function PublishQueue({ items }: { items: PublishItem[] }) {
  return (
    <ul className="divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((item) => (
        <PublishRow key={item.id} item={item} />
      ))}
    </ul>
  );
}
