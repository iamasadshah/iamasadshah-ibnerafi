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
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/50 shadow-md" : "bg-primary2"
      }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left: Hamburger Menu */}
          <div>
            <button
              className="text-gray-900 focus:outline-none"
              onClick={toggleMenu}
            >
              <RiMenu3Fill size={28} />
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <span
                  className="text-4xl text-primary3"
                  style={{
                    fontFamily: "'Pacifico', cursive",
                    letterSpacing: "0.05em",
                  }}
                >
                  ibneRafi.
                </span>
              </div>
            </Link>
          </div>

          {/* Right: Hire Me Button */}
          <div>
            <Link href="/contact">
              <div className="relative inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm shadow-sm font-medium rounded-md shadow-gray-500 text-primary2 bg-primary3 transition-all duration-300 ease-in-out cursor-pointer hover:bg-transparent hover:ring-2 hover:ring-primary3">
                <span className="transition-transform duration-300 ease-in-out transform hover:rotate-360 hover:text-primary3">
                  Hire Me
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Sidebar Navigation */}
      <div
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-primary1  shadow-2xl shadow-primary1 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 ">
          <h2 className="text-lg font-semibold text-white flex flex-col justify-center items-center ">
            Navigation
          </h2>
          <button className="text-white" onClick={closeMenu}>
            <FiX size={24} />
          </button>
        </div>
        <nav className="space-y-4 px-4 flex flex-col justify-center items-center pt-6">
          <Link href="/about-me">
            <div
              className="large-screen-navigation text-nowrap"
              onClick={closeMenu}
            >
              About Me
            </div>
          </Link>
          <Link href="/services">
            <div className="large-screen-navigation" onClick={closeMenu}>
              Services
            </div>
          </Link>
          <Link href="/projects">
            <div className="large-screen-navigation" onClick={closeMenu}>
              Projects
            </div>
          </Link>
          <Link
            href="https://medium.com/@iamasadshah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="large-screen-navigation" onClick={closeMenu}>
              Blogs
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
