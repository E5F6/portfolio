import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      name: "Portfolio",
      description:
        " Portfolio is a sleek and modern portfolio website showcasing my skills and projects. It is built using Next.js for efficient server-side rendering and Tailwind CSS for responsive styling. With clean design and smooth navigation, Portfolio highlights my expertise in web development.",
      techUsed: "NextJS , Tailwind CSS",
      github: "",
      liveUrl: "https://priyanxhuportfolio.vercel.app/",
    },
    {
      name: "Multiple Links Page",
      description:
        "The Multiple Links Page is a handy tool for aggregating multiple links into a single, easily accessible page. This project leverages the power of Next.js and Tailwind CSS to create a minimalist and functional page for organizing various social media profiles.",
      techUsed: "NextJS , Tailwind CSS",
      github: "",
      liveUrl: "https://priyannxhuu.vercel.app/",
    },
    {
      name: "Weather App",
      description:
        "The Weather App provides real-time weather updates for locations worldwide. Built with Next.js and Tailwind CSS, this app delivers accurate weather information in a clean and intuitive interface. Users can quickly check current weather conditions, forecasts, and more.",
      techUsed: "NextJS , Tailwind CSS",
      github: "",
      liveUrl: "",
    },
  ];

  return (
    <section className="px-10 mb-10 flex justify-center items-center w-full" id="projects">
      <div className="flex flex-col justify-center items-center gap-7 w-full lg:w-[80vw]">
        <h1 className="text-2xl md:text-3xl text-slate-200 font-medium self-start">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start items-stretch gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-center gap-3 rounded-md p-5 max-w-[400px] border-b-2 border-cyan-600 card"
            >
              <h1 className="text-2xl text-slate-200 font-semibold self-start">
                {project.name}
              </h1>
              <h2 className="text-slate-300 font-medium">
                {project.description}
              </h2>
              <h3 className="text-slate-200 text-xl font-medium self-start">
                {project.techUsed}
              </h3>
              <div className="flex flex-wrap justify-start items-center gap-3 self-start">
                <Link
                  href={project.github}
                  className="p-3 text-2xl text-slate-300 hover:text-cyan-600 hover:translate-y-1 transition ease-in-out"
                >
                  <FaGithub />
                </Link>
                <Link
                  href={project.liveUrl}
                  className="p-3 text-2xl text-slate-300 hover:text-cyan-600 hover:translate-y-1 transition ease-in-out"
                >
                  <FaExternalLinkAlt />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;