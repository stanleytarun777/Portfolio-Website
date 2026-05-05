export default function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col rounded-[1.8rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,247,251,0.8))] p-5 shadow-[0_18px_42px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(15,23,42,0.1)]">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
          {project.category}
        </span>
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--navy)]/85 shadow-[0_0_0_8px_rgba(18,58,114,0.08)]" />
      </div>

      <h3 className="mt-5 text-[1.9rem] font-semibold leading-tight tracking-[-0.04em] text-slate-950">
        {project.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-600">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-200/90 bg-[rgba(248,250,252,0.96)] px-3 py-1.5 text-xs font-medium text-slate-600"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {project.highlights.map((highlight) => (
          <div key={highlight} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-slate-300" />
            <p className="text-sm leading-7 text-slate-600">{highlight}</p>
          </div>
        ))}
      </div>

      <div className="mt-auto flex gap-3 pt-8">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 transition duration-300 hover:border-slate-300 hover:bg-white hover:text-slate-950"
        >
          GitHub
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full bg-[var(--navy)] px-4 py-2 text-sm font-semibold text-white shadow-[0_16px_28px_rgba(13,35,70,0.22)] transition duration-300 hover:bg-[#173f76]"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
}
