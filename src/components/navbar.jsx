"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Kalam } from "next/font/google";

const kalam = Kalam({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar w-full px-5 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-white text-3xl font-bold px-3">
          <h1 className={kalam.className}>Priyanshu</h1>
        </div>
        <div className="hidden lg:flex items-center justify-center gap-7 text-white font-semibold">
          <Link href="#">
            <p className="text-gray-300 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </p>
          </Link>
          <Link href="#">
            <p className="text-gray-300 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Projects
            </p>
          </Link>
          <Link href="#">
            <p className="text-gray-300 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Services
            </p>
          </Link>
          <Link href="#">
            <p className="text-gray-300 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </p>
          </Link>
          {/* GitHub button with GitHub icon */}
          <a
            href="https://github.com/yourgithub"
            className="text-black bg-white hover:bg-cyan-700 hover:text-white px-3 py-2 rounded-lg text-base font-medium flex items-center gap-2"
          >
            <FaGithub className="text-2xl" /> {/* Use FaGithub icon */}
            GitHub
          </a>
        </div>
        {/* Menu Icons */}
        <div className="flex lg:hidden">
          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center justify-center rounded-md text-white hover:text-white focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <img
                src="/menuicon.png"
                alt="Menu"
                className="block h-6 w-6" 
              />
            ) : (
              <img
                src="/closeicon.png"
                alt="Close"
                className="block h-6 w-6"
              />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-3 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#">
              <p className="text-gray-300 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </p>
            </Link>
            <Link href="#">
              <p className="text-gray-300 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Projects
              </p>
            </Link>
            <Link href="#">
              <p className="text-gray-300 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Services
              </p>
            </Link>
            <Link href="#">
              <p className="text-gray-300 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </p>
            </Link>
            {/* GitHub button with GitHub icon */}
            <div className="flex justify-between items-center w-full">
              <a
                href="https://github.com/yourgithub"
                className="text-black bg-white hover:bg-cyan-700 hover:text-white px-3 py-2 rounded-lg text-base font-medium flex items-center gap-2"
              >
                <FaGithub className="text-2xl" /> {/* Use FaGithub icon */}
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;