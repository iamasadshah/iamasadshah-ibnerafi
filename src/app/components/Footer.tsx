import React from "react";
import Link from "next/link";
import Image from "next/image";
import "animate.css";

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-6 lg:flex-row items-center justify-between bg-primary2 text-white py-6 px-10 -mt-2 z-10 lg:space-y-0">
      {/* Pages Links */}
      <div>
        <p className="text-black text-center flex text-sm md:text-lg md:font-semibold">
          Made with
          <Image
            src={"/heart.gif"}
            width={30}
            unoptimized
            height={30}
            alt="fork"
            className="mx-2 h-6 w-6 "
          />
          and Creativity By Asad Shah.
        </p>
      </div>

      <div className="flex space-x-16 text-black ">
        <Link
          href={"https://github.com/iamasadshah/iamasadshah-ibnerafi"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-xl"
        >
          <Image
            src={"/star.gif"}
            width={30}
            height={30}
            unoptimized
            alt="star"
            className="mx-1"
          />{" "}
          Star
        </Link>
        <Link
          href={"https://github.com/iamasadshah/iamasadshah-ibnerafi"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-xl"
        >
          <Image
            src={"/fork.gif"}
            width={30}
            height={30}
            unoptimized
            alt="fork"
          />
          Fork
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
