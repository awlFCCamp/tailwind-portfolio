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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            unde quisquam quis magni, repellat cumque neque repudiandae a
            mollitia? Ad quas accusantium autem fugit quam quasi delectus
            necessitatibus laboriosam cupiditate vitae. Maxime illo ratione
            debitis asperiores iure odio, hic enim laborum dignissimos! Porro
            ipsam inventore animi molestias voluptatem ducimus omnis corporis
            reiciendis corrupti totam vero architecto nostrum dolorum nam
            officia tenetur, maxime dolores amet cum id itaque at fuga esse.
            Harum magnam fuga qui itaque dignissimos voluptatibus cupiditate
            provident, eaque enim, nemo vel laborum hic culpa laboriosam porro.
            Eaque deleniti tempora harum voluptatem ducimus veritatis quia sed!
            Ab, assumenda rerum.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
