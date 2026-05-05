import { projects } from "../data/projects.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  return (
    <section id="projects" className="section-card">
      <div className="section-card-intro section-card-intro-wide">
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title">
          Selected work presented with clarity, range, and intention.
        </h2>
        <p className="section-description section-description-spacious">
          These projects highlight how I think through usability, structure
          interfaces, and ship practical web experiences from concept to
          deployment.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
