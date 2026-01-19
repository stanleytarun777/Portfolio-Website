import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section className="projects" id="Projects">
        <h2>Projects</h2>
        {projects.map((project, index)=> (
            <ProjectCard key={index} project={project} />
        ))}
        </section>
    );
}