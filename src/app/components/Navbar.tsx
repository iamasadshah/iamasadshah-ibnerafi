"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      {/* Navbar container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <span className="ml-2 text-4xl font-bold text-primary1">
                  ibneRafi.
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Links for larger screens */}
          <nav className="hidden md:flex space-x-8 font-semibold">
            <Link href="#about" className="relative text-gray-900 group">
              <span className="transition-colors duration-300 ease-in-out hover:text-primary1">
                About Us
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary1 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </Link>
            <Link href="#services" className="relative text-gray-900 group">
              <span className="transition-colors duration-300 ease-in-out hover:text-primary1">
                Services
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary1 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </Link>
            <Link href="#projects" className="relative text-gray-900 group">
              <span className="transition-colors duration-300 ease-in-out hover:text-primary1">
                Projects
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary1 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </Link>
            <Link href="#blogs" className="relative text-gray-900 group">
              <span className="transition-colors duration-300 ease-in-out hover:text-primary1">
                Blogs
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary1 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </Link>
          </nav>

          {/* Hire Me Button for larger screens */}
          <div className="hidden md:block">
            <Link href="#contact">
              <div className="relative inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm shadow-sm font-medium rounded-md shadow-gray-500 text-white bg-primary1 transition-all duration-300 ease-in-out cursor-pointer hover:bg-transparent hover:text-primary1">
                <span className="transition-transform duration-300 ease-in-out transform hover:rotate-360">
                  Hire Me
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ">
            <button
              className="text-gray-900 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)} // Toggle menu state
            >
              {menuOpen ? <FiX size={28} /> : <RiMenu3Fill size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with sliding from button to top */}
      <div
        className={`md:hidden transition-all duration-700 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="space-y-4 px-2 pt-2 pb-3">
          {/* Each link has its own animation */}
          <Link href="#about">
            <div
              className={`block text-gray-900 hover:text-primary1 transform transition duration-700 ${
                menuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              About Us
            </div>
          </Link>
          <Link href="#services">
            <div
              className={`block text-gray-900 hover:text-primary1 transform transition duration-700 ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              Services
            </div>
          </Link>
          <Link href="#projects">
            <div
              className={`block text-gray-900 hover:text-primary1 transform transition duration-700 ${
                menuOpen ? "-translate-x-0" : "-translate-x-full"
              }`}
            >
              Projects
            </div>
          </Link>
          <Link href="#blogs">
            <div
              className={`block text-gray-900 hover:text-primary1 transform transition duration-700 ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              Blogs
            </div>
          </Link>
        </nav>
        <div
          className={`px-2 pb-3 transition duration-700 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Hire Me with fade-in effect */}
          <Link href="#contact">
            <div className="block w-full text-center py-2 px-4 rounded-md bg-primary1 text-white cursor-pointer">
              Hire Me
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
