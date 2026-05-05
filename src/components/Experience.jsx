import {
  certifications,
  education,
  experiences,
  networkingExperience,
} from "../data/resume.js";

export default function Experience() {
  return (
    <section id="experience" className="section-card">
      <div className="section-card-intro section-card-intro-wide">
        <p className="section-eyebrow">Resume Highlights</p>
        <h2 className="section-title">
          Education, technical depth, and real-world experience in one place.
        </h2>
        <p className="section-description section-description-spacious">
          This section brings forward the strongest details from my resume so
          recruiters can quickly understand my academic background, networking
          experience, work history, and certifications.
        </p>
      </div>

      <div className="resume-grid">
        <article className="resume-card">
          <p className="section-eyebrow">Education</p>
          <h3 className="resume-card-title">{education.degree}</h3>
          <p className="resume-card-subtitle">{education.school}</p>
          <p className="resume-card-meta">{education.graduation}</p>
        </article>

        <article className="resume-card">
          <p className="section-eyebrow">Networking Experience</p>
          <div className="resume-points">
            {networkingExperience.map((item) => (
              <div key={item} className="resume-point">
                <span className="resume-point-dot" />
                <p className="resume-point-text">{item}</p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article key={experience.title} className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="resume-card-title">{experience.title}</h3>
                <p className="resume-card-subtitle">{experience.organization}</p>
              </div>
              <p className="experience-timeframe">{experience.timeframe}</p>
            </div>

            <div className="resume-points">
              {experience.points.map((point) => (
                <div key={point} className="resume-point">
                  <span className="resume-point-dot" />
                  <p className="resume-point-text">{point}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <article className="resume-card certifications-card">
        <p className="section-eyebrow">Certifications</p>
        <div className="certification-list">
          {certifications.map((item) => (
            <div key={item} className="certification-item">
              {item}
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
