import { Card } from "@/components/ui/card";
import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div
      className="py-4 lg:py-10 bg-slate-100 justify-center items-center lg:space-y-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/second-bg.svg')", // Replace with your image path
      }}
    >
      <h1 className="text-2xl lg:text-3xl font-semibold text-center px-4">
        Take a look at the variety of services I offer.
      </h1>

      <div className="grid grid-cols-1 px-4 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Example Service Card */}
        <Card className="services-card flex flex-col justify-center items-center py-4 space-y-2 px-4 text-center">
          <Image
            alt="UI/UX Design"
            src="/ux-design.png"
            width={80}
            height={80} // Adjust image size for mobile
            className="animate-pulse"
          />
          <h3 className="text-lg lg:text-xl font-bold">UI/UX Design</h3>
          <p className="text-sm lg:text-base">
            Ensuring websites and apps work smoothly on all devices.
          </p>
        </Card>
        <Card className="services-card">
          <Image
            alt="image"
            src="/development.png"
            width={100}
            height={100}
            className="service-image"
          />
          <h3 className="service-heading">Frontend Development</h3>
          <p>
            Building responsive and interactive websites using HTML, CSS,
            JavaScript, and modern frameworks like React, Next.js.
          </p>
        </Card>
        <Card className="services-card">
          <Image
            alt="image"
            src="/SPA.png"
            width={100}
            height={100}
            className="service-image"
          />
          <h3 className="service-heading">Single Page Applications (SPAs)</h3>
          <p>
            Developing fast, dynamic SPAs using frameworks like React or Nextjs
            that provide seamless user experiences without reloading pages.
          </p>
        </Card>
        <Card className="services-card">
          <Image
            alt="image"
            src="/seo.png"
            width={100}
            height={100}
            className="service-image"
          />
          <h3 className="service-heading">SEO Optimization</h3>
          <p>
            Implementing best practices in frontend code for better search
            engine rankings, such as optimizing metadata, improving site speed,
            and making sites crawl-friendly
          </p>
        </Card>

        {/* Add more service cards as needed */}
      </div>

      <div className="flex justify-center items-center space-x-4 mt-8">
        <button className="flex items-center px-6 py-2 border-2 border-transparent text-sm font-medium rounded-md text-white bg-primary1 transition-all duration-300 ease-in-out hover:border-primary1 hover:bg-transparent md:text-lg md:px-10 lg:px-7  hover:text-primary1 animate-slide-left">
          <a href="#">Hire me</a>
        </button>

        <button className="inline-flex items-center px-6 py-2 border border-transparent text-sm shadow-md font-medium rounded-md shadow-gray-500 text-primary1 bg-transparent hover:bg-primary1 cursor-pointer transition-all duration-300 hover:text-white ring-2 ring-primary1 md:text-lg md:px-10 lg:px-7 animate-slide-right">
          <a href="#">Portfolio</a>
        </button>
      </div>
    </div>
  );
};

export default Services;
