import {
  certifications,
  education,
  experiences,
  networkingExperience,
} from "../data/resume.js";

export default function Experience() {
  return (
    <section
      id="experience"
      className="rounded-[2.2rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,247,251,0.84))] p-6 shadow-[0_28px_68px_rgba(15,23,42,0.08)] backdrop-blur-2xl lg:p-8"
    >
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Experience</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-[3rem]">
          Education, work history, and technical exposure presented with clarity.
        </h2>
      </div>

      <div className="mt-8 grid gap-5 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="space-y-5">
          <article className="rounded-[1.8rem] border border-white/80 bg-[linear-gradient(180deg,#102948,#163a68)] p-6 text-white shadow-[0_24px_54px_rgba(15,23,42,0.14)]">
            <p className="text-xs uppercase tracking-[0.2em] text-white/58">Education</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.045em]">
              {education.degree}
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/74">{education.school}</p>
            <p className="mt-4 text-sm font-medium text-white/86">{education.graduation}</p>
          </article>

          <article className="rounded-[1.8rem] border border-white/80 bg-white/82 p-6 shadow-[0_16px_36px_rgba(15,23,42,0.05)]">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Networking Experience
            </p>
            <div className="mt-5 space-y-3">
              {networkingExperience.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--navy)]/75" />
                  <p className="text-sm leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="space-y-5">
          {experiences.map((experience) => (
            <article
              key={experience.title}
              className="rounded-[1.8rem] border border-white/80 bg-white/82 p-6 shadow-[0_16px_36px_rgba(15,23,42,0.05)]"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {experience.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{experience.organization}</p>
                </div>
                <p className="text-sm font-medium text-slate-700">{experience.timeframe}</p>
              </div>

              <div className="mt-5 space-y-3">
                {experience.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-slate-300" />
                    <p className="text-sm leading-7 text-slate-600">{point}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}

          <div className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)]">
            <article className="rounded-[1.8rem] border border-white/80 bg-[linear-gradient(180deg,#102948,#163a68)] p-6 text-white shadow-[0_24px_54px_rgba(15,23,42,0.14)]">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/58">Highlight</p>
              <p className="mt-3 text-4xl font-semibold tracking-[-0.05em]">40K+</p>
              <p className="mt-2 text-sm leading-6 text-white/76">records processed and cleaned.</p>
            </article>

            <article className="rounded-[1.8rem] border border-white/80 bg-white/82 p-6 shadow-[0_16px_36px_rgba(15,23,42,0.05)]">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Certifications</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {certifications.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50/90 px-4 py-2 text-sm text-slate-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
