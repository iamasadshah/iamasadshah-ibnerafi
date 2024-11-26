"use client";

import React, { useEffect, useRef } from "react";

const skills = [
  { name: "HTML", image: "/skills/html.png" },
  { name: "CSS", image: "/skills/css.png" },
  { name: "JavaScript", image: "/skills/javascript.webp" },
  { name: "Bootstrap", image: "/skills/bootstrap.png" },
  { name: "TypeScript", image: "/skills/typescript.png" },
  { name: "TailwindCSS", image: "/skills/tailwindcss.png" },
  { name: "React", image: "/skills/react.webp" },
  { name: "Nextjs", image: "/skills/nextjs.png" },
  { name: "Sanity", image: "/skills/sanity.png" },
  { name: "Shadn", image: "/skills/shadcn.png" },
  { name: "Git", image: "/skills/git.png" },
  { name: "Figma", image: "/skills/figma.png" },
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);

  const startAnimation = () => {
    const container = containerRef.current;
    if (container) {
      const totalWidth = container.scrollWidth;
      const containerWidth = container.clientWidth;

      // Cancel any existing animation
      if (animationRef.current) animationRef.current.cancel();

      // Start the new animation
      animationRef.current = container.animate(
        [
          { transform: "translateX(0)" },
          { transform: `translateX(-${totalWidth - containerWidth}px)` },
        ],
        {
          duration: 25000, // Adjust duration for speed
          iterations: Infinity,
          easing: "linear",
        }
      );
    }
  };

  useEffect(() => {
    startAnimation();

    return () => {
      if (animationRef.current) animationRef.current.cancel();
    };
  }, []);

  const handleMouseEnter = () => {
    if (animationRef.current) animationRef.current.pause();
  };

  const handleMouseLeave = () => {
    if (animationRef.current) animationRef.current.play();
  };

  return (
    <div className="relative pb-44 overflow-hidden bg-gray-100">
      <h2 className="text-center text-3xl font-bold text-primary1 my-3">
        Skills
      </h2>
      <div
        ref={containerRef}
        className="flex items-center space-x-6 absolute whitespace-nowrap w-full"
        style={{ willChange: "transform" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Skills with Background */}
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gradient-to-r from-primary3 to-blue-600 rounded-lg p-6 transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            <div className="w-20 h-20 flex justify-center items-center  ">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />
            </div>
            <p className="text-white mt-3 font-semibold">{skill.name}</p>
          </div>
        ))}
        {/* Duplicate Items for Seamless Looping */}
        {skills.map((skill, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex flex-col items-center justify-center bg-gradient-to-r from-primary3 to-blue-600 rounded-lg p-6 transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            <div className="w-20 h-20 flex justify-center items-center">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />
            </div>
            <p className="text-white mt-3 font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
