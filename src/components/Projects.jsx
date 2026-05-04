import { projects } from "../data/projects.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  return (
    <section
      id="projects"
      className="rounded-[2rem] border border-white/60 bg-white/56 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:p-8"
    >
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Projects</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-950">
          Selected work presented with clarity, range, and intention.
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-600">
          These projects highlight how I think through usability, structure interfaces, and ship
          practical web experiences from concept to deployment.
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
