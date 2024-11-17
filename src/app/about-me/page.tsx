"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full bg-white shadow-lg rounded-lg shadow-primary2 p-6 md:p-10"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="rounded-full w-40 h-40 overflow-hidden mx-auto border-4 border-primary1 "
          >
            <Image
              src="/iamasadshah.png"
              alt="Profile Picture"
              width={150}
              height={150}
              className="object-cover w-full h-full"
            />
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-800 mt-4">Asad Shah</h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gray-600 mt-2"
          >
            Passionate Frontend Developer | Creative Problem Solver
          </motion.p>
        </div>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full mt-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-primary1 pb-2">
          About Me
        </h2>
        <p className="text-gray-700 mt-4 leading-7">
          I am a dedicated frontend developer with a love for crafting beautiful
          and responsive web experiences. My journey began with curiosity about
          how websites work and has turned into a passion for creating scalable
          and user-friendly applications.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full mt-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-primary1 pb-2">
          Skills
        </h2>
        <div className="flex flex-wrap gap-4 mt-4">
          {[
            "Next.js",
            "React.js",
            "TypeScript",
            "Tailwind CSS",
            "Sanity.io",
            "Vercel",
            "Git & GitHub",
          ].map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-primary1 text-white rounded-lg shadow-md"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full mt-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-primary1 pb-2">
          Experience
        </h2>
        <ul className="list-disc list-inside mt-4 space-y-3">
          <li className="text-gray-700">
            Built responsive, modern web applications using Next.js and Tailwind
            CSS.
          </li>
          <li className="text-gray-700">
            Collaborated with designers and backend developers to deliver
            scalable solutions.
          </li>
          <li className="text-gray-700">
            Implemented dynamic CMS integrations using Sanity.io.
          </li>
        </ul>
      </motion.section>

      {/* Hobbies Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full mt-8 mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-primary1 pb-2">
          Hobbies
        </h2>
        <p className="text-gray-700 mt-4 leading-7">
          When I am not coding, you can find me exploring new tech trends,
          reading books on personal growth, or experimenting with new UI/UX
          design ideas.
        </p>
      </motion.section>
    </div>
  );
};

export default About;
