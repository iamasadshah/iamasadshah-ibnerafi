"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to toggle background blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/50 shadow-md" : "bg-primary2"
      }`}
    >
      {/* Navbar container */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <span className="ml-2 text-4xl font-bold text-primary3">
                  ibneRafi.
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Links for larger screens */}
          <nav className="hidden md:flex space-x-8 font-semibold">
            <Link href="/about-me" className="relative text-gray-900 group">
              <span className="transition-colors duration-300 ease-in-out hover:text-primary3">
                About Me
              </span>
            </Link>
            <Link href="/services" className="relative text-gray-900 group">
              <span className="transition-colors duration-300 ease-in-out hover:text-primary3">
                Services
              </span>
            </Link>
            <Link href="/projects" className="relative text-gray-900 group">
              <span className="transition-colors duration-300 ease-in-out hover:text-primary3">
                Projects
              </span>
            </Link>
            <Link
              href="https://medium.com/@iamasadshah"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-gray-900 group"
            >
              <span className="transition-colors duration-300 ease-in-out hover:text-primary3">
                Blogs
              </span>
            </Link>
          </nav>

          {/* Hire Me Button for larger screens */}
          <div className="hidden md:block">
            <Link href="/contact">
              <div className="relative inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm shadow-sm font-medium rounded-md shadow-gray-500 text-primary2 bg-primary3 transition-all duration-300 ease-in-out cursor-pointer hover:bg-transparent hover:ring-2 hover:ring-primary3">
                <span className="transition-transform duration-300 ease-in-out transform hover:rotate-360 hover:text-primary3">
                  Hire Me
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ">
            <button
              className="text-gray-900 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX size={28} /> : <RiMenu3Fill size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-700 ease-in-out overflow-hidden bg-primary2 ${
          menuOpen ? "max-h-screen " : "max-h-0"
        }`}
      >
        <nav className="space-y-4 px-2 pt-2 pb-3">
          <Link href="/about-me" onClick={handleLinkClick}>
            <div className="block text-gray-900 hover:text-primary1">
              About Me
            </div>
          </Link>
          <Link href="/services" onClick={handleLinkClick}>
            <div className="block text-gray-900 hover:text-primary1">
              Services
            </div>
          </Link>
          <Link href="/projects" onClick={handleLinkClick}>
            <div className="block text-gray-900 hover:text-primary1">
              Projects
            </div>
          </Link>
          <Link
            href="https://medium.com/@iamasadshah"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
          >
            <div className="block text-gray-900 hover:text-primary1">Blogs</div>
          </Link>
        </nav>
        <div className="px-2 pb-3">
          <Link href="/contact" onClick={handleLinkClick}>
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
