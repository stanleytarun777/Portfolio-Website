import { profile } from "../data/profile.js";

const quickFacts = [
  { label: "Location", value: profile.location },
  { label: "Graduation", value: profile.graduation },
];

export default function About() {
  return (
    <section
      id="about"
      className="grid gap-6 rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(246,249,252,0.9))] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] lg:grid-cols-[minmax(360px,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:p-8"
    >
      <div className="rounded-[1.7rem] border border-slate-200/80 bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.05)] sm:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-[0_16px_28px_rgba(15,23,42,0.1)] ring-1 ring-slate-200">
            <img
              src={profile.image}
              alt={`${profile.name} headshot`}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Profile</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-slate-950">
              {profile.name}
            </h2>
            <p className="mt-3 text-base font-medium text-[var(--navy)]">{profile.role}</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">{profile.college}</p>
            <p className="mt-1 text-sm leading-7 text-slate-500">
              {profile.major} ({profile.concentration})
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

      <div className="rounded-[1.7rem] border border-slate-200/80 bg-[linear-gradient(180deg,#102948,#15365f)] p-6 text-white shadow-[0_18px_40px_rgba(15,23,42,0.12)] sm:p-7">
        <p className="text-xs uppercase tracking-[0.2em] text-white/58">About Me</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.05em] text-white sm:text-[2.6rem]">
          I like building things that are useful, clear, and easy to maintain.
        </h2>
        <p className="mt-5 text-base leading-8 text-white/76">{profile.summary}</p>
        <p className="mt-5 text-base leading-8 text-white/72">
          A lot of what I know came from building things on my own, working
          through coursework, and figuring out how to make ideas work in actual
          code. I pay close attention to structure and usability — I want what
          I build to be something other people can understand, maintain, and
          actually use.
        </p>
      </div>
    </section>
  );
}
