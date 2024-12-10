"use client";

import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clickEffect, setClickEffect] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClickEffect(true);
    const handleMouseUp = () => setClickEffect(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      className={`fixed w-3 h-3 pointer-events-none rounded-full border border-primary1 transform -translate-x-1/2 -translate-y-1/2 z-[9999] ${
        clickEffect ? "bg-primary1 scale-150 duration-150" : "bg-transparent"
      }`}
    ></div>
  );
};

export default CustomCursor;
