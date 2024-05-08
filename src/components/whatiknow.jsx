import { SiHtml5, SiCss3, SiJavascript, SiTypescript } from "react-icons/si";
import {
  RiTailwindCssFill,
  RiBootstrapFill,
  RiReactjsFill,
  RiNextjsFill,
} from "react-icons/ri";
import { SiMysql, SiMongodb , SiExpress } from "react-icons/si";
import { FaGitAlt, FaGithub, FaLanguage } from "react-icons/fa";
import { FaWindows, FaLinux, FaUbuntu } from "react-icons/fa6";
import { FaPython, FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

const WhatIKnow = () => {

  const skills = [
    {
      name: "HTML",
      icon: <SiHtml5 />,
    },
    {
      name: "CSS",
      icon: <SiCss3 />,
    },
    {
      name: "Javascript",
      icon: <SiJavascript />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript />,
    },
    {
      name: "Tailwind",
      icon: <RiTailwindCssFill />,
    },
    {
      name: "Bootstrap",
      icon: <RiBootstrapFill />,
    },
    {
      name: "React JS",
      icon: <RiReactjsFill />,
    },
    {
      name: "Next JS",
      icon: <RiNextjsFill />,
    },
    {
      name: "NodeJS",
      icon: <FaNodeJs />,
    },
    {
      name: "ExpressJS",
      icon: <SiExpress />,
    },
    {
      name: "MySql",
      icon: <SiMysql />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "Github",
      icon: <FaGithub />,
    },
    {
      name: "Windows",
      icon: <FaWindows />,
    },
    {
      name: "Linux",
      icon: <FaLinux />,
    },
    // {
    //   name: "Ubuntu",
    //   icon: <FaUbuntu />,
    // },
    {
      name: "Python",
      icon: <FaPython />,
    },
    {
      name: "Basic C#",
      icon: "",
    },
    {
      name: "Basic Java",
      icon: <FaJava />,
    },
    {
      name: "Basic C++",
      icon: "",
    },
  ];

  return (
    <section className="px-10 mb-10 flex justify-center items-center w-full" id="skills">
      <div className="flex flex-col justify-center items-center gap-7 w-full lg:w-[80vw]">
        <h1 className="text-2xl md:text-3xl text-slate-200 font-medium self-start">
          What I Know
        </h1>
          <div className="flex flex-col justify-start items-center gap-3 rounded-md p-5 border-b-2 border-cyan-600 card">
            <div className="flex flex-wrap justify-start items-center gap-2 self-start">
              {skills.map((skill, index) => (
                <p
                  className="px-4 py-2 flex gap-1 text-slate-300 hover:text-cyan-600 font-medium rounded-md items-center transition ease-in-out cursor-pointer skill"
                  key={index}
                >
                  {skill.icon} {skill.name}
                </p>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
};

export default WhatIKnow;