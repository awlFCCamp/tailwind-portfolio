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
  { id: nanoid(), href: "#Contact", text: "contact" },
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
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "",
    github: "",
    title: "first project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "",
    github: "",
    title: "second project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "",
    github: "",
    title: "third project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];