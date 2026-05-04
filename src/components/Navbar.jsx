import { useState } from "react";
import { profile } from "../data/profile.js";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/45 bg-[rgba(246,248,252,0.72)] backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex min-w-0 items-center gap-4 rounded-full border border-white/60 bg-white/55 px-3 py-2 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(15,23,42,0.12)]"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/70 bg-[radial-gradient(circle_at_30%_30%,#355f96,#10233f_70%)] text-sm font-semibold tracking-[0.2em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_10px_24px_rgba(15,23,42,0.18)]">
            ST
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-tight text-slate-900">
              {profile.name}
            </p>
            <p className="truncate text-[11px] text-slate-500">{profile.college}</p>
            <p className="truncate text-[11px] text-slate-500">
              {profile.major} • {profile.concentration}
            </p>
          </div>
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm md:hidden"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="space-y-1">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition duration-300 hover:bg-white/70 hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {open && (
        <div
          id="primary-navigation"
          className="mx-4 mb-4 rounded-3xl border border-white/65 bg-white/82 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition duration-300 hover:bg-slate-100/80 hover:text-slate-950"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
