import { ArrowLeft, MailCheck, ShieldCheck, Sparkles } from "lucide-react";

export function ThankYouPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#08041c] px-4 py-8 text-white sm:px-8 lg:px-10">
      <img
        src="/hero-tropical-sunset.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(5,3,26,0.76),rgba(14,4,39,0.36)_48%,rgba(6,2,24,0.68)),linear-gradient(180deg,rgba(4,2,22,0.18),rgba(6,2,24,0.82))]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_40%,rgba(255,42,184,0.22),transparent_36%)]" />

      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-[980px] items-center justify-center">
        <div className="w-full max-w-[680px] rounded-[1.35rem] border border-white/16 bg-[#12042f]/36 p-6 text-center shadow-[0_24px_86px_rgba(6,2,24,0.42)] backdrop-blur-md sm:p-9 lg:p-10">
          <div className="mx-auto mb-5 grid size-16 place-items-center rounded-full border border-fuchsia-300/80 bg-fuchsia-500/16 text-fuchsia-200 shadow-[0_0_34px_rgba(255,42,184,0.42)]">
            <MailCheck size={30} />
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/90 bg-[#12042f]/70 px-4 py-2 text-xs font-black text-fuchsia-300 shadow-[0_0_16px_rgba(255,42,184,0.34)] backdrop-blur-md sm:text-sm">
            <Sparkles size={15} />
            You&apos;re In
          </div>

          <h1 className="mx-auto max-w-[580px] font-serif text-[clamp(2.35rem,11vw,4.75rem)] font-black leading-[0.98] tracking-normal text-white drop-shadow-[0_4px_12px_rgba(4,0,24,0.78)]">
            Welcome to the Newsletter.
          </h1>

          <p className="mx-auto mt-5 max-w-[540px] text-base font-semibold leading-7 text-white/90 drop-shadow-[0_2px_10px_rgba(4,0,24,0.7)] sm:text-lg">
            Thanks for joining. Your email was sent to the list, and future notes will land in your inbox when there&apos;s
            something useful to share.
          </p>

          <div className="mx-auto mt-7 flex max-w-[520px] gap-3 rounded-xl border border-white/14 bg-white/[0.12] p-4 text-left shadow-[0_0_24px_rgba(255,42,184,0.16)] backdrop-blur-md">
            <ShieldCheck className="mt-0.5 shrink-0 text-fuchsia-300" size={24} />
            <p className="text-sm font-semibold leading-6 text-white/88">
              No daily spam. No fake guru bullshit. Just practical ideas about travel, content, AI and building a life
              with more freedom.
            </p>
          </div>

          <a
            href="/"
            className="mx-auto mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-fuchsia-500 px-6 text-base font-bold text-white shadow-[0_0_24px_rgba(255,42,184,0.38)] transition hover:bg-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-100"
          >
            <ArrowLeft size={16} />
            Back to Home
          </a>
        </div>
      </section>
    </main>
  );
}
