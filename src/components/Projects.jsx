import { useMemo, useState } from "react";
import { projects } from "../data/projects.jsx";

function ProjectModal({ project, onClose }) {
  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/68 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/20 bg-white shadow-[0_34px_80px_rgba(15,23,42,0.24)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-slate-600 shadow-sm transition hover:text-slate-950"
          aria-label="Close project details"
          onClick={onClose}
        >
          ×
        </button>

        <div className="border-b border-slate-200 bg-[linear-gradient(135deg,#f8fafc_0%,#eef3f8_100%)] px-6 py-8 sm:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{project.category}</p>
          <h3 className="mt-3 text-4xl font-semibold tracking-[-0.055em] text-slate-950">
            {project.title}
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{project.summary}</p>
        </div>

        <div className="grid gap-8 px-6 py-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div>
            <p className="text-sm font-semibold text-slate-950">Project Overview</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{project.caption}</p>

            <div className="mt-6 space-y-3">
              {project.highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--navy)]/70" />
                  <p className="text-sm leading-7 text-slate-600">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Tech Stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[var(--navy)] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#173f76]"
              >
                {project.ctaLabel}
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:border-slate-300 hover:text-slate-950"
              >
                View GitHub
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedTitle, setSelectedTitle] = useState(projects[0]?.title ?? null);
  const [openTitle, setOpenTitle] = useState(null);

  const selectedProject = useMemo(
    () => projects.find((project) => project.title === selectedTitle) ?? null,
    [selectedTitle],
  );
  const openProject = useMemo(
    () => projects.find((project) => project.title === openTitle) ?? null,
    [openTitle],
  );

  return (
    <>
      <section
        id="projects"
        className="rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(246,249,252,0.9))] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] lg:p-8"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Selected Work</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-[3rem]">
              Click a project to open the details recruiters actually care about.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Each project opens into a focused detail view with the purpose,
              technical decisions, and links to the live build and repository.
            </p>
          </div>

          <div className="rounded-[1.7rem] border border-slate-200/80 bg-white p-4 shadow-[0_12px_28px_rgba(15,23,42,0.05)]">
            <div className="space-y-3">
              {projects.map((project, index) => {
                const active = project.title === selectedTitle;

                return (
                  <button
                    key={project.title}
                    type="button"
                    className={`flex w-full items-center justify-between rounded-[1.3rem] border px-4 py-4 text-left transition duration-300 ${
                      active
                        ? "border-[rgba(18,58,114,0.18)] bg-[rgba(18,58,114,0.06)] shadow-[0_12px_22px_rgba(15,23,42,0.06)]"
                        : "border-slate-200 bg-slate-50/60 hover:border-slate-300 hover:bg-white"
                    }`}
                    onClick={() => {
                      setSelectedTitle(project.title);
                      setOpenTitle(project.title);
                    }}
                  >
                    <div className="pr-4">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                        Project {index + 1}
                      </p>
                      <p className="mt-2 text-lg font-semibold tracking-tight text-slate-950">
                        {project.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-500">{project.category}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                      Open
                    </span>
                  </button>
                );
              })}
            </div>

            {selectedProject && (
              <div className="mt-5 rounded-[1.4rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#eef3f8_100%)] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Current Selection
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                  {selectedProject.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {selectedProject.caption}
                </p>
                <button
                  type="button"
                  className="mt-5 inline-flex items-center rounded-full bg-[var(--navy)] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#173f76]"
                  onClick={() => setOpenTitle(selectedProject.title)}
                >
                  Open Project Details
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <ProjectModal project={openProject} onClose={() => setOpenTitle(null)} />
    </>
  );
}
