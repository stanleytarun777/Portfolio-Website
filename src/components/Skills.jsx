import { profile } from "../data/profile.js";
import { education } from "../data/resume.js";
import { skillGroups } from "../data/skills.js";

const quickLinks = [
  { label: "GitHub", value: "stanleytarun777", href: profile.github },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^0-9]/g, "")}` },
];

export default function Skills() {
  return (
    <aside className="lg:sticky lg:top-28">
      <div className="flex flex-col gap-5">
        <section className="rounded-[2rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,247,251,0.82))] p-5 shadow-[0_22px_52px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 overflow-hidden rounded-[1.6rem] border border-white/80 shadow-[0_16px_28px_rgba(15,23,42,0.14)]">
              <img
                src={profile.image}
                alt={`${profile.name} portrait`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-xl font-semibold tracking-tight text-slate-950">{profile.name}</p>
              <p className="mt-1 text-sm text-slate-500">{profile.handle}</p>
              <p className="mt-2 text-sm font-medium text-slate-700">{profile.role}</p>
            </div>
          </div>

          <div className="mt-5 space-y-3 text-sm text-slate-600">
            <div className="rounded-[1.25rem] border border-white/70 bg-white/70 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">College</p>
              <p className="mt-1 leading-6">{profile.college}</p>
            </div>
            <div className="rounded-[1.25rem] border border-white/70 bg-white/70 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Program</p>
              <p className="mt-1 leading-6">
                {profile.major} • {profile.concentration}
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-white/70 bg-white/70 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Location</p>
              <p className="mt-1 leading-6">{profile.location}</p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/75 bg-white/72 p-5 shadow-[0_20px_48px_rgba(15,23,42,0.06)] backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Education</p>
          <h2 className="mt-3 text-lg font-semibold tracking-tight text-slate-950">
            {education.degree}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">{education.school}</p>
          <p className="mt-4 text-sm font-medium text-slate-700">{education.graduation}</p>
        </section>

        <section
          id="skills"
          className="rounded-[2rem] border border-white/75 bg-white/72 p-5 shadow-[0_20px_48px_rgba(15,23,42,0.06)] backdrop-blur-xl"
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Skills</p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                Core capabilities
              </h2>
            </div>
            <span className="rounded-full bg-[rgba(18,58,114,0.08)] px-3 py-1 text-xs font-medium text-[var(--navy)]">
              Recruiter view
            </span>
          </div>

          <div className="mt-5 space-y-4">
            {skillGroups.map((group) => (
              <article key={group.title} className="rounded-[1.4rem] border border-slate-100 bg-white/82 p-4">
                <h3 className="text-sm font-semibold text-slate-950">{group.title}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">{group.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-slate-50/90 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/75 bg-white/72 p-5 shadow-[0_20px_48px_rgba(15,23,42,0.06)] backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Links</p>
          <div className="mt-4 space-y-3">
            {quickLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center justify-between rounded-[1.25rem] border border-white/70 bg-white/80 px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(15,23,42,0.08)]"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-950">{item.label}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.value}</p>
                </div>
                <span className="text-sm text-slate-400">↗</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}
