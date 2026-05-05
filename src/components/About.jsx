import { profile } from "../data/profile.js";

const quickFacts = [
  { label: "College", value: profile.college },
  { label: "Major", value: `${profile.major} • ${profile.concentration}` },
  { label: "Location", value: profile.location },
  { label: "Graduation", value: profile.graduation },
];

export default function About() {
  return (
    <section
      id="about"
      className="grid gap-6 rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(246,249,252,0.9))] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] lg:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)] lg:p-8"
    >
      <div className="rounded-[1.7rem] border border-slate-200/80 bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.05)]">
        <div className="flex items-center gap-5">
          <div className="h-24 w-24 shrink-0 overflow-hidden rounded-[1.5rem] border border-slate-200 shadow-[0_14px_24px_rgba(15,23,42,0.08)]">
            <img
              src={profile.image}
              alt={`${profile.name} headshot`}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Name</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
              {profile.name}
            </h2>

            <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-slate-400">Role</p>
            <p className="mt-1 text-sm font-medium text-slate-700">{profile.role}</p>

            <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-slate-400">College</p>
            <p className="mt-1 text-sm text-slate-600">{profile.college}</p>

            <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-slate-400">Major</p>
            <p className="mt-1 text-sm text-slate-600">
              {profile.major} • {profile.concentration}
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-[1.2rem] border border-slate-200 bg-slate-50/70 px-4 py-3"
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{fact.label}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[1.7rem] border border-slate-200/80 bg-[linear-gradient(180deg,#102948,#15365f)] p-6 text-white shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
        <p className="text-xs uppercase tracking-[0.2em] text-white/58">About Me</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-white sm:text-[3rem]">
          A software-focused portfolio built around substance, not noise.
        </h2>
        <p className="mt-5 text-base leading-8 text-white/76">{profile.summary}</p>
        <p className="mt-5 text-base leading-8 text-white/72">
          I bring a combination of frontend development practice, systems awareness,
          and practical execution shaped by coursework, independent builds, and
          hands-on campus work. I care about writing clean code, understanding the
          problem clearly, and building solutions that feel reliable and intentional.
        </p>
      </div>
    </section>
  );
}
