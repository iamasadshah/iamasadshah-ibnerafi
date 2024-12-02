"use client";
import { Card } from "@/components/ui/card";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Services cards animation
    if (servicesRef.current) {
      const cards = Array.from(servicesRef.current.children) as HTMLElement[];

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 }, // Start slightly below and hidden
          {
            opacity: 1,
            y: 0, // Move to original position
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%", // Animation starts when the card is just entering the viewport
              end: "center 30%", // Animation ends when the card reaches near the top
              scrub: true, // Smoothly tie the animation to scrolling
              onLeave: () => {
                // Fade out and move up when the card leaves the viewport upwards
                gsap.to(card, {
                  opacity: 0,
                  y: -50, // Move slightly upwards
                  duration: 1.5,
                  ease: "power2.in",
                });
              },
            },
          }
        );
      });
    }

    // Buttons animation
    if (buttonsRef.current) {
      const buttons = Array.from(buttonsRef.current.children) as HTMLElement[];

      buttons.forEach((button, index) => {
        gsap.fromTo(
          button,
          { opacity: 1, x: 0 }, // Initial visible state
          {
            opacity: 0,
            x: index === 0 ? -999 : 999, // Move left for the first button, right for the second
            duration: 3.5,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: button,
              start: "top 40%", // Animation starts when the button is halfway up the viewport
              end: "top 20%", // Animation ends when the button reaches 20% from the top of the viewport
              scrub: true, // Smooth scroll effect
            },
          }
        );
      });
    }
  }, []);

  return (
    <div
      className="py-4 lg:py-10 bg-slate-100 justify-center items-center lg:space-y-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/second-bg.svg')",
      }}
    >
      <h1
        ref={headerRef}
        className="text-2xl lg:text-3xl font-semibold text-center px-4 text-primary3"
      >
        Take a look at the variety of services I offer.
      </h1>

      <div
        ref={servicesRef}
        className="grid grid-cols-1 px-4 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-4 lg:px-8"
      >
        {/* Service Cards */}
        <Card className="services-card flex flex-col justify-center items-center py-4 space-y-2 px-4 text-center">
          <Image
            alt="Frontend Development"
            src="/development.png"
            width={80}
            height={80}
            className="hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-lg lg:text-xl font-bold">Frontend Development</h3>
          <p className="text-sm lg:text-base">
            Building responsive and interactive websites using modern frameworks
            like React and Next.js.
          </p>
        </Card>
        <Card className="services-card flex flex-col justify-center items-center py-4 space-y-2 px-4 text-center">
          <Image
            alt="UI/UX Design"
            src="/wordpress.png"
            width={80}
            height={80}
            className="hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-lg lg:text-xl font-bold">
            Wordpress Development
          </h3>
          <p className="text-sm lg:text-base">
            Creating custom WordPress websites that are fast, secure, and easy
            to manage.
          </p>
        </Card>

        <Card className="services-card flex flex-col justify-center items-center py-4 space-y-2 px-4 text-center">
          <Image
            alt="SPAs"
            src="/SPA.png"
            width={80}
            height={80}
            className="hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-lg lg:text-xl font-bold">
            Single Page Applications
          </h3>
          <p className="text-sm lg:text-base">
            Fast, dynamic SPAs providing seamless user experiences without
            reloading pages.
          </p>
        </Card>

        <Card className="services-card flex flex-col justify-center items-center py-4 space-y-2 px-4 text-center">
          <Image
            alt="SEO Optimization"
            src="/seo.png"
            width={80}
            height={80}
            className="hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-lg lg:text-xl font-bold">SEO Optimization</h3>
          <p className="text-sm lg:text-base">
            Best practices for better search engine rankings and site
            performance.
          </p>
        </Card>
      </div>

      <div
        ref={buttonsRef}
        className="flex justify-center items-center space-x-4 mt-8"
      >
        <button className="flex items-center px-6 py-2 border-2 border-transparent text-sm font-medium rounded-md text-white bg-primary1 transition-transform duration-300 hover:ring-2 hover:ring-primary1 hover:scale-110 hover:bg-transparent md:text-lg md:px-10 lg:px-7 hover:text-primary1">
          <a href="/contact">Hire me</a>
        </button>

        <button className="inline-flex items-center px-6 py-2 border border-transparent text-sm shadow-md font-medium rounded-md shadow-gray-500 text-primary1 bg-transparent hover:scale-110 transition-transform duration-300 hover:bg-primary1 hover:text-white ring-2 ring-primary1 md:text-lg md:px-10 lg:px-7">
          <a href="/projects">Portfolio</a>
        </button>
      </div>
    </div>
  );
};

export default Services;
