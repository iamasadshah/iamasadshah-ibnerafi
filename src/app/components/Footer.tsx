import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row items-center justify-between bg-primary2 text-white py-6 px-10 -mt-2">
      {/* Pages Links */}
      <div>
        <p className="text-black text-center">
          Made with Code and Creativity By Asad Shah.
        </p>
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
