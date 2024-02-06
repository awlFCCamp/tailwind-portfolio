import SectionTitle from "./SectionTitle";
import Lottie from "lottie-react";
import aboutData from "../assets/aboutAnimation.json";
const About = () => {
  return (
    <section className="bg-slate-950 py-20" id="about">
      <div className="grid md:grid-cols-2 items-center gap-16 align-element">
        <article className="bg-[#fff] rounded-md hidden md:block">
          <Lottie
            animationData={aboutData}
            className="w-full block object-cover h-96 "
          />
        </article>
        <article>
          <h2 className="text-5xl text-center font-bold capitalize text-[#fff] mb-3">
            About me
          </h2>
          <p className="text-lg text-[#fff]">
            As an ex-chemical engineer turned frontend-focused full-stack
            developer, I bring a unique blend of analytical thinking and
            technical skills to my work. With a strong foundation in React and
            Next.js, I excel in building dynamic and responsive user interfaces.
            Whether it's leveraging Express or Java for backend development, I
            am adept at creating robust and scalable solutions. My AWS Certified
            Cloud Practitioner (CCP) certificate further enhances my ability to
            design and deploy cloud-based applications efficiently. I am
            passionate about leveraging technology to solve complex problems and
            deliver exceptional user experiences.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
