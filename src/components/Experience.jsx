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
      className="rounded-[2rem] border border-white/70 bg-white/58 p-6 shadow-[0_28px_64px_rgba(15,23,42,0.08)] backdrop-blur-2xl lg:p-8"
    >
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Experience</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
          Resume depth presented in a recruiter-friendly, high-signal layout.
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-600">
          Education, networking exposure, work history, and certifications are
          surfaced here so the most important proof points are easy to assess.
        </p>
      </div>

      <div className="mt-8 grid gap-5 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="space-y-5">
          <article className="rounded-[1.75rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(244,247,251,0.78))] p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Education</p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
              {education.degree}
            </h3>
            <p className="mt-2 text-sm text-slate-500">{education.school}</p>
            <p className="mt-4 text-sm font-medium text-slate-700">
              {education.graduation}
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(244,247,251,0.78))] p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Networking Experience
            </p>
            <div className="mt-5 space-y-3">
              {networkingExperience.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--navy)]/80" />
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
              className="rounded-[1.75rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(244,247,251,0.78))] p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">
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

          <article className="rounded-[1.75rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(244,247,251,0.78))] p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Certifications</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {certifications.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
