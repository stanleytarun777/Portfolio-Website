import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="relative z-10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 rounded-[1.8rem] border border-white/70 bg-[rgba(250,252,255,0.72)] px-5 py-4 text-sm text-slate-500 shadow-[0_18px_38px_rgba(15,23,42,0.05)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Designed as a polished engineering portfolio with recruiter-first clarity.</p>
      </div>
    </footer>
  );
}
