import { SiHtml5, SiCss3, SiJavascript, SiTypescript } from "react-icons/si";
import {
  RiTailwindCssFill,
  RiBootstrapFill,
  RiReactjsFill,
  RiNextjsFill,
} from "react-icons/ri";
import { SiMysql, SiMongodb } from "react-icons/si";
import { FaGitAlt, FaGithub, FaLanguage } from "react-icons/fa";
import { FaWindows, FaLinux, FaUbuntu } from "react-icons/fa6";
import { FaPython, FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

const WhatIKnow = () => {
  const frontends = [
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
  ];

  const frameworks = [
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
  ];

  const backends = [
    {
      name: "NodeJS",
      icon: <FaNodeJs />,
    },
  ];

  const databases = [
    {
      name: "MySql",
      icon: <SiMysql />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
  ];

  const versionControls = [
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "Github",
      icon: <FaGithub />,
    },
  ];

  const operatingSystems = [
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
  ];

  const languages = [
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start items-stretch gap-5">
          {/* Frontend */}
          <div className="flex flex-col justify-start items-center gap-3 rounded-md p-5 max-w-[400px] border-b-2 border-cyan-600 card">
            <h1 className="text-xl font-medium self-start text-slate-200">
              Frontend
            </h1>
            <div className="flex flex-wrap justify-start items-center gap-2 self-start">
              {frontends.map((frontend, index) => (
                <p
                  className="px-3 py-2 text-sm flex gap-1 text-slate-300 rounded-md items-center transition ease-in-out cursor-pointer skill"
                  key={index}
                >
                  {frontend.icon} {frontend.name}
                </p>
              ))}
            </div>
          </div>
          {/* Framework */}
          <div className="flex flex-col justify-start items-center gap-3 rounded-md p-5 max-w-[400px] border-b-2 border-cyan-600 card">
            <h1 className="text-xl font-medium self-start text-slate-200">
              Frameworks
            </h1>
            <div className="flex flex-wrap justify-start items-center gap-2 self-start">
              {frameworks.map((framework, index) => (
                <p
                  className="px-3 py-2 text-sm flex gap-1 text-slate-300 rounded-md items-center transition ease-in-out cursor-pointer skill"
                  key={index}
                >
                  {framework.icon} {framework.name}
                </p>
              ))}
            </div>
          </div>
          {/* Backend */}
          <div className="flex flex-col justify-start items-center gap-3 rounded-md p-5 max-w-[400px] border-b-2 border-cyan-600 card">
            <h1 className="text-xl font-medium self-start text-slate-200">
              Backend
            </h1>
            <div className="flex flex-wrap justify-start items-center gap-2 self-start">
              {backends.map((backend, index) => (
                <p
                  className="px-3 py-2 text-sm flex gap-1 text-slate-300 rounded-md items-center transition ease-in-out cursor-pointer skill"
                  key={index}
                >
                  {backend.icon} {backend.name}
                </p>
              ))}
            </div>
          </div>
          {/* Database */}
          <div className="flex flex-col justify-start items-center gap-3 rounded-md p-5 max-w-[400px] border-b-2 border-cyan-600 card">
            <h1 className="text-xl font-medium self-start text-slate-200">
              Database
            </h1>
            <div className="flex flex-wrap justify-start items-center gap-2 self-start">
              {databases.map((database, index) => (
                <p
                  className="px-3 py-2 text-sm flex gap-1 text-slate-300 rounded-md items-center transition ease-in-out cursor-pointer skill"
                  key={index}
                >
                  {database.icon} {database.name}
                </p>
              ))}
            </div>
          </div>
          {/* Version Control */}
          <div className="flex flex-col justify-start items-center gap-3 rounded-md p-5 max-w-[400px] border-b-2 border-cyan-600 card">
            <h1 className="text-xl font-medium self-start text-slate-200">
              Version Control
            </h1>
            <div className="flex flex-wrap justify-start items-center gap-2 self-start">
              {versionControls.map((versionControl, index) => (
                <p
                  className="px-3 py-2 text-sm flex gap-1 text-slate-300 rounded-md items-center transition ease-in-out cursor-pointer skill"
                  key={index}
                >
                  {versionControl.icon} {versionControl.name}
                </p>
              ))}
            </div>
          </div>
          {/* Operating System */}
          <div className="flex flex-col justify-start items-center gap-3 rounded-md p-5 max-w-[400px] border-b-2 border-cyan-600 card">
            <h1 className="text-xl font-medium self-start text-slate-200">
              Operating System
            </h1>
            <div className="flex flex-wrap justify-start items-center gap-2 self-start">
              {operatingSystems.map((operatingSystem, index) => (
                <p
                  className="px-3 py-2 text-sm flex gap-1 text-slate-300 rounded-md items-center transition ease-in-out cursor-pointer skill"
                  key={index}
                >
                  {operatingSystem.icon} {operatingSystem.name}
                </p>
              ))}
            </div>
          </div>
          {/* Languages */}
          <div className="flex flex-col justify-start items-center gap-3 rounded-md p-5 max-w-[400px] border-b-2 border-cyan-600 card">
            <h1 className="text-xl font-medium self-start text-slate-200">
              Languages
            </h1>
            <div className="flex flex-wrap justify-start items-center gap-2 self-start">
              {languages.map((language, index) => (
                <p
                  className="px-3 py-2 text-sm flex gap-1 text-slate-300 rounded-md items-center transition ease-in-out cursor-pointer skill"
                  key={index}
                >
                  {language.icon} {language.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIKnow;