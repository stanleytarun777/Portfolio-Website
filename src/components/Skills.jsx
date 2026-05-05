import { skillGroups } from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills" className="section-card">
      <div className="section-card-intro">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">
          Clean capability blocks with consistent depth and spacing.
        </h2>
        <p className="section-description section-description-spacious">
          My skill set is grounded in practical web development, thoughtful
          interface building, and reliable project workflows.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-card">
            <div className="skill-card-top">
              <div className="skill-icon">
                <span className="skill-icon-dot" />
              </div>

              <div className="skill-copy">
                <h3 className="skill-title">{group.title}</h3>
                <p className="skill-description">{group.description}</p>
              </div>
            </div>

            <div className="skill-pills">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
