"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);

  // Link animation variants
  const linkVariants = {
    hidden: (direction: string) => ({
      x: direction === "left" ? -200 : 200,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (direction: string) => ({
      x: direction === "left" ? -200 : 200,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" },
    }),
  };

  return (
    <header>
      {/* Navbar container */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 bg-primary2">
        <div className="hidden md:flex justify-between items-center py-4 relative">
          {/* Hamburger Menu Icon */}
          <div className="flex-shrink-0">
            <button
              className="text-gray-900 focus:outline-none"
              onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
            >
              {desktopMenuOpen ? <FiX size={28} /> : <RiMenu3Fill size={28} />}
            </button>
          </div>

          {/* Logo Section */}
          <div className="flex-shrink-0 text-center">
            <Link href="/">
              <div className="flex items-center justify-center cursor-pointer">
                <span className="ml-2 text-4xl font-bold text-primary3">
                  IbneRafi.
                </span>
              </div>
            </Link>
          </div>

          {/* Hire Me Button */}
          <div>
            <Link href="/contact">
              <div className="relative inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm shadow-sm font-medium rounded-md shadow-gray-500 text-primary2 bg-primary3 transition-all duration-300 ease-in-out cursor-pointer hover:bg-transparent hover:ring-2 hover:ring-primary3">
                <span className="transition-transform duration-300 ease-in-out transform hover:rotate-360 hover:text-primary3">
                  Let&apos;s Connect
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Large Screen Fullscreen Menu */}
        <AnimatePresence>
          {desktopMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-primary2 bg-opacity-80 backdrop-blur-lg z-50 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                className="absolute top-6 right-6 text-gray-900 focus:outline-none"
                onClick={() => setDesktopMenuOpen(false)}
              >
                <FiX size={36} />
              </button>
              <motion.nav
                className="flex flex-col items-center space-y-6 text-2xl font-semibold"
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {[
                  { href: "/about-me", label: "About Me", direction: "left" },
                  { href: "/services", label: "Services", direction: "right" },
                  { href: "/projects", label: "Projects", direction: "left" },
                  {
                    href: "https://medium.com/@iamasadshah",
                    label: "Blogs",
                    direction: "right",
                    external: true,
                  },
                ].map((link, index) => (
                  <motion.div
                    key={index}
                    variants={linkVariants}
                    custom={link.direction}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ delay: index * 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setDesktopMenuOpen(false)}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="relative group hover:text-primary3"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navbar */}
        <div className="md:hidden flex justify-between items-center py-4">
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

          {/* Mobile Menu Button */}
          <button
            className="text-gray-900 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={28} /> : <RiMenu3Fill size={28} />}
          </button>
        </div>

        {/* Mobile Menu with sliding from bottom to top */}
        <div
          className={`md:hidden transition-all duration-700 ease-in-out overflow-hidden bg-primary2 ${
            menuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <nav className="space-y-4 px-2 pt-2 pb-3">
            <Link href="/about-me" onClick={() => setMenuOpen(false)}>
              <div
                className={`block text-gray-900 hover:text-primary1 transform transition duration-700 ${
                  menuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                About Me
              </div>
            </Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>
              <div
                className={`block text-gray-900 hover:text-primary1 transform transition duration-700 ${
                  menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                Services
              </div>
            </Link>
            <Link href="/projects" onClick={() => setMenuOpen(false)}>
              <div
                className={`block text-gray-900 hover:text-primary1 transform transition duration-700 ${
                  menuOpen ? "-translate-x-0" : "-translate-x-full"
                }`}
              >
                Projects
              </div>
            </Link>
            <Link
              href="https://medium.com/@iamasadshah"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
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
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <div className="block w-full text-center py-2 px-4 rounded-md bg-primary1 text-white cursor-pointer">
                Hire Me
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
