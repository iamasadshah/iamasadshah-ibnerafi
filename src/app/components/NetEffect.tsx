"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const NetEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
    }[] = [];

    const particleCount = 50;

    // Determine particle speed based on screen size
    const isMobile = window.innerWidth < 768;
    const speedFactor = isMobile ? 1 : 1; // Slower speed for mobile

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * speedFactor,
        vy: (Math.random() - 0.5) * speedFactor,
      });
    }

    // Draw and update particles
    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particles
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#283618"; // Particle color
        ctx.fill();

        // Draw lines between close particles
        for (let j = index + 1; j < particles.length; j++) {
          const otherParticle = particles[j];
          const dx = otherParticle.x - particle.x;
          const dy = otherParticle.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(40, 54, 24, ${1 - distance / 150})`; // Gradient effect
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      });

      // Animate frame
      requestAnimationFrame(animateParticles);
    };

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;

      // Create a gentle attraction to the mouse
      gsap.to(particles, {
        duration: 1,
        x: (i) => particles[i].x + (mouse.x - particles[i].x) * 7,
        y: (i) => particles[i].y + (mouse.y - particles[i].y) * 7,
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Start animation
    animateParticles();

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full hidden lg:block  blur-[0.5px] pointer-events-none  opacity-90 z-0"
    ></canvas>
  );
};

export default NetEffect;
