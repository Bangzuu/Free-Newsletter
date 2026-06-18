import { type FormEvent, useState } from "react";
import { ArrowRight, Loader2, Mail, ShieldCheck, UsersRound, Zap } from "lucide-react";

export function HeroSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);

    try {
      await fetch(form.action, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      window.location.assign("/?thank-you=1");
    } catch {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#08041c] px-4 py-8 text-white sm:px-8 lg:px-10 lg:py-8">
      <img
        src="/hero-tropical-sunset.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(5,3,26,0.72),rgba(14,4,39,0.34)_46%,rgba(6,2,24,0.6)),linear-gradient(180deg,rgba(4,2,22,0.14),rgba(6,2,24,0.76))]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_34%,rgba(255,42,184,0.2),transparent_34%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-[1210px] items-center gap-7 lg:grid-cols-[minmax(0,1.08fr)_minmax(430px,0.92fr)] lg:gap-8 xl:gap-10">
        <div className="order-2 relative mx-auto flex w-full max-w-[620px] items-center justify-center lg:order-1 lg:ml-auto lg:mr-0 lg:max-w-[670px]">
          <img
            src="/hero-left-visual.png"
            alt="Creator's Edge travel newsletter preview"
            className="hero-left-visual"
          />
        </div>

        <div className="order-1 mx-auto w-full max-w-[520px] rounded-[1.35rem] border border-white/14 bg-[#12042f]/28 p-5 text-center shadow-[0_20px_72px_rgba(6,2,24,0.3)] backdrop-blur-sm sm:p-7 lg:order-2 lg:mx-0 lg:p-7 lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/90 bg-[#12042f]/70 px-4 py-2 text-xs font-black text-fuchsia-300 shadow-[0_0_16px_rgba(255,42,184,0.36)] backdrop-blur-md sm:text-sm">
            <Zap size={15} />
            Free Newsletter
          </div>

          <h1 className="mx-auto max-w-[430px] font-serif text-[clamp(2.15rem,9vw,3.2rem)] font-black leading-[1.02] tracking-normal text-white drop-shadow-[0_4px_12px_rgba(4,0,24,0.78)] sm:max-w-[520px] sm:text-[clamp(3rem,5.2vw,4.1rem)] lg:mx-0 lg:max-w-[500px] lg:text-[clamp(2.75rem,3.05vw,3.65rem)]">
            Build a life you don&apos;t need to{" "}
            <span className="relative inline-block">
              escape from.
              <span className="absolute -bottom-0.5 left-0 h-1 w-full rounded-full bg-fuchsia-400 shadow-[0_0_12px_rgba(255,42,184,0.85)]" />
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-[470px] text-sm font-semibold leading-6 text-white/90 drop-shadow-[0_2px_10px_rgba(4,0,24,0.7)] sm:text-base sm:leading-7 lg:mx-0">
            A semi-regular newsletter sharing practical lessons on online business, content creation, AI, travel and what
            I&apos;m learning along the way.
          </p>

          <form
            method="post"
            action="https://systeme.io/embedded/41883843/subscription"
            onSubmit={handleSubmit}
            className="mx-auto mt-5 flex w-full max-w-[470px] flex-col gap-3 sm:flex-row lg:mx-0"
            aria-label="Join the newsletter"
          >
            <label className="sr-only" htmlFor="hero-email">
              Email address
            </label>
            <div className="relative min-h-12 flex-1 rounded-md border border-fuchsia-100/45 bg-white/[0.16] shadow-[0_0_20px_rgba(255,42,184,0.22)] backdrop-blur-md transition focus-within:border-fuchsia-100/80 focus-within:bg-white/[0.22] focus-within:shadow-[0_0_30px_rgba(255,42,184,0.38)] sm:min-h-11">
              <Mail className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white/90 drop-shadow-[0_0_7px_rgba(255,42,184,0.5)]" size={17} />
              <input
                id="hero-email"
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="h-12 w-full rounded-md bg-transparent pl-11 pr-4 text-base font-semibold text-white outline-none placeholder:text-white/90 sm:h-11 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-fuchsia-500 px-5 text-base font-bold text-white shadow-[0_0_24px_rgba(255,42,184,0.4)] transition hover:bg-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-100 sm:min-h-11 sm:text-sm"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={16} />
                  <span>Joining...</span>
                </>
              ) : (
                <>
                  <span>Join the Newsletter</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <div className="mx-auto mt-5 max-w-[470px] space-y-4 text-left lg:mx-0">
            <div className="flex gap-3">
              <UsersRound className="mt-0.5 shrink-0 text-fuchsia-300" size={22} />
              <p className="text-sm font-semibold leading-6 text-white/90">
                For aspiring creators, online entrepreneurs and anyone building a life with more freedom.
              </p>
            </div>
            <div className="flex gap-3">
              <ShieldCheck className="mt-0.5 shrink-0 text-fuchsia-300" size={22} />
              <p className="text-sm font-semibold leading-6 text-white/90">
                No daily spam. No fake guru bullshit. Just useful ideas when I have something worth sharing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
