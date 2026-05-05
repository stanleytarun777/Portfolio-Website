import { experiences, networkingExperience } from "../data/resume.js";

export default function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#102948]">
            Work History
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
            Experience &amp; Highlights
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            The roles and work that shaped how I think about building, organizing, and solving problems.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">

          {/* Left — Work Experience */}
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Work Experience
            </p>

            {experiences.map((exp) => (
              <article
                key={exp.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{exp.title}</h3>
                    <p className="mt-0.5 text-sm font-semibold text-[#102948]">
                      {exp.organization}
                    </p>
                  </div>
                  <span className="shrink-0 self-start rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                    {exp.timeframe}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {exp.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                      <p className="text-sm leading-7 text-slate-600">{point}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            {/* Data highlight card */}
            <div className="rounded-2xl bg-[#102948] p-6 text-white shadow-[0_8px_32px_rgba(15,23,42,0.14)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                Data Highlight
              </p>
              <p className="mt-3 text-5xl font-bold tracking-tight text-white">40K+</p>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Excel records cleaned and processed to support a catalog migration at the
                Nicholls State University Library.
              </p>
            </div>
          </div>

          {/* Right — Networking & Systems Lab */}
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Networking &amp; Systems Lab
            </p>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                Hands-on lab work from coursework in network administration and systems.
              </p>
              <ul className="mt-5 space-y-3">
                {networkingExperience.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#102948]" />
                    <p className="text-sm leading-7 text-slate-600">{item}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
}
