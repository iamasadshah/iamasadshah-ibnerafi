import React from "react";
import Link from "next/link";
import Image from "next/image";

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
      <div className="flex space-x-16 text-black">
        <Link
          href={"https://github.com/iamasadshah/iamasadshah-ibnerafi"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-lg"
        >
          ★ Star
        </Link>
        <Link href={"/"} className="flex text-lg">
          <Image src={"/fork.ico"} width={30} height={30} alt="fork" />
          Fork
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
