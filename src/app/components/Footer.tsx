import React from "react";
import Link from "next/link";
import Image from "next/image";
import "animate.css";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row items-center justify-between bg-primary2 text-white py-6 px-10 -mt-2 z-10">
      {/* Pages Links */}
      <div>
        <p className="text-black text-center font-semibold">
          Made with
          <span className=" text-red-500 text-2xl animate__animated animate__bounce mx-1">
            ♥
          </span>
          and Creativity By Asad Shah.
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
        <Link
          href={"https://github.com/iamasadshah/iamasadshah-ibnerafi"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-lg"
        >
          <Image src={"/fork.ico"} width={30} height={30} alt="fork" />
          Fork
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
