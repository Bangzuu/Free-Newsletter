import type { LucideIcon } from "lucide-react";

type InfoCardProps = {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
  compact?: boolean;
};

export function InfoCard({ title, icon: Icon, children, className = "", compact = false }: InfoCardProps) {
  return (
    <article
      className={`rounded-2xl border border-slate-200/80 bg-white/82 shadow-[0_14px_42px_rgba(20,15,45,0.08)] backdrop-blur ${
        compact ? "p-5 lg:p-4" : "p-6"
      } ${className}`}
    >
      <div className={`${compact ? "mb-2 gap-2" : "mb-4 gap-3"} flex items-center`}>
        <span
          className={`grid place-items-center rounded-xl bg-fuchsia-50 text-fuchsia-500 ${
            compact ? "size-8 lg:size-7" : "size-10"
          }`}
        >
          <Icon size={compact ? 17 : 21} />
        </span>
        <h3 className={`${compact ? "text-sm lg:text-xs" : "text-lg"} font-black text-slate-950`}>{title}</h3>
      </div>
      <div className={`${compact ? "text-sm leading-6 lg:text-[11px] lg:leading-5" : "text-sm leading-7"} font-semibold text-slate-650`}>
        {children}
      </div>
    </article>
  );
}
