import React from "react";
import { FaGithub, FaHackerrank, FaMedium, FaLinkedin } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row items-center justify-between bg-primary2 text-white py-6 -mt-1 px-10">
      {/* Pages Links */}
      <div className="flex space-x-6 mb-4 lg:mb-0 lg:space-x-10">
        <a
          href="#about"
          className="text-sm lg:text-lg hover:text-primary transition duration-300"
        >
          About
        </a>
        <a
          href="#services"
          className="text-sm lg:text-lg hover:text-primary transition duration-300"
        >
          Services
        </a>
        <a
          href="#portfolio"
          className="text-sm lg:text-lg hover:text-primary transition duration-300"
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className="text-sm lg:text-lg hover:text-primary transition duration-300"
        >
          Contact
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4 lg:space-x-6">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-800 hover:bg-primary transition duration-500 transform hover:scale-110"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://hackerrank.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-800 hover:bg-primary transition duration-500 transform hover:scale-110"
        >
          <FaHackerrank size={24} />
        </a>
        <a
          href="https://upwork.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-800 hover:bg-primary transition duration-500 transform hover:scale-110"
        >
          <FaUpwork size={24} />
        </a>
        <a
          href="https://medium.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-800 hover:bg-primary transition duration-500 transform hover:scale-110"
        >
          <FaMedium size={24} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-800 hover:bg-primary transition duration-500 transform hover:scale-110"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
