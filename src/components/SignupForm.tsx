import { ArrowRight, Mail } from "lucide-react";

export function SignupForm() {
  return (
    <form className="group flex w-full flex-col gap-3 rounded-xl border border-fuchsia-200/35 bg-white/[0.15] p-2 shadow-[0_0_28px_rgba(255,42,184,0.22),0_18px_54px_rgba(31,8,68,0.32)] backdrop-blur-xl transition duration-300 hover:border-fuchsia-200/60 hover:bg-white/[0.18] hover:shadow-[0_0_42px_rgba(255,42,184,0.34),0_20px_60px_rgba(31,8,68,0.38)] focus-within:border-fuchsia-100/80 focus-within:bg-white/[0.21] focus-within:shadow-[0_0_54px_rgba(255,42,184,0.46),0_24px_70px_rgba(92,35,180,0.38)] md:flex-row">
      <label className="relative flex min-h-12 flex-1 items-center rounded-lg border border-white/10 bg-white/[0.06] transition group-focus-within:border-fuchsia-100/40 sm:min-h-14 md:min-h-12">
        <Mail className="absolute left-4 text-white/85 drop-shadow-[0_0_8px_rgba(255,42,184,0.5)] transition group-focus-within:text-fuchsia-100" size={21} />
        <span className="sr-only">Email address</span>
        <input
          type="email"
          required
          placeholder="Email address"
          className="h-12 w-full rounded-lg border border-transparent bg-transparent pl-12 pr-4 text-base font-semibold text-white outline-none placeholder:text-white/82 focus:bg-white/[0.04] sm:h-14 md:h-12"
        />
      </label>
      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-fuchsia-500 px-6 text-base font-bold text-white shadow-[0_0_34px_rgba(255,42,184,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-200 focus:ring-offset-2 focus:ring-offset-slate-950 sm:h-14 md:h-12 md:w-auto"
      >
        Join the Newsletter
        <ArrowRight size={18} />
      </button>
    </form>
  );
}
