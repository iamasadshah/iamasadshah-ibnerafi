"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Typed handleChange function
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Typed handleSubmit function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const mailtoLink = `mailto:asadibnerafi@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(
      message
    )} (\n \n Message From: ${email})`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-primary2 flex flex-col items-center justify-center px-4 py-8">
      {/* Header Section */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-gray-800 mb-6 text-center"
      >
        Contact Us
      </motion.h1>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="bg-primary1 shadow-lg shadow-primary3 rounded-lg p-6 w-full max-w-2xl"
      >
        {/* Name Input */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <label htmlFor="name" className="block  text-white font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full p-3 bg-primary2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary3 placeholder:text-primary3"
          />
        </motion.div>

        {/* Email Input */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4"
        >
          <label htmlFor="email" className="block text-white font-medium mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full p-3 bg-primary2 text-primary3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary3 placeholder:text-primary3"
          />
        </motion.div>

        {/* Message Input */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6"
        >
          <label
            htmlFor="message"
            className="block text-white font-medium mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Enter your message"
            className="w-full p-3 bg-primary2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary3 placeholder:text-primary3"
          ></textarea>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 0.8 }}
          className="w-full group bg-primary1 text-white ring-2 ring-primary2 rounded-full font-medium shadow-md shadow-primary2 hover:shadow-primary3 hover:bg-primary2 focus:outline-none focus:ring-2 focus:ring-primary2 hover:text-primary3 focus:bg-primary3 focus:text-primary2"
          type="submit"
        >
          Send Message{" "}
          <Image
            src="/email-icon.gif"
            alt="email-icon"
            width={100}
            height={100}
            className="w-12 h-12 inline-block ml-2 opacity-0 group-hover:opacity-100"
          />
        </motion.button>
      </motion.form>

      {/* Animated Background Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary1 to-primary2 opacity-10"
      ></motion.div>
    </div>
  );
};

export default Contact;
