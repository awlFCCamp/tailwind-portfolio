import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-[#2b2d42] text-[#fff]">
      <div className="flex flex-col align-element py-4 sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 sm:justify-between">
        <h2 className="text-3xl font-bold">AngelaCodes</h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg hover:text-green-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
