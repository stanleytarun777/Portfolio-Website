import { profile } from "../data/profile.js";
import { projects } from "../data/projects.jsx";

function ProjectPost({ project, featured = false }) {
  return (
    <article className="rounded-[2.1rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,247,251,0.82))] p-5 shadow-[0_24px_56px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_62px_rgba(15,23,42,0.1)] sm:p-6">
      <div className="flex items-start gap-4">
        <div className="h-11 w-11 overflow-hidden rounded-full border-2 border-white/90 shadow-[0_12px_24px_rgba(15,23,42,0.12)]">
          <img
            src={profile.image}
            alt={`${profile.name} avatar`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <p className="text-base font-semibold text-slate-950">{profile.name}</p>
            <span className="text-sm text-slate-400">•</span>
            <p className="text-sm text-slate-500">{project.category}</p>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            {featured ? "Pinned portfolio feature" : "Project update"}
          </p>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/76">
        <div
          className={`relative overflow-hidden px-5 py-6 sm:px-6 ${
            featured
              ? "bg-[linear-gradient(135deg,#0f274b_0%,#173a6d_50%,#2a538f_100%)]"
              : "bg-[linear-gradient(135deg,#f8fbff_0%,#edf3fa_52%,#e6edf7_100%)]"
          }`}
        >
          <div
            className={`absolute inset-0 ${
              featured
                ? "bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_28%)]"
                : "bg-[radial-gradient(circle_at_top_right,rgba(42,83,143,0.12),transparent_34%)]"
            }`}
          />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-[0.18em] ${
                  featured
                    ? "bg-white/14 text-white/84"
                    : "bg-[rgba(18,58,114,0.08)] text-[var(--navy)]"
                }`}
              >
                {project.category}
              </span>
              <h3
                className={`mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-[2.2rem] ${
                  featured ? "text-white" : "text-slate-950"
                }`}
              >
                {project.title}
              </h3>
              <p
                className={`mt-3 max-w-2xl text-base leading-7 ${
                  featured ? "text-white/76" : "text-slate-600"
                }`}
              >
                {project.caption}
              </p>
            </div>

            <div
              className={`rounded-[1.6rem] border px-4 py-4 shadow-[0_18px_42px_rgba(15,23,42,0.12)] ${
                featured
                  ? "border-white/12 bg-white/10 text-white"
                  : "border-white/80 bg-white/86 text-slate-950"
              }`}
            >
              <p className={`text-[11px] uppercase tracking-[0.2em] ${featured ? "text-white/58" : "text-slate-400"}`}>
                Outcome
              </p>
              <p className="mt-2 text-lg font-semibold">
                {featured ? "From syllabus to plan in under 60 seconds" : "Task visibility with a structured dashboard"}
              </p>
            </div>
          </div>
        </div>

        <div className="px-5 py-5 sm:px-6 sm:py-6">
          <p className="text-base leading-8 text-slate-600">{project.summary}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-slate-50/90 px-3 py-1.5 text-xs font-medium text-slate-600"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 space-y-3">
            {project.highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[var(--navy)]/75" />
                <p className="text-sm leading-7 text-slate-600">{highlight}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--navy)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(13,35,70,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#173f76]"
            >
              {project.ctaLabel}
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [featured, secondary, ...moreProjects] = projects;

  return (
    <section id="projects" className="flex flex-col gap-6">
      <ProjectPost project={featured} featured />
      <ProjectPost project={secondary} />

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
            <p className="mt-1 text-sm text-slate-500">Additional builds</p>
          </div>
        </div>

        <div className="mt-5 grid gap-4 xl:grid-cols-2">
          {moreProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-[1.7rem] border border-white/80 bg-white/78 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(15,23,42,0.08)]"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{project.category}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50/90 px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-[var(--navy)] px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-[#173f76]"
                >
                  {project.ctaLabel}
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition duration-300 hover:border-slate-300 hover:text-slate-950"
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </article>
    </section>
  );
}
