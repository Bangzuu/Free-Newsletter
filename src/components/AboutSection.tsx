import { motion } from "framer-motion";
import { Heart, Send, UserRound } from "lucide-react";
import { InfoCard } from "./InfoCard";

const list = [
  "Turning your creativity into something of your own",
  "Building an online business around work you care about",
  "Making content that feels original and worth sharing",
  "Using AI to create, work and think differently",
  "Growing an audience and earning online",
  "Travelling more and building a life with greater freedom",
];

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#faf9fb] px-4 py-10 text-slate-950 sm:px-8 sm:py-16 lg:px-10 lg:py-9">
      <div className="absolute -left-32 top-14 h-64 w-64 rounded-full bg-fuchsia-200/35 blur-3xl sm:h-72 sm:w-72 sm:bg-fuchsia-200/45" />
      <div className="absolute right-0 top-0 hidden h-full w-1/3 bg-[linear-gradient(135deg,transparent_40%,rgba(226,232,240,0.6)_40%,rgba(226,232,240,0.2)_68%,transparent_68%)] sm:block" />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="mb-5 lg:hidden">
          <div className="mb-3 flex items-center gap-2 text-xs font-black text-slate-950">
            <span className="size-2.5 rounded-sm bg-fuchsia-500" />
            About Me
          </div>
          <h2 className="max-w-[430px] font-serif text-[clamp(1.15rem,4.7vw,1.45rem)] font-black leading-[1.08] tracking-normal text-slate-950 sm:text-[clamp(2.15rem,5vw,3rem)]">
            I spent four years travelling the world. Now I&apos;m building the kind of business that lets me{" "}
            <span className="relative inline-block">
              keep doing it.
              <span className="absolute -bottom-0.5 left-0 h-1 w-full rounded-full bg-fuchsia-400/80" />
            </span>
          </h2>
        </div>

      <div className="grid gap-6 sm:gap-10 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-start lg:gap-12 xl:grid-cols-[360px_minmax(0,1fr)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-3 hidden items-center gap-2 text-xs font-black text-slate-950 lg:flex">
            <span className="size-2.5 rounded-sm bg-fuchsia-500" />
            About Me
          </div>
          <img
            src="/about-george.png"
            alt="George on a tropical beach"
            className="mx-auto aspect-[1.12/1] w-full max-w-[310px] rounded-2xl object-cover object-[31%_center] shadow-[0_18px_44px_rgba(219,39,119,0.18)] ring-1 ring-white sm:max-w-[520px] sm:shadow-[0_24px_62px_rgba(219,39,119,0.22)] lg:mx-0 lg:h-[520px] lg:max-w-[340px] lg:aspect-auto xl:h-[560px] xl:max-w-[360px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="hidden max-w-[650px] font-serif text-[clamp(1.85rem,2.45vw,2.55rem)] font-black leading-[0.94] tracking-normal text-slate-950 lg:block">
            I spent four years travelling the world. Now I&apos;m building the kind of business that lets me{" "}
            <span className="relative inline-block">
              keep doing it.
              <span className="absolute -bottom-0.5 left-0 h-1 w-full rounded-full bg-fuchsia-400/80" />
            </span>
          </h2>

          <div className="mt-0 grid gap-3 md:grid-cols-2 lg:mt-4 lg:gap-3">
            <InfoCard title="About Me" icon={UserRound} compact className="md:col-span-2">
              <div className="grid gap-5 md:grid-cols-2">
                <p>
                  I&apos;m George - also known as Trippin with George. Over the past four years, I&apos;ve travelled the world,
                  created content, experimented with different ways of earning online and learned a lot about what it really
                  takes to build a more independent life.
                </p>
                <p>
                  Today, I&apos;m building a media business and an online community for people who want to turn their ideas,
                  skills and creativity into something that gives them more freedom.
                </p>
              </div>
            </InfoCard>

            <InfoCard title="What You'll Get" icon={Send} compact>
              <p className="mb-2 font-black text-slate-800">Honest, useful ideas on:</p>
              <ul className="space-y-1">
                {list.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-fuchsia-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard title="Why I'm Writing It" icon={Heart} compact>
              <p className="mb-2 font-black text-slate-800">I&apos;m building this life as I go.</p>
              <p>
                This is where I share the lessons, experiments, mistakes and breakthroughs that might help you build yours.
              </p>
              <p className="mt-3">
                No recycled advice. No emails for the sake of it. Just something worth reading - and every now and then,
                an idea that might change what you do next.
              </p>
            </InfoCard>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
