import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import Lottie from "lottie-react";
import heroData from "../assets/heroAnimation.json";

const Hero = () => {
  const handleClick = () => {
    const pdfUrl = "resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "angelaResume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="bg-[#2b2d42] text-[#fff] py-24" id="home">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold">I am Angela</h1>
          <p className="capitalize text-3xl mt-4 ">
            A Frontend focused full-stack developer
          </p>
          <p className="text-lg capitalize mt-2">
            Using coding and coffee to solve problems one line at a time
          </p>
          <div>
            <div className="flex gap-x-4 mt-4">
              <a href="https://www.linkedin.com/in/angela-lee-texas/">
                <FaLinkedinIn className="social-link" />
              </a>
              <a href="https://github.com/awlFCCamp">
                <IoLogoGithub className="social-link" />
              </a>
              <a href="https://leetcode.com/angela13/">
                <SiLeetcode className="social-link" />
              </a>
            </div>
            <button
              className="mt-6 font-semibold bg-lime-700 p-2 rounded-md hover:bg-[#2b2d42] hover:border-2 hover:border-lime-700 hover:text-white"
              onClick={handleClick}
            >
              Download Resume
            </button>
          </div>
        </article>
        <article className="bg-[#fff] rounded-md hidden md:block">
          <Lottie
            animationData={heroData}
            className="w-full block object-cover h-96 "
          />
        </article>
      </div>
    </div>
  );
};

export default Hero;
