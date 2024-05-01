"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { Kalam } from "next/font/google";

const kalam = Kalam({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      name: "Home",
      url: "",
    },
    {
      name: "Services",
      url: "",
    },
    {
      name: "Projects",
      url: "",
    },
    {
      name: "About",
      url: "",
    },
  ];

  return (
    <nav className="w-full px-5 py-3 navbar flex flex-col justify-center items-center">
      <div className="flex items-center justify-between w-full lg:w-[80vw]">
        {/* Logo */}
        <div className="flex items-center text-white text-3xl font-bold px-3">
          <h1 className={kalam.className}>Priyanshu</h1>
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-center items-center gap-5 text-white">
          {menuItems.map((menuItems, index) => (
            <Link
              href={menuItems.url}
              className="hover:bg-cyan-600 cursor-pointer px-4 py-2 font-medium rounded-md transition ease-in"
              key={index}
            >
              {menuItems.name}
            </Link>
          ))}
        </div>
        {/* Menu Icons */}
        <div className="flex lg:hidden">
          <button
            className="inline-flex items-center justify-center rounded-md text-white focus:outline-none"
            onClick={toggleNavbar}
            type="button"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={36}
                height={36}
                color={"#ffffff"}
                fill={"none"}
              >
                <path
                  d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={36}
                height={36}
                color={"#ffffff"}
                fill={"none"}
              >
                <path
                  d="M10 5L20 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12L20 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 19L14 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex lg:hidden flex-col justify-center items-center gap-5 mt-3 mb-3 self-start">
          {menuItems.map((menuItems, index) => (
            <Link
              href={menuItems.url}
              key={index}
              className="text-white hover:bg-cyan-600 w-full cursor-pointer px-4 py-2 font-medium rounded-md self-start transition ease-in"
            >
              {menuItems.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;