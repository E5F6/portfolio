import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Hero = () => {
  const links = [
    {
      icon: <FaGithub />,
      url: "",
    },
    {
      icon: <FaLinkedinIn />,
      url: "",
    },
    {
      icon: <FaXTwitter />,
      url: "",
    },
  ];

  return (
    <main className="px-10 mt-20 mb-20 md:mt-40 md:mb-40 flex justify-center items-center">
      <div className="grid grid-cols-1 gap-5 justify-around items-center">
        <div className="flex flex-col col-span-1 justify-start items-center gap-4">
          <p className="text-2xl md:text-4xl font-medium text-cyan-600 self-start">
            Hi There I&apos;m
          </p>
          <h1 className="font-semibold text-5xl md:text-7xl text-slate-200 self-start">
            Priyanshu Chahar
          </h1>
          <h2 className="font-medium text-3xl md:text-5xl text-slate-300 self-start">
            FullStack Developer
          </h2>
          <p className="max-w-[500px] lg:max-w-[750px] text-xl lg:text-3xl text-slate-400 self-start font-medium">
            I&apos;m a passionate full-stack developer with expertise in building
            modern, scalable, and user-friendly web applications.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-7">
            <a
              href=""
              className="px-4 py-2 text-slate-200 border-2 border-cyan-600 bg-transparent hover:bg-cyan-600 rounded-full font-medium text-xl transition ease-in"
            >
              View My Work
            </a>
            <a
              href="https://priyannxhuu.vercel.app"
              target="blank"
              className="px-4 py-2 text-slate-200 border-2 border-cyan-600 bg-transparent hover:bg-cyan-600 rounded-full font-medium text-xl transition ease-in"
            >
              More Links
            </a>
          </div>
          <div className="flex justify-center items-center gap-5 px-7 py-3 rounded-full mt-3 links">
            {links.map((link, index) => (
              <Link href={link.url} key={index} className="text-2xl md:text-4xl text-slate-300 hover:text-cyan-600 hover:translate-y-1 transition ease-out">
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
