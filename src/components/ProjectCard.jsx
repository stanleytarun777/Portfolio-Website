import { useState } from "react";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="project-card">
      <h3 onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
        {project.title}
      </h3>

      {open && (
        <>
          <p>{project.description}</p>

          {project.technologies && (
            <p><strong>Technologies:</strong> {project.technologies.join(" • ")}</p>
          )}

          {project.sections?.map((section, index) => (
            <div key={index}>
              <h4>{section.title}</h4>
              <ul>
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}

          <a href={project.githubLink} target="_blank">Github Repository</a>
          <a href={project.liveLink} target="_blank">Live Demo</a>
          
        </>
      )}
    </div>
  );
}
