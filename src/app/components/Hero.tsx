"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

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

    // Hero Image Zoom and Rotate
    if (heroImageRef.current) {
      gsap.fromTo(
        heroImageRef.current,
        { scale: 1.2, rotation: 10 },
        {
          scale: 1,
          rotation: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroImageRef.current,
            start: "top 80%",
            end: "top 40%",
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
          y: 50,
          duration: 0.5,
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
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        y: 100,
        ease: "power1.out",
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div className="lg:flex lg:pr-6 h-screen Hero-container bg-slate-100 relative overflow-hidden md:h-[1050px] lg:h-screen">
      {/* Image Section */}
      <div className="Image-Div flex flex-col justify-center items-center px-4 relative h-[50vh] lg:h-full lg:basis-[60%] order-first lg:order-last">
        {/* Hero Image */}
        <Image
          ref={heroImageRef}
          src="/iamasadshah.png"
          alt="Hero-Image"
          height={400}
          width={400}
          className="object-contain mt-8 z-10 w-[200px] h-[300px] sm:w-[300px] sm:h-[400px] md:w-[400px] md:h-[600px] lg:w-full lg:h-[600px] lg:-mb-7"
        />

        {/* Background Image */}
        <Image
          ref={bgRef}
          src="/background.png"
          alt="Background-Image"
          width={1000}
          height={1000}
          className="absolute z-0 object-contain w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-full lg:h-full background-image"
        />
      </div>

      {/* Text Section */}
      <div
        ref={textRef}
        className="flex flex-col justify-center md:-mt-16 md:pl-14 px-4 h-[50vh] lg:h-full leading-[2.5rem] lg:leading-[3.5rem]"
      >
        <p className="text-lg sm:text-xl">Hello, My Name is Asad Shah.</p>
        <h1 className="text-[30px] sm:text-[35px] md:text-[45px] font-semibold leading-9 sm:leading-10 md:leading-[3.5rem]">
          I&apos;m a Professional Software Developer.
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 lg:pr-52">
          Who said coding can&apos;t be fun? <br /> Let&apos;s build something
          awesome!
        </p>

        <div
          ref={buttonsRef}
          className="flex justify-center items-center space-x-4 mt-4 lg:justify-start"
        >
          {/* Hire Me Button */}
          <button className="inline-flex items-center px-6 py-2 border border-transparent text-sm shadow-md font-medium rounded-md shadow-gray-500 text-white bg-primary1 hover:bg-transparent cursor-pointer transition-all duration-300 hover:text-primary1 hover:ring-2 hover:ring-primary1 md:text-lg md:px-10 lg:px-7">
            <a href="">Hire me</a>
          </button>

          {/* Portfolio Button */}
          <button className="inline-flex items-center px-6 py-2 border border-transparent text-sm shadow-md font-medium rounded-md shadow-gray-500 text-primary1 bg-transparent hover:bg-primary1 cursor-pointer transition-all duration-300 hover:text-white ring-2 ring-primary1 md:text-lg md:px-10 lg:px-7">
            <a href="#">Portfolio</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
