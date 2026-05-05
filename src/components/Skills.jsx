import { skillGroups } from "../data/skills.js";

const categoryIcons = {
  "Technical Skills": (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Networking: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  ),
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-inner">
        <div className="skills-header">
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span className="section-badge-text">Capabilities</span>
          </div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            My background spans web development, systems work, and the tools that help me
            work effectively on a team and ship things that hold up.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card">
              <div className="skill-card-header">
                <div className="skill-card-icon">
                  {categoryIcons[group.title]}
                </div>
                <h3 className="skill-card-title">{group.title}</h3>
              </div>
              <div className="skill-pills">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
