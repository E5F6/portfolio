import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex md:grid md:grid-cols-1 flex-col-reverse md:justify-center justify-start items-center gap-10 px-10">
        <div className="col-span-1 flex flex-col justify-center items-center gap-1">
          <h1 className="text-6xl font-semibold text-cyan-600">
            Hi, I'm
          </h1>
          <h2 className="text-7xl font-bold text-center">Priyanshu</h2>
          <h3 className="text-4xl font-semibold text-slate-300">
            Full Stack Developer
          </h3>
          <p className="font-medium text-lg max-w-[500px]">
            I love to create websites using latest Technologies. I'm passionate
            about developing user-friendly interfaces and solving complex
            problems
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 mt-3">
            <a href="">
              {" "}
              <FaGithub className="text-3xl hover:text-cyan-700 cursor-pointer hover:translate-y-1" />
            </a>
            <a href="">
              {" "}
              <FaLinkedinIn className="text-3xl hover:text-cyan-700 cursor-pointer hover:translate-y-1" />
            </a>
            <a href="">
              {" "}
              <FaXTwitter className="text-3xl hover:text-cyan-700 cursor-pointer hover:translate-y-1" />
            </a>
            <a href="">
              {" "}
              <FaInstagram className="text-3xl hover:text-cyan-700 cursor-pointer hover:translate-y-1" />
            </a>
          </div>
        </div>
        {/* <div className="md:col-span-1 flex justify-center items-center">
          <img src="/hero.gif" alt="" className="rounded-full"/>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;