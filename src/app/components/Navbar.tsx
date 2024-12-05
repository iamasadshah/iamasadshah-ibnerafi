"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // For desktop menu
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
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Hamburger Menu */}
          <div className="md:block">
            <button
              className="text-gray-900 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX size={28} /> : <RiMenu3Fill size={28} />}
            </button>
          </div>

          {/* Logo at the Center */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <span className="ml-2 text-4xl font-bold text-primary3">
                  ibneRafi.
                </span>
              </div>
            </Link>
          </div>

          {/* Hire Me Button on the Right */}
          <div className="hidden md:block">
            <Link href="/contact">
              <div className="relative inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm shadow-sm font-medium rounded-md shadow-gray-500 text-primary2 bg-primary3 transition-all duration-300 ease-in-out cursor-pointer hover:bg-transparent hover:ring-2 hover:ring-primary3 hover:shadow-lg hover:shadow-primary3">
                <span className="transition-transform duration-300 ease-in-out transform  hover:text-primary3 ">
                  Let&apos;s Connect
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Background Blur Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Navigation Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-primary1 transform transition-transform duration-500 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(false)}
        >
          <FiX />
        </button>

        <nav className="flex flex-col space-y-6 mt-16 px-6 text-center">
          <Link href="/about-me" onClick={handleLinkClick}>
            <div className="relative text-white text-lg font-medium group cursor-pointer">
              About Me
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </Link>
          <Link href="/services" onClick={handleLinkClick}>
            <div className="relative text-white text-lg font-medium group cursor-pointer">
              Services
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </Link>
          <Link href="/projects" onClick={handleLinkClick}>
            <div className="relative text-white text-lg font-medium group cursor-pointer">
              Projects
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </Link>
          <Link
            href="https://medium.com/@iamasadshah"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
          >
            <div className="relative text-white text-lg font-medium group cursor-pointer">
              Blogs
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
