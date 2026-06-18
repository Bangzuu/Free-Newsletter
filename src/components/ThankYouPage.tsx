import { ExternalLink, MailCheck, Sparkles } from "lucide-react";

const inboxLinks = [
  {
    label: "Open Gmail",
    href: "https://mail.google.com/mail/u/0/#inbox",
  },
  {
    label: "Open Outlook",
    href: "https://outlook.live.com/mail/0/inbox",
  },
];

export function ThankYouPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#08041c] px-4 py-8 text-white sm:px-8 lg:px-10">
      <img
        src="/hero-tropical-sunset.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(5,3,26,0.78),rgba(14,4,39,0.38)_48%,rgba(6,2,24,0.7)),linear-gradient(180deg,rgba(4,2,22,0.16),rgba(6,2,24,0.84))]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_36%,rgba(255,42,184,0.24),transparent_36%)]" />

      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-[980px] items-center justify-center">
        <div className="w-full max-w-[720px] rounded-[1.35rem] border border-white/16 bg-[#12042f]/38 p-6 text-center shadow-[0_24px_86px_rgba(6,2,24,0.42)] backdrop-blur-md sm:p-9 lg:p-11">
          <div className="mx-auto mb-5 grid size-16 place-items-center rounded-full border border-fuchsia-300/80 bg-fuchsia-500/16 text-fuchsia-200 shadow-[0_0_34px_rgba(255,42,184,0.42)]">
            <MailCheck size={30} />
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/90 bg-[#12042f]/70 px-4 py-2 text-xs font-black text-fuchsia-300 shadow-[0_0_16px_rgba(255,42,184,0.34)] backdrop-blur-md sm:text-sm">
            <Sparkles size={15} />
            You&apos;re in
          </div>

          <h1 className="mx-auto max-w-[650px] font-serif text-[clamp(2.45rem,11vw,4.85rem)] font-black leading-[0.98] tracking-normal text-white drop-shadow-[0_4px_12px_rgba(4,0,24,0.78)]">
            Lovely. Check your inbox.
          </h1>

          <div className="mx-auto mt-6 max-w-[590px] space-y-5 text-base font-semibold leading-7 text-white/90 drop-shadow-[0_2px_10px_rgba(4,0,24,0.7)] sm:text-lg sm:leading-8">
            <p>I&apos;ve just sent you a quick welcome email.</p>
            <p>
              If it lands in Spam or Promotions, please move it into your Primary inbox. That would be an absolute dream.
            </p>
            <p>Also, feel free to hit reply and tell me:</p>
            <p className="font-black text-white">
              What are your goals right now? What are you working towards?
            </p>
            <p>
              I read the replies, and it helps me understand what would genuinely be useful to share.
            </p>
          </div>

          <div className="mx-auto mt-8 flex w-full max-w-[520px] flex-col gap-3 sm:flex-row sm:justify-center">
            {inboxLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md bg-fuchsia-500 px-5 text-base font-bold text-white shadow-[0_0_24px_rgba(255,42,184,0.38)] transition hover:bg-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-100"
              >
                {link.label}
                <ExternalLink size={16} />
              </a>
            ))}
          </div>

          <div className="mx-auto mt-9 max-w-[520px] text-base font-bold leading-7 text-white sm:text-lg">
            <p>Excited to connect.</p>
            <p className="mt-2 text-fuchsia-200">-George</p>
          </div>
        </div>
      </section>
    </main>
  );
}
