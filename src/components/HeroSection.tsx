import { ArrowRight, Mail, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <>
      <section className="relative isolate hidden min-h-screen overflow-hidden bg-[#08041c] lg:block">
        <div className="relative aspect-[1672/941] w-full">
          <img
            src="/reference-hero.png"
            alt="Trippin with George newsletter landing page"
            className="absolute inset-0 h-full w-full object-fill"
          />
          <form
            className="group absolute left-[52.95%] top-[60.2%] flex h-[6.1%] w-[33.45%] overflow-hidden rounded-[0.55vw] border border-fuchsia-200/35 bg-white/[0.16] shadow-[0_0_28px_rgba(255,42,184,0.26),0_18px_54px_rgba(31,8,68,0.32)] backdrop-blur-md transition duration-300 hover:border-fuchsia-200/60 hover:bg-white/[0.2] hover:shadow-[0_0_42px_rgba(255,42,184,0.38),0_20px_60px_rgba(31,8,68,0.38)] focus-within:border-fuchsia-100/80 focus-within:bg-white/[0.22] focus-within:shadow-[0_0_54px_rgba(255,42,184,0.48),0_24px_70px_rgba(92,35,180,0.38)]"
            aria-label="Join the newsletter"
          >
            <label className="sr-only" htmlFor="desktop-reference-email">
              Email address
            </label>
            <Mail className="pointer-events-none absolute left-[3.4%] top-1/2 z-10 -translate-y-1/2 text-white drop-shadow-[0_0_8px_rgba(255,42,184,0.55)] transition group-focus-within:text-fuchsia-100" size={18} />
            <input
              id="desktop-reference-email"
              type="email"
              required
              placeholder="Email address"
              className="h-full min-w-0 flex-1 bg-transparent pl-[9.5%] pr-3 text-[clamp(0.75rem,1vw,1.05rem)] font-semibold text-white outline-none placeholder:text-white/90 focus:bg-white/5"
            />
            <button
              type="submit"
              className="flex h-full w-[39%] items-center justify-center gap-2 bg-fuchsia-500 text-[clamp(0.7rem,0.92vw,1rem)] font-bold text-white shadow-[0_0_28px_rgba(255,42,184,0.42)] transition hover:bg-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-100"
            >
              <span>Join the Newsletter</span>
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#08041c] lg:hidden">
        <div className="relative mx-auto aspect-[474/491] w-full max-w-[640px] overflow-hidden bg-[#08041c]">
          <img
            src="/mobile-reference-hero.png"
            alt="Trippin with George mobile newsletter landing page"
            className="absolute inset-0 h-full w-full object-fill"
          />
          <div className="absolute left-1/2 top-[3.4%] z-20 flex -translate-x-1/2 items-center gap-1 rounded-full border border-fuchsia-400/90 bg-[#12042f]/85 px-[2.6%] py-[0.85%] text-[clamp(0.35rem,1.55vw,0.55rem)] font-black text-fuchsia-300 shadow-[0_0_12px_rgba(255,42,184,0.45)]">
            <Zap className="h-[1em] w-[1em]" />
            Free Newsletter
          </div>
          <div
            className="mobile-hero-title-replacement absolute left-[13.5%] top-[6.9%] z-10 grid h-[18%] w-[73%] place-items-center text-center"
            aria-hidden="true"
          >
            <h1 className="font-serif text-[clamp(1.15rem,4.7vw,1.45rem)] font-black leading-[1.02] tracking-normal text-white drop-shadow-[0_2px_7px_rgba(4,0,24,0.72)]">
              Build a life you don&apos;t need to{" "}
              <span className="relative inline-block">
                escape from.
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(255,42,184,0.8)]" />
              </span>
            </h1>
          </div>
          <form
            className="absolute left-[26.2%] top-[33.8%] h-[10.8%] w-[47.5%]"
            aria-label="Join the newsletter"
          >
            <label className="sr-only" htmlFor="mobile-reference-email">
              Email address
            </label>
            <Mail className="pointer-events-none absolute left-[5.5%] top-[20.5%] z-10 h-[15%] w-auto text-white/0" />
            <input
              id="mobile-reference-email"
              type="email"
              required
              placeholder="Email address"
              className="absolute inset-x-0 top-0 h-[45%] w-full rounded-[1vw] border border-transparent bg-transparent pl-[13%] pr-[4%] text-[clamp(0.6rem,2.8vw,1rem)] font-semibold text-white outline-none placeholder:text-transparent transition focus:border-fuchsia-200/70 focus:bg-white/[0.08] focus:shadow-[0_0_18px_rgba(255,42,184,0.38)]"
            />
            <button
              type="submit"
              className="absolute inset-x-0 bottom-0 flex h-[43%] items-center justify-center rounded-[1vw] border border-transparent bg-transparent text-transparent transition focus:outline-none focus:ring-2 focus:ring-fuchsia-100/80"
            >
              <span>Join the Newsletter</span>
              <ArrowRight className="ml-2" size={14} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
