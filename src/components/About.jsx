import { profile } from "../data/profile.js";

const focusAreas = [
  "Software Engineering internships",
  "Web Development opportunities",
  "IT internships and team-based experience",
];

export default function About() {
  return (
    <section id="about" className="section-card about-section">
      <div className="section-card-main">
        <p className="section-eyebrow">About Me</p>
        <h2 className="section-title">Computer Information Systems major with a practical, growth-focused mindset.</h2>
        <p className="section-description section-description-spacious">
          I am a Computer Information Systems (CIS) major with a concentration
          in Computer Science, pursuing opportunities in software engineering,
          web development, and technology roles. My academic background blends
          technical programming skills with a strong understanding of business
          systems and information technology, allowing me to approach software
          development from both a technical and organizational perspective.
        </p>
        <p className="section-description">
          I have hands-on experience developing responsive, modern web
          applications using HTML, CSS, JavaScript, and React. Recently, I
          developed a full-stack task management application, TaskFlow, using
          React and Supabase, featuring authentication, task tracking,
          analytics, and a responsive dashboard. I focus on writing clean,
          maintainable code while enjoying the process of turning ideas into
          functional solutions.
        </p>
        <p className="section-description">
          Through coursework, independent projects, and practical experience, I
          have developed a solid foundation in software development principles,
          debugging, version control, and system thinking. I am currently
          seeking a Software Engineering, Web Development, or IT Internship
          where I can apply my skills, gain real-world experience, and
          contribute meaningfully to a team.
        </p>
      </div>

      <aside className="about-panel">
        <p className="section-eyebrow">Current Focus</p>

        <div className="focus-list">
          {focusAreas.map((item) => (
            <div key={item} className="focus-item">
              <span className="focus-dot" />
              <p className="focus-text">{item}</p>
            </div>
          ))}
        </div>

        <div className="identity-card">
          <p className="section-eyebrow">Professional Identity</p>
          <p className="identity-name">{profile.name}</p>
          <p className="identity-role">{profile.role}</p>
          <p className="identity-graduation">{profile.graduation}</p>
        </div>
      </aside>
    </section>
  );
}
