import { useState } from "react";
import { profile } from "../data/profile.js";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 mt-4 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl rounded-[1.7rem] border border-white/70 bg-[rgba(250,252,255,0.78)] shadow-[0_22px_50px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
        <nav className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5 lg:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white/90 shadow-[0_14px_24px_rgba(15,23,42,0.12)]">
              <img
                src={profile.image}
                alt={`${profile.name} headshot`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-950">{profile.name}</p>
              <p className="truncate text-xs text-slate-500">
                {profile.college} • {profile.major}
              </p>
            </div>
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm md:hidden"
            aria-expanded={open}
            aria-controls="profile-tabs"
            aria-label="Toggle profile navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="space-y-1">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition duration-300 hover:bg-white hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {open && (
          <div id="profile-tabs" className="border-t border-slate-200/80 px-3 pb-3 md:hidden">
            <div className="flex flex-col gap-1 pt-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition duration-300 hover:bg-white hover:text-slate-950"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
