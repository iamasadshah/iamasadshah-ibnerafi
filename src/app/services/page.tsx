"use client";
import React from "react";
import { motion } from "framer-motion";

const servicesList = [
  {
    title: "Frontend Development",
    description:
      "Building beautiful, responsive, and high-performance websites using Next.js, React.js, and Tailwind CSS.",
    icon: "🔧",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating user-centered, intuitive, and modern UI/UX designs for a seamless user experience.",
    icon: "🎨",
  },
  {
    title: "Webflow Development",
    description:
      "Designing and developing no-code websites using Webflow for fast and scalable solutions.",
    icon: "🌐",
  },
  {
    title: "Performance Optimization",
    description:
      "Improving website performance by optimizing loading speed, reducing size, and enhancing interactivity.",
    icon: "⚡",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-primary2 flex flex-col items-center justify-center px-4 pb-10 py-20">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full text-center mt-16"
      >
        <h1 className="text-4xl font-bold text-gray-800">My Services</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          I offer a wide range of web development services tailored to your
          business needs. Whether you are looking for a stunning website or a
          custom web application, I can help bring your ideas to life.
        </p>
      </motion.section>

      {/* Services List */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl w-full mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-primary2 shadow-lg rounded-lg p-6 text-center transition-transform"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {service.title}
            </h2>
            <p className="text-gray-600 mt-4">{service.description}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full mt-16 text-center"
      >
        <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
        <p className="text-gray-600 mt-4">
          Ready to bring your project to life? Lets work together...
        </p>
        <button className="mt-8 px-6 py-2 border border-transparent text-sm shadow-md font-medium rounded-md shadow-gray-500 text-white bg-primary1 hover:bg-transparent cursor-pointer hover:text-primary1 hover:ring-2 hover:ring-primary1">
          Contact Me
        </button>
      </motion.section>
    </div>
  );
};

export default Services;
