import {
  certifications,
  experiences,
  networkingExperience,
} from "../data/resume.js";
import { profile } from "../data/profile.js";

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col gap-6">
      <article className="rounded-[2.1rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,247,251,0.82))] p-5 shadow-[0_24px_56px_rgba(15,23,42,0.08)] sm:p-6">
        <div className="flex items-start gap-4">
          <div className="h-11 w-11 overflow-hidden rounded-full border-2 border-white/90 shadow-[0_12px_24px_rgba(15,23,42,0.12)]">
            <img
              src={profile.image}
              alt={`${profile.name} avatar`}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-base font-semibold text-slate-950">{profile.name}</p>
            <p className="mt-1 text-sm text-slate-500">Network Design post</p>
          </div>
        </div>

        <div className="mt-5 rounded-[1.8rem] border border-white/80 bg-[linear-gradient(135deg,#f8fbff_0%,#edf3fa_60%,#e8eef7_100%)] p-5 sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Networking Experience
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-[2.1rem]">
                Hands-on network configuration, segmentation, troubleshooting, and systems planning.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                My networking coursework includes practical switch and router
                configuration, IP planning, VLAN design, and diagnostics across
                multi-device simulated environments.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/80 bg-white/88 px-4 py-4 shadow-[0_16px_36px_rgba(15,23,42,0.08)]">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Focus</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">
                VLANs, CLI configuration, and structured troubleshooting
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {networkingExperience.map((item) => (
              <div
                key={item}
                className="rounded-[1.35rem] border border-white/90 bg-white/86 px-4 py-4"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--navy)]/80" />
                  <p className="text-sm leading-7 text-slate-600">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      <article className="rounded-[2.1rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,247,251,0.82))] p-5 shadow-[0_24px_56px_rgba(15,23,42,0.08)] sm:p-6">
        <div className="flex items-start gap-4">
          <div className="h-11 w-11 overflow-hidden rounded-full border-2 border-white/90 shadow-[0_12px_24px_rgba(15,23,42,0.12)]">
            <img
              src={profile.image}
              alt={`${profile.name} avatar`}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-base font-semibold text-slate-950">{profile.name}</p>
            <p className="mt-1 text-sm text-slate-500">Experience / Highlights post</p>
          </div>
        </div>

        <div className="mt-5 grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-4">
            {experiences.map((experience) => (
              <article
                key={experience.title}
                className="rounded-[1.7rem] border border-white/80 bg-white/80 p-5"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xl font-semibold tracking-tight text-slate-950">
                      {experience.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">{experience.organization}</p>
                  </div>
                  <p className="text-sm font-medium text-slate-700">{experience.timeframe}</p>
                </div>

                <div className="mt-4 space-y-3">
                  {experience.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-slate-300" />
                      <p className="text-sm leading-7 text-slate-600">{point}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="space-y-4">
            <article className="rounded-[1.7rem] border border-white/80 bg-[linear-gradient(180deg,#102a50,#143764)] p-5 text-white shadow-[0_22px_46px_rgba(15,23,42,0.16)]">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/58">
                Highlight
              </p>
              <p className="mt-3 text-4xl font-semibold tracking-[-0.05em]">40K+</p>
              <p className="mt-2 text-sm leading-6 text-white/76">
                records processed and cleaned to improve accuracy and support
                system updates.
              </p>
            </article>

            <article className="rounded-[1.7rem] border border-white/80 bg-white/80 p-5">
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
      </article>
    </section>
  );
}
