import { motion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  Clapperboard,
  CircleDollarSign,
  Compass,
  ExternalLink,
  Flag,
  Globe2,
  Infinity as InfinityIcon,
  Lightbulb,
  MapPin,
  Play,
  Sparkles,
  Workflow,
} from "lucide-react";
import { FeatureBar } from "./FeatureBar";
import { FloatingCard } from "./FloatingCard";

const bullets = [
  { icon: Workflow, text: "AI workflows that save time & scale content" },
  { icon: CircleDollarSign, text: "Content strategies that build real income" },
  { icon: Compass, text: "Travel insights that fuel freedom" },
  { icon: Lightbulb, text: "Tools, frameworks & ideas you can use" },
];

const destinations = [
  { title: "Thailand", flag: "TH", icon: Flag },
  { title: "Hong Kong", flag: "HK", icon: Flag },
  { title: "Vietnam", flag: "VN", icon: MapPin },
];

const creatorTools = [
  { title: "Higgsfield", subtitle: "AI Video", icon: BrainCircuit },
  { title: "Claude", subtitle: "AI Assistant", icon: Bot },
  { title: "YouTube", subtitle: "Content & Growth", icon: Play },
];

export function NewsletterMockup() {
  return (
    <>
      <div className="relative mx-auto h-[640px] w-[min(96vw,390px)] overflow-hidden sm:hidden">
        <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_50%_18%,rgba(255,42,184,0.16),transparent_28%),linear-gradient(180deg,rgba(13,5,43,0.08),rgba(13,5,43,0.34))]" />

        <div className="absolute left-1 top-[118px] z-20 space-y-11">
          {destinations.map(({ title, flag }, index) => (
            <div
              key={title}
              className="flex h-[52px] w-[116px] rotate-2 items-center gap-2 rounded-xl border border-fuchsia-300/55 bg-slate-950/78 p-2 shadow-[0_0_22px_rgba(255,42,184,0.36)] backdrop-blur-xl"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-md bg-fuchsia-500/18 text-[10px] font-black text-fuchsia-100">
                {flag}
              </span>
              <span className="text-[11px] font-extrabold leading-tight text-white">{title}</span>
            </div>
          ))}
        </div>

        <div className="absolute right-1 top-[102px] z-20 space-y-8">
          <div className="ml-auto w-max rounded-lg border border-fuchsia-300/70 bg-slate-950/86 px-3 py-2 text-[9px] font-black uppercase tracking-[0.08em] text-white shadow-[0_0_24px_rgba(255,42,184,0.44)]">
            AI & Creator Tools
          </div>
          {creatorTools.map(({ title, subtitle, icon: Icon }, index) => (
            <div
              key={title}
              className="flex h-[58px] w-[124px] -rotate-2 items-center gap-2 rounded-xl border border-white/70 bg-white px-2.5 text-slate-950 shadow-[0_0_22px_rgba(255,42,184,0.34)]"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-slate-950 text-fuchsia-200">
                <Icon size={16} />
              </span>
              <span className="min-w-0">
                <span className="block text-[12px] font-black leading-tight">{title}</span>
                <span className="block text-[9px] font-bold leading-tight text-slate-600">{subtitle}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="absolute left-[78px] top-7 z-10 w-[238px] rotate-[5deg] rounded-[1.15rem] border border-white/35 bg-slate-950/90 p-2.5 shadow-[0_28px_74px_rgba(255,42,184,0.26)] backdrop-blur-2xl">
          <div className="absolute -right-4 top-5 -z-10 h-full w-full rounded-[1.15rem] border border-fuchsia-300/22 bg-white/8" />
          <div className="absolute -right-7 top-10 -z-20 h-full w-full rounded-[1.15rem] border border-fuchsia-300/14 bg-white/6" />

          <div className="mb-2 flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-white">
              <Sparkles className="text-fuchsia-300" size={13} />
              Creator&apos;s Edge
            </div>
            <div className="inline-flex h-7 items-center gap-1 rounded-lg border border-white/15 px-2 text-[9px] font-bold text-white/85">
              Newsletter
              <ExternalLink size={11} />
            </div>
          </div>

          <div className="space-y-2.5">
            <div>
              <h2 className="font-serif text-[2rem] font-black leading-[0.88] tracking-normal text-white">
                Trippin
                <span className="block text-[1.35rem] italic text-fuchsia-300">with George</span>
              </h2>
              <p className="mt-2 text-[10px] font-semibold text-white/80">AI, travel & building a life of freedom.</p>
            </div>

            <img
              src="/newsletter-travel-scene.png"
              alt="Tropical lagoon at sunset"
              className="aspect-[1.38/1] w-full rounded-lg object-cover shadow-[0_14px_42px_rgba(0,0,0,0.45)]"
            />

            <div className="space-y-1">
              <p className="text-[10px] font-extrabold text-white">Practical lessons for creators & entrepreneurs.</p>
              {bullets.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-1.5 text-[8.5px] font-semibold text-white/72">
                  <Icon className="mt-0.5 shrink-0 text-fuchsia-300" size={10} />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-fuchsia-300/20 bg-fuchsia-400/8 p-2">
              <p className="text-[8.5px] font-semibold text-white/78">New ideas. Real tools. Freedom you can build.</p>
              <p className="mt-1 text-right text-[10px] font-serif italic text-fuchsia-200">- George.</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 z-30 grid h-[74px] w-[344px] -translate-x-1/2 grid-cols-4 rounded-2xl border border-fuchsia-300/55 bg-slate-950/82 p-2 shadow-[0_0_32px_rgba(255,42,184,0.42)] backdrop-blur-xl">
          {[
            { label: "Work from anywhere", icon: Globe2 },
            { label: "Create content", icon: Clapperboard },
            { label: "Build income", icon: CircleDollarSign },
            { label: "Live free", icon: InfinityIcon },
          ].map(({ label, icon: Icon }) => (
            <div key={label} className="flex flex-col items-center justify-center gap-1 border-l border-white/10 px-1 text-center first:border-l-0">
              <Icon className="text-fuchsia-300" size={22} />
              <span className="text-[9.5px] font-extrabold leading-tight text-white">{label}</span>
            </div>
          ))}
        </div>
      </div>

    <div className="relative mx-auto hidden w-full max-w-[720px] flex-col items-center justify-center gap-5 overflow-visible pb-2 pt-2 sm:flex sm:min-h-[620px] sm:gap-6 sm:pt-3 lg:min-h-[690px]">
      <div className="absolute left-0 top-20 z-20 hidden w-40 space-y-12 xl:block">
        {destinations.map((item, index) => (
          <FloatingCard
            key={item.title}
            title={item.title}
            eyebrow={item.flag}
            icon={index === 2 ? MapPin : Flag}
            delay={0.2 + index * 0.12}
            className="rotate-2"
          />
        ))}
      </div>

      <div className="grid w-[min(88vw,340px)] grid-cols-2 gap-2 xl:hidden">
        {destinations.map(({ title, flag, icon: Icon }) => (
          <div
            key={title}
            className="flex min-h-14 items-center gap-2 rounded-xl border border-fuchsia-300/35 bg-slate-950/72 px-2.5 py-2 shadow-[0_0_24px_rgba(255,42,184,0.18)] backdrop-blur-xl last:col-span-2"
          >
            <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-fuchsia-500/18 text-[10px] font-black text-fuchsia-100">
              {flag}
            </span>
            <div className="min-w-0">
              <Icon className="mb-0.5 hidden text-fuchsia-300 min-[430px]:block" size={12} />
              <p className="text-[11px] font-extrabold leading-tight text-white">{title}</p>
            </div>
          </div>
        ))}
      </div>

      <svg className="pointer-events-none absolute inset-0 hidden h-full w-full xl:block" viewBox="0 0 760 760" fill="none">
        <path d="M512 228 C584 216 600 144 660 148" stroke="#ff2ab8" strokeWidth="2" strokeDasharray="8 10" opacity="0.75" />
        <path d="M514 346 C588 326 608 312 662 322" stroke="#ff2ab8" strokeWidth="2" strokeDasharray="8 10" opacity="0.75" />
        <path d="M500 456 C584 468 604 500 664 506" stroke="#ff2ab8" strokeWidth="2" strokeDasharray="8 10" opacity="0.75" />
      </svg>

      <motion.div
        animate={{ y: 0, rotate: 0 }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-[min(78vw,300px)] origin-center rounded-[1.15rem] border border-white/30 bg-slate-950/88 p-2.5 shadow-[0_26px_74px_rgba(255,42,184,0.22)] backdrop-blur-2xl sm:w-[400px] sm:rotate-[-3deg] sm:rounded-[1.65rem] sm:p-4 lg:w-[430px]"
      >
        <div className="absolute -right-8 top-10 -z-10 hidden h-full w-full rounded-[1.65rem] border border-fuchsia-300/20 bg-white/8 sm:block" />
        <div className="absolute -right-16 top-20 -z-20 hidden h-full w-full rounded-[1.65rem] border border-fuchsia-300/14 bg-white/6 sm:block" />

        <div className="mb-2.5 flex items-center justify-between border-b border-white/10 pb-2.5 sm:mb-5 sm:pb-4">
          <div className="flex items-center gap-1.5 text-[11px] font-extrabold sm:gap-2 sm:text-sm">
            <Sparkles className="text-fuchsia-300" size={14} />
            Creator&apos;s Edge
          </div>
          <button className="inline-flex min-h-8 items-center gap-1.5 rounded-lg border border-white/15 px-2.5 py-1.5 text-[10px] font-bold text-white/85 sm:min-h-9 sm:gap-2 sm:px-3 sm:py-2 sm:text-xs">
            Newsletter
            <ExternalLink size={12} />
          </button>
        </div>

        <div className="space-y-2.5 sm:space-y-5">
          <div>
            <h2 className="font-serif text-[1.95rem] font-black leading-[0.9] tracking-normal text-white sm:text-[3.55rem]">
              Trippin
              <span className="block text-[1.32rem] italic text-fuchsia-300 sm:text-4xl">with George</span>
            </h2>
            <p className="mt-2 text-[10.5px] font-semibold text-white/80 sm:mt-4 sm:text-sm">AI, travel & building a life of freedom.</p>
          </div>

          <img
            src="/newsletter-travel-scene.png"
            alt="Tropical lagoon at sunset"
            className="aspect-[1.55/1] w-full rounded-lg object-cover shadow-[0_16px_46px_rgba(0,0,0,0.45)] sm:aspect-[1.45/1] sm:rounded-xl sm:shadow-[0_22px_70px_rgba(0,0,0,0.45)]"
          />

          <div className="space-y-1 sm:space-y-2">
            <p className="text-[11px] font-extrabold text-white sm:text-sm">Practical lessons for creators & entrepreneurs.</p>
            {bullets.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-1.5 text-[10px] font-semibold text-white/72 sm:gap-2 sm:text-xs">
                <Icon className="mt-0.5 shrink-0 text-fuchsia-300" size={12} />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-fuchsia-300/20 bg-fuchsia-400/8 p-2.5 sm:rounded-xl sm:p-4">
            <p className="text-[10px] font-semibold text-white/78 sm:text-xs">New ideas. Real tools. Freedom you can build.</p>
            <p className="mt-1.5 text-right text-[11px] font-serif italic text-fuchsia-200 sm:mt-2 sm:text-sm">- George.</p>
          </div>
        </div>
      </motion.div>

      <div className="absolute right-0 top-24 z-20 hidden w-52 space-y-7 xl:block">
        <div className="w-max rounded-xl border border-fuchsia-300/60 bg-slate-950/80 px-4 py-3 text-xs font-extrabold uppercase tracking-[0.08em] shadow-neon backdrop-blur-xl">
          AI & Creator Tools
        </div>
        {creatorTools.map(({ title, subtitle, icon }, index) => (
          <FloatingCard
            key={title}
            title={title}
            subtitle={subtitle}
            icon={icon}
            delay={0.3 + index * 0.12}
            tone="light"
            className={index === 1 ? "rotate-2" : "-rotate-2"}
          />
        ))}
      </div>

      <div className="w-[min(88vw,340px)] space-y-2 xl:hidden">
        <div className="mx-auto w-max rounded-full border border-fuchsia-300/45 bg-slate-950/72 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.08em] text-white shadow-[0_0_22px_rgba(255,42,184,0.2)] backdrop-blur-xl">
          AI & Creator Tools
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {creatorTools.map(({ title, subtitle, icon: Icon }) => (
            <div
              key={title}
              className="flex min-h-14 items-center gap-2.5 rounded-xl border border-white/45 bg-white/[0.92] px-3 py-2 text-slate-950 shadow-[0_0_24px_rgba(255,42,184,0.16)]"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-slate-950 text-fuchsia-200">
                <Icon size={17} />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-black leading-tight">{title}</p>
                <p className="text-[10px] font-bold text-slate-600">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-30 w-[min(82vw,316px)] sm:w-[min(94vw,680px)]">
        <FeatureBar />
      </div>
    </div>
    </>
  );
}
