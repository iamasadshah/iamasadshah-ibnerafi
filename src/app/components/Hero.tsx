"use client";
import "animate.css";
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
          x: -299,
          duration: 9.5,
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
  }, []);

  return (
    <div className="lg:flex lg:pr-6 min-h-screen bg-primary2 Hero-container relative overflow-hidden pt-10 md:pt-32 pb-8 md:pb-0 -z-10">
      {/* Image Section */}
      <div className="Image-Div flex flex-col justify-center items-center px-4 relative h-[50vh] lg:h-full lg:basis-[60%] order-first lg:order-last p-0">
        <Image
          ref={heroImageRef}
          src="/iamasadshah.png"
          alt="Hero-Image"
          height={400}
          width={400}
          className="object-contain z-10 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] lg:w-[450px] lg:h-[450px] shadow-lg shadow-primary1 rounded-full"
        />
      </div>

      {/* Text Section */}
      <div
        ref={textRef}
        className="flex flex-col justify-center md:pl-14 px-4 h-[50vh] lg:h-full leading-[2.5rem] lg:leading-[3.5rem] md:pt-10"
      >
        <p className="text-base sm:text-xl animate__animated animate__flipInX animate__delay-2s">
          Hello, My Name is Asad Shah.
        </p>
        <h1 className="text-[25px] sm:text-[30px] md:text-[45px] font-semibold leading-8 sm:leading-9 md:leading-[3.5rem] animate__animated animate__lightSpeedInLeft animate__delay-1s">
          I Transform Ideas Into Interactive Realities.
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-black lg:pr-52 animate_animated animate__headShake">
          Who said coding can&apos;t be fun? <br /> Let&apos;s build something
          awesome!
        </p>

        {/* Social Icons */}
        <div className="flex space-x-3 sm:space-x-4 lg:space-x-6 snake-animation pt-6 justify-center md:justify-start">
          <Link
            href="https://github.com/iamasadshah"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary1 hover:bg-white transition duration-500"
          >
            <FaGithub size={24} className="animate-snake" />
          </Link>
          <Link
            href="https://www.hackerrank.com/profile/asadibnerafi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary1 hover:bg-[#08EB68] transition duration-500"
          >
            <FaHackerrank size={24} className="animate-snake delay-100" />
          </Link>
          <Link
            href="https://www.upwork.com/freelancers/~0151539c3fe76e8c72?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary1 hover:bg-[#14A800] transition duration-500"
          >
            <FaUpwork size={24} className="animate-snake delay-200" />
          </Link>
          <Link
            href="https://medium.com/@ibnerafi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary1 hover:bg-[#080808] transition duration-500"
          >
            <FaMedium
              size={24}
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
              size={24}
              className="animate-snake delay-400 hover:text-white"
            />
          </Link>
        </div>

        {/* Buttons Section */}
        <div
          ref={buttonsRef}
          className="flex sm:flex-row justify-center sm:justify-start items-center gap-y-4 gap-x-4 mt-6"
        >
          {/* Hire Me Button */}
          <button className="inline-flex items-center px-4 py-2 text-sm sm:px-6 sm:py-3 border border-transparent shadow-md font-medium rounded-md shadow-gray-500 text-white bg-primary1 hover:bg-transparent cursor-pointer transition-all duration-300 hover:text-primary3 hover:ring-2 hover:ring-primary3 md:text-lg md:px-4 md:py-2">
            <Link href="/contact">Contact me</Link>
          </button>

          {/* Portfolio Button */}
          <button className="inline-flex items-center px-4 py-2 text-sm sm:px-6 sm:py-3 border border-transparent shadow-md font-medium rounded-md shadow-gray-500 text-primary1 bg-transparent cursor-pointer transition-all duration-300 hover:text-primary3 hover:ring-primary3 ring-2 ring-primary1 md:text-lg md:px-4 md:py-2">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1T3Ft8e9Y-d5mEJskaCsIPPLS3hbrAanW/view?usp=sharing"
              className="relative inline-flex items-center text-sm md:text-lg text-black hover:text-primary3"
            >
              Get Resume
              <span className="ml-2 inline-block ">🔗</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
