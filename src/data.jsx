import { nanoid } from "nanoid";
import { FaJs, FaReact, FaNode, FaSass } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiSpring,
  SiJest,
  SiTailwindcss,
  SiPostgresql,
  SiRedux,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { FaJava, FaAws } from "react-icons/fa6";
import { TbBrandCypress } from "react-icons/tb";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#contact", text: "contact" },
  {
    /*{ id: nanoid(), href: "#blogs", text: "blogs" },
{ id: nanoid(), href: "#Contact", text: "contact" },*/
  },
];

export const skills = [
  {
    id: nanoid(),
    icon: <FaJs className="h-16 w-16 text-yellow-300" />,
  },
  {
    id: nanoid(),
    icon: <FaJava className="h-16 w-16 text-red-400" />,
  },
  {
    id: nanoid(),
    icon: <FaReact className="h-16 w-16 text-blue-300" />,
  },
  {
    id: nanoid(),
    icon: <SiRedux className="h-16 w-16 text-blue-300" />,
  },
  {
    id: nanoid(),
    icon: <SiNextdotjs className="h-16 w-16 text-[#2b2d42]" />,
  },
  {
    id: nanoid(),
    icon: <FaNode className="h-16 w-16 text-emerald-500" />,
  },
  {
    id: nanoid(),
    icon: <SiExpress className="h-16 w-16 text-[#2b2d42]" />,
  },
  {
    id: nanoid(),
    icon: <SiSpring className="h-16 w-16 text-green-400" />,
  },
  {
    id: nanoid(),
    icon: <DiMongodb className="h-16 w-16 text-emerald-500" />,
  },
  {
    id: nanoid(),
    icon: <GrMysql className="h-16 w-16 text-blue-300" />,
  },
  {
    id: nanoid(),
    icon: <SiPostgresql className="h-16 w-16 text-blue-400" />,
  },
  {
    id: nanoid(),
    icon: <SiTailwindcss className="h-16 w-16 text-blue-400" />,
  },
  {
    id: nanoid(),
    icon: <FaSass className="h-16 w-16 text-red-400" />,
  },
  {
    id: nanoid(),
    icon: <TbBrandCypress className="h-16 w-16 text-emerald-500" />,
  },
  {
    id: nanoid(),
    icon: <SiJest className="h-16 w-16 text-red-900" />,
  },
  {
    id: nanoid(),
    icon: <FaAws className="h-16 w-16 text-orange-400" />,
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://i.ibb.co/bNMwk9J/Screenshot-2024-02-06-at-11-49-52-AM.png",
    url: "https://ticketing-app-six.vercel.app/",
    github: "https://github.com/awlFCCamp/ticketing-app",
    title: "Ticketing App",
    text: "Fullstack app: Next13, MongoDB, Mongoose, tailwindCSS, Vercel",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/zR6rJgV/Screenshot-2024-02-28-at-10-46-28-AM.png",
    url: "https://discover-dishes.vercel.app/",
    github: "https://github.com/awlFCCamp/tailwind-portfolio",
    title: "Food Adventure",
    text: "React, context api, third-party api, tailwindCSS ",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/QMxgrpB/Screenshot-2024-02-06-at-10-30-30-AM.png",
    url: "https://angelacodes-countryexplorer.netlify.app/",
    github: "https://github.com/awlFCCamp/react-proj-5",
    title: "Country Explorer",
    text: "React, Redux, API",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/6myvfR9/Screenshot-2024-02-06-at-3-30-32-PM.png",
    url: "https://angelacodes-hackernews-react.netlify.app",
    github: "https://github.com/awlFCCamp",
    title: "Hacker News",
    text: "React, Context API, useReducer",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/X341n9x/Screenshot-2024-02-06-at-3-22-33-PM.png",
    url: "https://angelacodes-movie-watch.netlify.app",
    github: "https://github.com/awlFCCamp",
    title: "Movie Watch App",
    text: "React, Context API, OMDB and Auth0 API",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/ZXYCPNk/Screenshot-2024-02-06-at-3-34-44-PM.png",
    url: "https://angelacodesfem.netlify.app/",
    github: "https://github.com/awlFCCamp",
    title: "Frontend Mentor Challenges",
    text: "React, Vanilla JS, SCSS, HTML5",
  },
];
