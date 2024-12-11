"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current && textRef.current) {
      // Image Animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -100 }, // Start: invisible, shifted left
        {
          opacity: 1,
          x: 0, // End: visible, original position
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 90%", // Starts when the top of the image is 90% down the viewport
            end: "top 20%", // Ends when the top of the image is 20% from the top
            scrub: true, // Tie animation progress to scroll
          },
        }
      );

      // Text Animation
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: 100 }, // Start: invisible, shifted right
        {
          opacity: 1,
          x: 0, // End: visible, original position
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%", // Starts when the top of the text is 90% down the viewport
            end: "top 20%", // Ends when the top of the text is 20% from the top
            scrub: true, // Tie animation progress to scroll
          },
        }
      );
    }
  }, []);

  return (
    <div className="py-6 px-4 lg:px-10 About bg-cover bg-primary2 bg-center bg-no-repeat">
      {/* About Me Image */}
      <div
        ref={imageRef}
        className="about-me-image flex justify-center lg:justify-start lg:w-full lg:pr-8"
      >
        <Image
          src={"/asadshah.gif"}
          unoptimized
          alt="asad-shah"
          width={300}
          height={300}
          className="rounded-xl lg:w-[65%]"
        />
      </div>

      {/* Text Section */}
      <div
        ref={textRef}
        className="text-div text-center lg:text-start py-2 lg:py-4 flex flex-col space-y-2 lg:space-y-4 lg:items-start"
      >
        <p className="text-xl font-semibold text-primary3">WHO AM I?</p>
        <div>
          <p className="text-sm lg:text-lg font-semibold">
            Hi, I&apos;m Asadullah Shah Ibne Rafi, a passionate and dedicated
            developer. I enjoy learning and growing every day, especially when
            it comes to exploring new technologies. Problem-solving excites me,
            and I love creating web applications that make the internet more
            open and accessible. My journey is driven by self-learning and
            curiosity. TypeScript is my core skill, and I enjoy building most of
            my projects with it. I&apos;m always open to opportunities that
            match my skills and interests, so feel free to reach out!
          </p>
          <b>
            <i>
              I&apos;ll retire when the last bug is fixed—so, probably never.
            </i>
          </b>
        </div>

        {/* Cards Section */}
        <div className="card-div flex flex-col lg:flex-row lg:space-x-4 text-primary3">
          <div className="cards">
            <h4 className="text-xl font-bold">100%</h4>
            <p>on Time</p>
          </div>
          <div className="cards">
            <h4 className="text-xl font-bold">99%</h4>
            <p>Clients Satisfaction rate</p>
          </div>
          <div className="cards">
            <h4 className="text-xl font-bold">80%</h4>
            <p>Web Projects</p>
          </div>
        </div>

        {/* Button Section */}
        <button className="flex items-center px-12 py-2 justify-center text-center border border-transparent text-sm shadow-md font-semibold rounded-md text-white bg-primary3 transition-all duration-300 ease-in-out md:hover:scale-100 hover:bg-primary2 hover:text-primary3 hover:shadow-lg hover:shadow-primary3 hover:ring-2 hover:ring-primary3   hover:scale-105 transform">
          <Link href="/about-me">About me</Link>
        </button>
      </div>
    </div>
  );
};

export default About;
