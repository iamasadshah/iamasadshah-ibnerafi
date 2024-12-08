"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu animation variants
  const mobileMenuVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      y: "100%",
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary2/80 backdrop-blur-md shadow-md shadow-primary1"
          : "bg-primary2"
      }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-between items-center py-4">
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
                <span className="ml-2 text-4xl font-bold text-primary3 tracking-widest hover:ring-2 hover:ring-primary3 px-7 rounded-lg duration-200">
                  ASAD SHAH
                </span>
              </div>
            </Link>
          </div>

          {/* Hire Me Button */}
          <div>
            <Link href="/contact">
              <div className="relative inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm shadow-sm font-medium rounded-md shadow-gray-500 text-primary2 bg-primary3 transition-all duration-300 ease-in-out cursor-pointer hover:bg-transparent hover:ring-2 hover:ring-primary3 hover:shadow-lg hover:shadow-primary1">
                <span className="transition-transform ease-in-out transform hover:rotate-360 hover:text-primary3">
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
              className="fixed inset-0 h-screen bg-primary2 bg-opacity-90 backdrop-blur-2xl z-50 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                className="absolute top-4 left-6 text-gray-900 focus:outline-none"
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
                  { href: "/about-me", label: "About Me" },
                  { href: "/services", label: "Services" },
                  { href: "/projects", label: "Projects" },
                  {
                    href: "https://medium.com/@iamasadshah",
                    label: "Blogs",
                    external: true,
                  },
                ].map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={() => setDesktopMenuOpen(false)}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="relative group hover:text-primary3"
                  >
                    {link.label}
                  </Link>
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
                <span className="ml-2 text-4xl font-bold text-primary3 tracking-widest hover:ring-2 hover:ring-primary3 px-7 rounded-lg duration-200">
                  IBNERAFI.
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 h-screen bg-primary2 bg-opacity-90 backdrop-blur-md z-50"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                className="absolute top-6 right-6 text-gray-900 focus:outline-none"
                onClick={() => setMenuOpen(false)}
              >
                <FiX size={36} />
              </button>
              <motion.nav
                className="flex flex-col items-center justify-center h-full space-y-6 text-2xl font-semibold"
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {[
                  { href: "/about-me", label: "About Me" },
                  { href: "/services", label: "Services" },
                  { href: "/projects", label: "Projects" },
                  {
                    href: "https://medium.com/@iamasadshah",
                    label: "Blogs",
                    external: true,
                  },
                ].map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="relative group hover:text-primary3"
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.nav>
              <div>
                <Link href="/contact">
                  <div className="block w-full text-center py-2 px-4 rounded-md bg-primary1 text-white cursor-pointer hover:bg-primary3">
                    Let&apos;s Connect
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
