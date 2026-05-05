import { profile } from "../data/profile.js";
import { education } from "../data/resume.js";

const identityItems = [
  { label: "Role", value: profile.role },
  { label: "College", value: profile.college },
  { label: "Program", value: `${profile.major} • ${profile.concentration}` },
  { label: "Graduation", value: education.graduation },
];

export default function About() {
  return (
    <section
      id="about"
      className="grid gap-5 rounded-[2rem] border border-white/70 bg-white/60 p-6 shadow-[0_28px_64px_rgba(15,23,42,0.08)] backdrop-blur-2xl lg:grid-cols-[360px_minmax(0,1fr)] lg:p-8"
    >
      <aside className="rounded-[1.75rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(244,247,251,0.76))] p-5 shadow-[0_18px_38px_rgba(15,23,42,0.06)]">
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 overflow-hidden rounded-[1.5rem] border border-white/80 shadow-[0_14px_24px_rgba(15,23,42,0.14)]">
            <img
              src={profile.image}
              alt={`${profile.name} portrait`}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl font-semibold tracking-tight text-slate-950">{profile.name}</p>
            <p className="mt-1 text-sm text-slate-500">{profile.role}</p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {identityItems.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.25rem] border border-white/75 bg-white/72 px-4 py-3"
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">{item.value}</p>
            </div>
          ))}
        </div>
      </aside>

      <div className="rounded-[1.75rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(245,248,252,0.72))] p-6 shadow-[0_18px_38px_rgba(15,23,42,0.05)]">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">About Me</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
          Technical depth, systems awareness, and a mindset built for real teams.
        </h2>

        <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
          <p>
            I am a Computer Information Systems major with a Computer Science
            concentration, pursuing opportunities in software engineering, web
            development, and technology roles. My academic background blends
            technical programming skills with a strong understanding of
            business systems and information technology.
          </p>
          <p>
            I have hands-on experience building responsive web applications
            with HTML, CSS, JavaScript, React, and Supabase. My work focuses
            on turning ideas into functional products while keeping the code
            clean, maintainable, and structured for growth.
          </p>
          <p>
            Through coursework, independent projects, networking labs, and
            campus work experience, I have developed a strong foundation in
            software development principles, debugging, system thinking, and
            collaborative execution.
          </p>
        </div>
      </div>
    </section>
  );
}
