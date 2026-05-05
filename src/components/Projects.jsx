import { projects } from "../data/projects.jsx";

function GitHubIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg lg:p-7">

      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex rounded-full border border-[rgba(16,41,72,0.14)] bg-[rgba(16,41,72,0.06)] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#102948]">
          {project.category}
        </span>
        <div className="flex shrink-0 gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-white hover:text-slate-900"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#102948] px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#173f76]"
          >
            Live
            <ExternalLinkIcon />
          </a>
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">
        {project.title}
      </h3>

      {/* Summary */}
      <p className="mt-3 text-sm leading-7 text-slate-600">{project.summary}</p>

      {/* Problem it solves */}
      <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Problem It Solves
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-700">{project.problem}</p>
      </div>

      {/* Tech Stack */}
      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Tech Stack
        </p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Key Features
        </p>
        <ul className="mt-3 space-y-2">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#102948]" />
              <p className="text-sm leading-6 text-slate-600">{highlight}</p>
            </li>
          ))}
        </ul>
      </div>

    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#102948]">
            Selected Work
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
            Projects I've built
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Each one taught me something real — about code, about design, and about finishing what I start.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
