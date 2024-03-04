import { FaHeart } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-[#2b2d42] text-white flex  flex-col items-center justify-center pb-2">
      <p className="flex gap-1 items-center">
        Coded with <FaHeart className="text-red-900" />
        by AngelaCodes
      </p>
      <div className="flex gap-x-4 mt-4">
        <a href="https://www.linkedin.com/in/angela-lee-texas/">
          <FaLinkedinIn className="social-link-small" />
        </a>
        <a href="https://github.com/awlFCCamp">
          <IoLogoGithub className="social-link-small" />
        </a>
        <a href="https://leetcode.com/angela13/">
          <SiLeetcode className="social-link-small" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
