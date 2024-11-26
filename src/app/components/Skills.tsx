"use client";

import React, { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML", image: "/skills/html.png" },
  { name: "CSS", image: "/skills/css.png" },
  { name: "JavaScript", image: "/skills/javascript.webp" },
  { name: "Bootstrap", image: "/skills/bootstrap.png" },
  { name: "TypeScript", image: "/skills/typescript.png" },
  { name: "Tailwind CSS", image: "/skills/tailwindcss.png" },
  { name: "React", image: "/skills/react.webp" },
  { name: "Next.js", image: "/skills/nextjs.png" },
  { name: "Sanity (CMS)", image: "/skills/sanity.png" },
  { name: "Shadcn", image: "/skills/shadcn.png" },
  { name: "Git", image: "/skills/git.png" },
  { name: "Figma", image: "/skills/figma.png" },
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationPausedAt, setAnimationPausedAt] = useState<number | null>(
    null
  ); // Store where animation paused
  const animationRef = useRef<Animation | null>(null); // Store animation instance

  const startAnimation = (duration: number = 30000) => {
    const container = containerRef.current;
    if (container) {
      const totalWidth = container.scrollWidth;

      if (animationRef.current) {
        animationRef.current.cancel(); // Cancel any ongoing animation
      }

      // Start the animation
      animationRef.current = container.animate(
        [
          { transform: "translateX(0)" },
          { transform: `translateX(-${totalWidth / 2}px)` },
        ],
        {
          duration, // Adjustable speed for hover effects
          iterations: Infinity,
          easing: "linear",
        }
      );

      // Resume from the paused point
      if (animationPausedAt !== null && animationRef.current) {
        animationRef.current.currentTime = animationPausedAt;
      }
    }
  };

  useEffect(() => {
    // Start animation when component mounts
    startAnimation();

    return () => {
      // Clean up animation on unmount
      if (animationRef.current) animationRef.current.cancel();
    };
  }, [animationPausedAt]);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      const currentTime = animationRef.current.currentTime;
      setAnimationPausedAt(
        currentTime instanceof CSSNumericValue
          ? Number(currentTime)
          : currentTime
      );
      animationRef.current.pause();
    }
    // Slow down animation during hover
    startAnimation(60000); // Adjusted duration for slower speed
  };

  const handleMouseLeave = () => {
    // Resume animation
    startAnimation();
  };

  return (
    <div className="relative overflow-hidden bg-gray-100 pb-28 pt-10">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold mb-10 text-black">
        Skills
      </h2>

      {/* Skills Scrolling Container */}
      <div
        ref={containerRef}
        className="flex items-center space-x-10 absolute whitespace-nowrap"
        style={{ willChange: "transform" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Original Skills */}
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-2 transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 object-contain"
            />
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
        {/* Duplicate Skills for Looping */}
        {skills.map((skill, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex flex-col items-center justify-center space-y-2 transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 object-contain"
            />
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
