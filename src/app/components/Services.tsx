"use client";
import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll(".services-card");

    if (cards) {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={cardsRef}
      className="py-4 lg:py-10 bg-primary2 justify-center items-center lg:space-y-12 bg-cover bg-center bg-no-repeat z-10"
    >
      <h1 className="text-2xl lg:text-3xl font-semibold text-center text-primary3 cursor-help">
        EXPLORE MY SERVICES
      </h1>

      <div className="grid grid-cols-1 px-4 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Service Cards */}
        <Card className="services-card bg-primary2 flex flex-col justify-center items-center py-4 space-y-2 px-4 text-center z-10">
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
        <Card className="services-card bg-primary2 flex flex-col justify-center items-center py-4 space-y-2 px-4 text-center z-10">
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

        <Card className="services-card bg-primary2 flex flex-col justify-center items-center py-4 space-y-2 px-4 text-center z-10">
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

        <Card className="services-card bg-primary2 flex flex-col justify-center items-center py-4 space-y-2 px-4 text-center z-10">
          <Image
            alt="SEO Optimization"
            src="/seo.png"
            width={80}
            height={80}
            className="hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-lg lg:text-xl font-bold tracking-wider">SEO</h3>
          <p className="text-sm lg:text-base">
            Best practices for better search engine rankings and site
            performance.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Services;
