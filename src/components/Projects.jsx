import ProjectCard from "./ProjectCard";
import { projects } from "../data";

const Projects = () => {
  return (
    <section className="py-20 align-element" id="projects">
      <div className="border-b border-gray-200 pb-5">
        <h2 className="text-3xl font-medium tracking-wider capitalize">
          Projects
        </h2>
      </div>
      <div className="py-16 grid lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
