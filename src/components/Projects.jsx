import { projects } from "../data/projects.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  return (
    <section
      id="projects"
      className="rounded-[2rem] border border-white/70 bg-white/58 p-6 shadow-[0_28px_64px_rgba(15,23,42,0.08)] backdrop-blur-2xl lg:p-8"
    >
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Projects</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
          Selected work that shows execution, structure, and product thinking.
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-600">
          Each project is presented to help recruiters quickly see the problem,
          the stack, and the decisions behind the build.
        </p>
      </div>

      <div className="mt-8 grid gap-5 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
