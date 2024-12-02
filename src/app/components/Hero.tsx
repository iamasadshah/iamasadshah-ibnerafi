"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaHackerrank, FaMedium, FaLinkedin } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Text Animation on Scroll
    if (textRef.current) {
      const childrenArray = Array.from(textRef.current.children);

      gsap.fromTo(
        childrenArray,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    }

    // Hero Image animation on scroll
    if (heroImageRef.current) {
      gsap.fromTo(
        heroImageRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 1,
          x: 500,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: buttonsRef.current,
            start: "top center",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    // Buttons Hide on Scroll Down
    if (buttonsRef.current) {
      gsap.fromTo(
        buttonsRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: 150,
          duration: 3.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: buttonsRef.current,
            start: "top center",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    // Parallax Scrolling Effect for Background

    // Cleanup on unmount
  }, []);

  return (
    <div className="lg:flex lg:pr-6 h-screen Hero-container bg-primary2 relative overflow-hidden md:h-[1050px] lg:h-screen">
      {/* Image Section */}
      <div className="Image-Div flex flex-col justify-center items-center px-4 relative h-[50vh] lg:h-full lg:basis-[60%] order-first lg:order-last pt-10 py-36 mt-10 md:py-16 ">
        {/* Hero Image */}
        <Image
          ref={heroImageRef}
          src="/iamasadshah.png"
          alt="Hero-Image"
          height={400}
          width={400}
          className="object-contain z-10 w-[300px] h-[500px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]  lg:w-[450px] lg:h-[450px] shadow-lg shadow-primary1 rounded-full"
        />
      </div>

      {/* Text Section */}
      <div
        ref={textRef}
        className="flex flex-col justify-center  md:pl-14 px-4 h-[50vh] lg:h-full leading-[2.5rem] lg:leading-[3.5rem]"
      >
        <p className="text-lg sm:text-xl">Hello, My Name is Asad Shah.</p>
        <h1 className="text-[30px] sm:text-[35px] md:text-[45px] font-semibold leading-9 sm:leading-10 md:leading-[3.5rem]">
          I&apos;m a Professional Software Developer.
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-black lg:pr-52">
          Who said coding can&apos;t be fun? <br /> Let&apos;s build something
          awesome!
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 lg:space-x-6 snake-animation pt-6">
          <Link
            href="https://github.com/iamasadshah"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary1 hover:bg-white transition duration-500"
          >
            <FaGithub size={30} className="animate-snake" />
          </Link>
          <Link
            href="https://www.hackerrank.com/profile/asadibnerafi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary1 hover:bg-[#08EB68] transition duration-500"
          >
            <FaHackerrank size={30} className="animate-snake delay-100" />
          </Link>
          <Link
            href="https://www.upwork.com/freelancers/~0151539c3fe76e8c72?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary1 hover:bg-[#14A800] transition duration-500"
          >
            <FaUpwork size={30} className="animate-snake delay-200" />
          </Link>
          <Link
            href="https://medium.com/@ibnerafi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary1 hover:bg-[#080808] transition duration-500"
          >
            <FaMedium
              size={30}
              className="animate-snake delay-300 hover:text-white"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/iamasadshah/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary1 hover:bg-[#0A66C2] transition duration-500"
          >
            <FaLinkedin
              size={30}
              className="animate-snake delay-400 hover:text-white"
            />
          </Link>
        </div>

        <div
          ref={buttonsRef}
          className="flex justify-center items-center space-x-4 mt-4 lg:justify-start pt-6"
        >
          {/* Hire Me Button */}
          <button className="inline-flex items-center px-6 py-2 border border-transparent text-sm shadow-md font-medium rounded-md shadow-gray-500 text-white bg-primary1 hover:bg-transparent cursor-pointer transition-all duration-300 hover:text-primary3 hover:ring-2 hover:ring-primary3 md:text-lg md:px-10 lg:px-7">
            <Link href="/contact">Contact me</Link>
          </button>

          {/* Portfolio Button */}
          <button className="inline-flex items-center px-6 py-2 border border-transparent text-sm shadow-md font-medium rounded-md shadow-gray-500 text-primary1 bg-transparent cursor-pointer transition-all duration-300 hover:text-primary3 hover:ring-primary3 ring-2 ring-primary1 md:text-lg md:px-10 lg:px-7">
            <Link
              href="#"
              className="relative inline-flex items-center text-lg text-black hover:text-blue-600"
            >
              Get Resume
              <span className="ml-2 inline-block animate-bounce-slow">📥</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
