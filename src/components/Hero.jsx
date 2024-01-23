import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import Lottie from "lottie-react";
import heroData from "../assets/heroAnimation.json";

const Hero = () => {
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
          <div className="flex gap-x-4 mt-4">
            <a href="">
              <FaLinkedinIn className="social-link" />
            </a>
            <a href="">
              <IoLogoGithub className="social-link" />
            </a>
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
