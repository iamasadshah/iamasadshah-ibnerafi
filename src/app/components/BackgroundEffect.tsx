"use client";

import React, { useEffect, useRef } from "react";

const LineEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };

    const particles: { x: number; y: number; vx: number; vy: number }[] = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.1, // Slow down the movement
        vy: (Math.random() - 0.5) * 0.1, // Slow down the movement
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = "#606C38";
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);

            if (
              Math.abs(mouse.x - particle.x) < 100 &&
              Math.abs(mouse.y - particle.y) < 100
            ) {
              ctx.strokeStyle = "rgba(0, 0, 0, 0)"; // Make line invisible on hover
            }

            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });
    };

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-10 z-0"
    ></canvas>
  );
};

export default LineEffect;
