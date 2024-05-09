const About = () => {
  return (
    <section
      className="px-10 mb-10 flex justify-center items-center w-full"
      id="about"
    >
      <div className="flex flex-col justify-center items-center gap-7 w-full lg:w-[80vw]">
        <h1 className="text-2xl md:text-3xl text-slate-200 font-medium self-start">
          About Me
        </h1>
        <div className="flex justify-start items-center gap-3 px-5 py-5 rounded-md w-full card">
          <div className="col-span-1 flex flex-col justify-start items-center gap-3">
            <p className="text-slate-300 font-medium self-start">
              My name is Priyanshu Chahar and I&apos;m a computer science student
              with a passion for programming. I&apos;m deeply interested in web
              development and enjoy exploring new technologies to build
              innovative solutions.
            </p>
            <p className="text-slate-300 font-medium self-start">
              As a full stack developer, I&apos;m proficient in HTML, CSS,
              JavaScript, TypeScript, Tailwind CSS, Bootstrap, React.js,
              Next.js, and Node.js. I&apos;m always eager to expand my skill set and
              learn new technologies to stay updated with industry trends.
            </p>
            <p className="text-slate-300 font-medium self-start">
              Outside of programming, I enjoy spending my free time on hobbies
              like coding personal projects. I find joy in solving complex
              problems and turning ideas into reality through code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
