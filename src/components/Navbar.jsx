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
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/50 bg-[rgba(245,248,252,0.74)] backdrop-blur-2xl">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-4 rounded-full border border-white/70 bg-white/70 px-3 py-2 shadow-[0_18px_42px_rgba(15,23,42,0.08)]">
            <button
              type="button"
              aria-label="Open profile image"
              className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/80 shadow-[0_14px_24px_rgba(15,23,42,0.18)] ring-4 ring-white/60 transition duration-300 hover:scale-[1.02]"
              onClick={() => setShowImage(true)}
            >
              <img
                src={profile.image}
                alt={`${profile.name} headshot`}
                className="h-full w-full object-cover"
              />
            </button>

            <div className="min-w-0">
              <a
                href="#top"
                className="block truncate text-base font-semibold tracking-tight text-slate-950"
              >
                {profile.name}
              </a>
              <p className="truncate text-sm text-slate-500">{profile.college}</p>
              <p className="truncate text-xs text-slate-500">
                {profile.major} • {profile.concentration}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/85 text-slate-700 shadow-sm md:hidden"
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

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition duration-300 hover:bg-white/80 hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {open && (
          <div
            id="primary-navigation"
            className="mx-4 mb-4 rounded-[1.75rem] border border-white/70 bg-white/85 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur-2xl md:hidden"
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

      {showImage && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/72 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Profile image preview"
          onClick={() => setShowImage(false)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.38)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg text-slate-700 shadow-lg transition hover:bg-white"
              aria-label="Close image preview"
              onClick={() => setShowImage(false)}
            >
              ×
            </button>

            <img
              src={profile.image}
              alt={`${profile.name} professional headshot`}
              className="max-h-[82vh] w-full rounded-[1.4rem] object-contain bg-[#d8d0c7]"
            />
          </div>
        </div>
      )}
    </>
  );
}
