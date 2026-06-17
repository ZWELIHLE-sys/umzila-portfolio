import type { LucideIcon } from "lucide-react";

export default function MediaPlaceholder({
  icon: Icon,
  title,
  subtitle = "Coming soon",
  aspect = "aspect-video",
}: {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`flex ${aspect} w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-sage/40 bg-mint/30 p-6 text-center`}
    >
      <Icon size={30} className="text-sage" />
      <div className="mt-3 text-sm font-semibold text-dark">{title}</div>
      <div className="mt-1 text-xs text-gray-500">{subtitle}</div>
    </div>
  );
}
