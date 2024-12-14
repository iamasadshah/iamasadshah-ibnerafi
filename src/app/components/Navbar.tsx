"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { gsap } from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const desktopNavRef = useRef<HTMLDivElement | null>(null);
  const mobileNavRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop menu animations
  useEffect(() => {
    if (desktopMenuOpen && desktopNavRef.current) {
      const items = desktopNavRef.current.querySelectorAll(".menu-item");
      gsap.fromTo(
        items,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" }
      );
    }
  }, [desktopMenuOpen]);

  const animateCloseDesktopMenu = () => {
    if (desktopNavRef.current) {
      const items = desktopNavRef.current.querySelectorAll(".menu-item");
      gsap.to(items, {
        y: 50,
        opacity: 0,
        duration: 0.4,
        stagger: -0.1,
        ease: "power3.in",
        onComplete: () => setDesktopMenuOpen(false),
      });
    } else {
      setDesktopMenuOpen(false);
    }
  };

  // Mobile menu animations
  useEffect(() => {
    if (menuOpen && mobileNavRef.current) {
      const items = mobileNavRef.current.querySelectorAll(".menu-item");
      gsap.fromTo(
        items,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" }
      );
    }
  }, [menuOpen]);

  const animateCloseMobileMenu = () => {
    if (mobileNavRef.current) {
      const items = mobileNavRef.current.querySelectorAll(".menu-item");
      gsap.to(items, {
        x: -50,
        opacity: 0,
        duration: 0.4,
        stagger: -0.1,
        ease: "power3.in",
        onComplete: () => setMenuOpen(false),
      });
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary2/80 backdrop-blur-md shadow-md shadow-primary1"
          : ""
      }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-between items-center py-4">
          {/* Hamburger Menu Icon */}
          <button
            className="text-gray-900 focus:outline-none"
            onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
          >
            {desktopMenuOpen ? <FiX size={28} /> : <RiMenu3Fill size={28} />}
          </button>

          {/* Logo */}
          <Link href="/">
            <span className="ml-2 text-4xl font-bold text-primary3 tracking-widest hover:ring-2 hover:ring-primary3 px-7 rounded-lg duration-200">
              ASAD SHAH
            </span>
          </Link>

          {/* Hire Me */}
          <Link href="/contact">
            <div className="relative px-6 py-2 bg-primary3 text-white rounded-md hover:bg-transparent hover:ring-2 hover:ring-primary3">
              Let&apos;s Connect
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        {desktopMenuOpen && (
          <div
            className="fixed inset-0 h-screen bg-primary2 bg-opacity-90 z-50 flex justify-center items-center"
            ref={desktopNavRef}
          >
            <button
              className="absolute top-4 left-6 text-gray-900"
              onClick={animateCloseDesktopMenu}
            >
              <FiX size={36} />
            </button>
            <nav className="flex flex-col items-center space-y-20">
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
                  target={link.external ? "_blank" : "_self"}
                  className="menu-item text-xl font-semibold tracking-wider"
                  onClick={animateCloseDesktopMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* Mobile Navbar */}
        <div className="md:hidden flex justify-between items-center py-4">
          <Link href="/">
            <span className="text-4xl font-bold text-primary3 tracking-widest hover:ring-2 hover:ring-primary3 px-7 rounded-lg duration-200">
              ASAD SHAH
            </span>
          </Link>
          <button
            className="text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={28} /> : <RiMenu3Fill size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="fixed inset-0 h-screen bg-primary2 bg-opacity-90 z-50"
            ref={mobileNavRef}
          >
            <button
              className="absolute top-6 right-6 text-gray-900"
              onClick={animateCloseMobileMenu}
            >
              <FiX size={36} />
            </button>
            <nav className="flex flex-col items-center justify-center h-full">
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
                  target={link.external ? "_blank" : "_self"}
                  className="menu-item text-2xl font-semibold"
                  onClick={animateCloseMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact">
                <div className="mt-8 px-6 py-2 bg-primary1 text-white rounded-md">
                  Let&apos;s Connect
                </div>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
