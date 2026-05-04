import { profile } from "../data/profile.js";

const focusAreas = [
  "Software engineering internships",
  "Frontend and product-focused development",
  "Web applications that balance usability and structure",
];

export default function About() {
  return (
    <section
      id="about"
      className="grid gap-6 rounded-[2rem] border border-white/60 bg-white/58 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:grid-cols-[minmax(0,1.2fr)_320px] lg:p-8"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">About</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-950">
          A portfolio built with the same care as a well-composed workspace.
        </h2>
        <p className="mt-6 text-base leading-8 text-slate-600">
          I am a {profile.major} major at {profile.college} with a {profile.concentration}. My
          background blends technical development with an understanding of how systems support
          people, teams, and business goals.
        </p>
        <p className="mt-4 text-base leading-8 text-slate-600">
          I enjoy building responsive interfaces, organizing complex ideas into clear experiences,
          and writing maintainable code that feels intentional from structure to polish. My recent
          work includes React applications, Supabase integrations, and interface design that
          emphasizes clarity over noise.
        </p>
      </div>

      <aside className="rounded-[1.75rem] border border-[rgba(18,58,114,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(244,247,251,0.8))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_18px_32px_rgba(15,23,42,0.06)]">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Current Focus</p>
        <div className="mt-5 space-y-4">
          {focusAreas.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--navy)]/80 shadow-[0_0_0_6px_rgba(18,58,114,0.08)]" />
              <p className="text-sm leading-7 text-slate-600">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[1.25rem] border border-white/70 bg-white/70 p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Professional Identity</p>
          <p className="mt-2 text-sm font-semibold text-slate-900">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-500">{profile.role}</p>
          <p className="mt-4 text-xs text-slate-500">{profile.graduation}</p>
        </div>
      </aside>
    </section>
  );
}
