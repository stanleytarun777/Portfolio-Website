import { projects } from "../data/projects.jsx";

function FeaturedProject({ project }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/75 bg-[linear-gradient(135deg,#102948_0%,#173a69_55%,#214d86_100%)] p-6 text-white shadow-[0_28px_70px_rgba(15,23,42,0.14)] sm:p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-white/58">
            {project.category}
          </p>
          <h3 className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-[3rem]">
            {project.title}
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/76">
            {project.summary}
          </p>
        </div>

        <div className="rounded-[1.7rem] border border-white/12 bg-white/10 px-5 py-5 shadow-[0_18px_42px_rgba(0,0,0,0.15)] backdrop-blur-xl lg:max-w-xs">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/54">Impact</p>
          <p className="mt-3 text-lg font-semibold text-white">
            Built to organize semester work in under 60 seconds.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/14 bg-white/8 px-3 py-1.5 text-xs font-medium text-white/80"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {project.highlights.map((highlight) => (
          <div
            key={highlight}
            className="rounded-[1.45rem] border border-white/12 bg-white/8 p-4"
          >
            <p className="text-sm leading-7 text-white/74">{highlight}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--navy)] transition duration-300 hover:-translate-y-0.5"
        >
          {project.ctaLabel}
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/14"
        >
          View GitHub
        </a>
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col rounded-[1.9rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(244,247,251,0.82))] p-6 shadow-[0_20px_48px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_58px_rgba(15,23,42,0.1)]">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{project.category}</p>
      <h3 className="mt-4 text-[2rem] font-semibold tracking-[-0.045em] text-slate-950">
        {project.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{project.caption}</p>

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
        {project.highlights.slice(0, 2).map((highlight) => (
          <div key={highlight} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-[var(--navy)]/70" />
            <p className="text-sm leading-7 text-slate-600">{highlight}</p>
          </div>
        ))}
      </div>

      <div className="mt-auto flex gap-3 pt-8">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full bg-[var(--navy)] px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#173f76]"
        >
          {project.ctaLabel}
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition duration-300 hover:border-slate-300 hover:text-slate-950"
        >
          GitHub
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section
      id="projects"
      className="rounded-[2.2rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,247,251,0.84))] p-6 shadow-[0_28px_68px_rgba(15,23,42,0.08)] backdrop-blur-2xl lg:p-8"
    >
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Selected Work</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-[3.2rem]">
          Projects that demonstrate product thinking, implementation quality, and follow-through.
        </h2>
      </div>

      <div className="mt-8">
        <FeaturedProject project={featured} />
      </div>

      <div className="mt-8 grid gap-5 xl:grid-cols-3">
        {rest.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
