"use client";

import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const starCountRef = useRef(0); // To track the number of stars created

  useEffect(() => {
    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
      }

      // Limit the number of stars (3 to 5)
      const starLimit = 5;
      if (starCountRef.current < starLimit) {
        // Create a star element
        const star = document.createElement("div");
        star.className =
          "absolute w-4 h-4 bg-primary3 pointer-events-none opacity-0";
        star.style.left = `${e.pageX}px`;
        star.style.top = `${e.pageY}px`;

        // Add star shape using clip-path
        star.style.clipPath =
          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";

        // Add star animation
        star.style.animation = "star-fade 1.5s ease-out forwards";

        // Append the star to the document
        document.body.appendChild(star);

        // Remove the star after animation ends
        setTimeout(() => {
          star.remove();
          starCountRef.current--;
        }, 1500); // Matches the animation duration

        // Increment the star counter
        starCountRef.current++;
      }
    };

    // Attach the event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-5 h-5 bg-primary3 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50"
      ></div>

      {/* Keyframe styles for star animation */}
      <style jsx global>{`
        @keyframes star-fade {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(3);
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
