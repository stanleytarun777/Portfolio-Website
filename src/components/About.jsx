import { profile } from "../data/profile.js";

const strengths = [
  "Full-stack software development",
  "Responsive web application design",
  "Networking and systems coursework",
  "Structured, maintainable implementation",
];

export default function About() {
  return (
    <section
      id="about"
      className="rounded-[2.1rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,247,251,0.82))] p-5 shadow-[0_24px_56px_rgba(15,23,42,0.08)] backdrop-blur-2xl sm:p-6 lg:p-7"
    >
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white/90 shadow-[0_12px_24px_rgba(15,23,42,0.12)]">
          <img
            src={profile.image}
            alt={`${profile.name} avatar`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <p className="text-base font-semibold text-slate-950">{profile.name}</p>
            <span className="text-sm text-slate-400">•</span>
            <p className="text-sm text-slate-500">{profile.handle}</p>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            About Me post • professional introduction
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-[1.7rem] border border-white/80 bg-white/70 p-5 sm:p-6">
        <h2 className="text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-[2.2rem]">
          Building software with a product mindset, a systems foundation, and a clear eye for execution.
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-600">{profile.summary}</p>
        <p className="mt-5 text-base leading-8 text-slate-600">
          I have experience developing responsive modern web applications using
          HTML, CSS, JavaScript, React, and Supabase. Through coursework,
          independent projects, and campus work, I have built a foundation in
          debugging, version control, collaboration, and system thinking that
          helps me turn ideas into structured solutions.
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {strengths.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-slate-50/90 px-3.5 py-2 text-sm font-medium text-slate-600"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
