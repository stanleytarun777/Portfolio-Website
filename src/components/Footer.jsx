import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/40 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Designed as a premium recruiter-first portfolio.</p>
      </div>
    </footer>
  );
}
