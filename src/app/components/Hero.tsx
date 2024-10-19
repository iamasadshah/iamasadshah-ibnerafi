import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="lg:flex lg:pr-6 h-screen Hero-container bg-slate-100 relative overflow-hidden md:h-[1050px] lg:h-screen">
      {/* Image Section */}
      <div className="Image-Div flex flex-col justify-center items-center px-4 relative h-[50vh] lg:h-full lg:basis-[60%] order-first lg:order-last">
        {/* Particle Two (Floating Animation) */}
        <Image
          src={"/particle-one.png"}
          alt="particle-one"
          width={300}
          height={300}
          className="h-20 w-20 hidden lg:block lg:-mb-20 -ml-[400px] animate-spin-slow"
        />

        {/* Hero Image */}
        <Image
          src="/iamasadshah.png"
          alt="Hero-Image"
          height={400}
          width={400}
          className="object-contain mt-8 z-10 w-[200px] h-[300px] sm:w-[300px] sm:h-[400px] md:w-[400px] md:h-[600px] lg:w-full lg:h-[600px] lg:-mb-7"
        />

        {/* Background Image */}
        <Image
          src="/background.png"
          alt="Background-Image"
          width={1000}
          height={1000}
          className="absolute z-0 object-contain w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-full lg:h-full"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center md:-mt-16 md:pl-14 px-4 h-[50vh] lg:h-full leading-[2.5rem] lg:leading-[3.5rem]">
        {/* Particle One (Pulse Animation) */}
        <Image
          src={"/particle-two.png"}
          alt="particle-two"
          width={300}
          height={300}
          className="h-28 w-28 hidden lg:block animate-pulse"
        />

        <p className="text-lg sm:text-xl animate-typewriter">
          Hello, My Name is Asad Shah.
        </p>
        <h1 className="text-[30px] sm:text-[35px] md:text-[45px] font-semibold leading-9 sm:leading-10 md:leading-[3.5rem] animate-zoom-in">
          Building websites that work smoothly and look great.
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 lg:pr-52">
          A web app developer that transforms ideas into fast, user-friendly
          apps designed to stand out.
        </p>

        <div className="flex justify-center items-center space-x-4 mt-4 lg:justify-start">
          {/* Hire Me Button */}
          <button className="inline-flex items-center px-6 py-2 border border-transparent text-sm shadow-md font-medium rounded-md shadow-gray-500 text-white bg-primary1 hover:bg-transparent cursor-pointer transition-all duration-300 hover:text-primary1 hover:ring-2 hover:ring-primary1 md:text-lg md:px-10 lg:px-7 animate-slide-left">
            <a href="#">Hire me</a>
          </button>

          {/* Portfolio Button */}
          <button className="inline-flex items-center px-6 py-2 border border-transparent text-sm shadow-md font-medium rounded-md shadow-gray-500 text-primary1 bg-transparent hover:bg-primary1 cursor-pointer transition-all duration-300 hover:text-white ring-2 ring-primary1 md:text-lg md:px-10 lg:px-7 animate-slide-right">
            <a href="#">Portfolio</a>
          </button>

          {/* Particle Three (Spin Animation) */}
          <Image
            src={"/particle-three.png"}
            alt="particle-three"
            width={300}
            height={300}
            className="h-20 w-20 hidden lg:block animate-bounce-slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
