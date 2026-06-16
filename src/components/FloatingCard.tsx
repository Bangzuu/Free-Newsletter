import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type FloatingCardProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  className?: string;
  delay?: number;
  tone?: "dark" | "light";
};

export function FloatingCard({
  eyebrow,
  title,
  subtitle,
  icon: Icon,
  className = "",
  delay = 0,
  tone = "dark",
}: FloatingCardProps) {
  const isLight = tone === "light";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`rounded-2xl border p-3 shadow-neon backdrop-blur-xl ${className} ${
        isLight
          ? "border-white/60 bg-white text-slate-950"
          : "border-fuchsia-300/40 bg-slate-950/70 text-white"
      }`}
    >
      <div className="flex items-center gap-3">
        {Icon ? (
          <span
            className={`grid size-10 shrink-0 place-items-center rounded-xl ${
              isLight ? "bg-slate-950 text-fuchsia-300" : "bg-fuchsia-500/15 text-fuchsia-300"
            }`}
          >
            <Icon size={21} strokeWidth={2.2} />
          </span>
        ) : null}
        <div className="min-w-0">
          {eyebrow ? <p className="text-[11px] font-bold uppercase tracking-[0.12em] opacity-70">{eyebrow}</p> : null}
          <p className="truncate text-sm font-extrabold sm:text-base">{title}</p>
          {subtitle ? <p className="truncate text-xs font-semibold opacity-70">{subtitle}</p> : null}
        </div>
      </div>
    </motion.div>
  );
}
