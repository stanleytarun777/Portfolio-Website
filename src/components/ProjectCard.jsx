export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <span className="project-category">{project.category}</span>
        <span className="project-accent-dot" />
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-summary">{project.summary}</p>

      <div className="project-stack">
        {project.stack.map((item) => (
          <span key={item} className="project-stack-pill">
            {item}
          </span>
        ))}
      </div>

      <div className="project-highlights">
        {project.highlights.map((highlight) => (
          <div key={highlight} className="project-highlight">
            <span className="project-highlight-dot" />
            <p className="project-highlight-text">{highlight}</p>
          </div>
        ))}
      </div>

      <div className="project-actions">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="button button-tertiary"
        >
          GitHub
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="button button-primary"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
}
