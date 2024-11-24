import React from "react";
import { FaGithub, FaHackerrank, FaMedium, FaLinkedin } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row items-center justify-between bg-primary2 text-white py-6 -mt-1 px-10">
      {/* Pages Links */}
      <div className="flex space-x-6 mb-4 lg:mb-0 lg:space-x-10">
        <Link
          href="#about"
          className="text-sm lg:text-lg hover:text-primary transition duration-300"
        >
          About
        </Link>
        <Link
          href="#services"
          className="text-sm lg:text-lg hover:text-primary transition duration-300"
        >
          Services
        </Link>
        <Link
          href="#portfolio"
          className="text-sm lg:text-lg hover:text-primary transition duration-300"
        >
          Portfolio
        </Link>
        <Link
          href="#contact"
          className="text-sm lg:text-lg hover:text-primary transition duration-300"
        >
          Contact
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4 lg:space-x-6 snake-animation">
        <Link
          href="https://github.com/iamasadshah"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-800 hover:bg-primary transition duration-500"
        >
          <FaGithub size={24} className="animate-snake" />
        </Link>
        <Link
          href="https://www.hackerrank.com/profile/asadibnerafi"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-800 hover:bg-primary transition duration-500"
        >
          <FaHackerrank size={24} className="animate-snake delay-100" />
        </Link>
        <Link
          href="https://www.upwork.com/freelancers/~0151539c3fe76e8c72?mp_source=share"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-800 hover:bg-primary transition duration-500"
        >
          <FaUpwork size={24} className="animate-snake delay-200" />
        </Link>
        <Link
          href="https://medium.com/@ibnerafi"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-800 hover:bg-primary transition duration-500"
        >
          <FaMedium size={24} className="animate-snake delay-300" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/iamasadshah/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-800 hover:bg-primary transition duration-500"
        >
          <FaLinkedin size={24} className="animate-snake delay-400" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
