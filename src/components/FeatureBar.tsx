import { BadgeDollarSign, Clapperboard, Globe2, Infinity } from "lucide-react";

const features = [
  { label: "Work from anywhere", icon: Globe2 },
  { label: "Create content", icon: Clapperboard },
  { label: "Build income", icon: BadgeDollarSign },
  { label: "Live free", icon: Infinity },
];

export function FeatureBar() {
  return (
    <div className="mx-auto grid w-full max-w-3xl grid-cols-2 rounded-2xl border border-fuchsia-300/40 bg-slate-950/70 p-2 shadow-neon backdrop-blur-xl sm:grid-cols-4">
      {features.map(({ label, icon: Icon }) => (
        <div key={label} className="flex min-h-14 items-center gap-2 border-white/10 px-2 sm:min-h-16 sm:gap-3 sm:border-l sm:px-3 sm:first:border-l-0">
          <Icon className="shrink-0 text-fuchsia-300" size={24} />
          <span className="text-xs font-extrabold leading-tight text-white sm:text-sm">{label}</span>
        </div>
      ))}
    </div>
  );
}
