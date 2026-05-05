import { projects } from "../data/projects.jsx";

function GitHubIcon() {
  return (
    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-accent" />
      <div className="project-body">
        <div className="project-title-row">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-btns">
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-github">
              <GitHubIcon />
              GitHub
            </a>
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-live">
              Live
              <ExternalLinkIcon />
            </a>
          </div>
        </div>

        <p className="project-summary">{project.summary}</p>

        <div className="project-problem">
          <p className="label-sm">Problem It Solves</p>
          <p className="project-problem-text">{project.problem}</p>
        </div>

        <div className="project-meta">
          <p className="label-sm">Tech Stack</p>
          <div className="stack-pills">
            {project.stack.map((item) => (
              <span key={item} className="stack-pill">{item}</span>
            ))}
          </div>
        </div>

        <div className="project-meta">
          <p className="label-sm">Key Features</p>
          <ul className="feature-list">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="feature-item">
                <span className="feature-dot" />
                <p className="feature-text">{highlight}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">
        <div className="projects-header">
          <h2 className="section-title">Projects I've built</h2>
          <p className="section-subtitle">
            Each one taught me something real — about code, about design, and about finishing what I start.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
