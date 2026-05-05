import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#102948] shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#102948] px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
