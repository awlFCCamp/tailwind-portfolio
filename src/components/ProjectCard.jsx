/* eslint-disable react/prop-types */
import { TbWorldWww } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";

const Projects = ({ url, img, github, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h2 className="tracking-wide text-xl font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-relaxed">{text}</p>
        <div className="mt-4 flex gap-x-4 items-center">
          <a href={url} className="p-2 rounded-md bg-slate-800 text-white">
            Live Site
          </a>
          {/* <a href={github}>
            <FaGithubSquare className="social-link" />
  </a>*/}
        </div>
      </div>
    </article>
  );
};

export default Projects;
