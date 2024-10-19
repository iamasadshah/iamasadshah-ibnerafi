import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

const FAQs = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat px-6 overflow-hidden"
      style={{
        backgroundImage: "url('/second-bg.svg')", // Replace with your image path
      }}
    >
      <h1 className="text-4xl font-bold text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-lg text-center">
        Find answers to commonly asked questions about developer and his
        Services.
      </p>

      <Accordion type="single" className="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md md:text-lg lg:text-xl">
            What services do you offer?
          </AccordionTrigger>
          <AccordionContent>
            I offer web development, SPA, SEO, and UI/UX design services. My
            expertise includes React, Next.js, Tailwind CSS, and more.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-md md:text-lg lg:text-xl">
            What technologies do you specialize in?
          </AccordionTrigger>
          <AccordionContent>
            I specialize in modern web technologies like React.js, Next.js,
            Tailwind CSS, and TypeScript. I also work with content management
            systems like Sanity.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-md md:text-lg lg:text-xl">
            How can I contact you for a project?
          </AccordionTrigger>
          <AccordionContent>
            You can reach out through the contact form on the website
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-md md:text-lg lg:text-xl">
            What is your pricing model?
          </AccordionTrigger>
          <AccordionContent>
            My pricing depends on the scope and complexity of the project. Feel
            free to contact me with your project details, and I will provide a
            quote.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-md md:text-lg lg:text-xl">
            Do you offer post-launch support?
          </AccordionTrigger>
          <AccordionContent>
            Yes, I provide ongoing support and maintenance after a project is
            launched to ensure everything runs smoothly.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex flex-col rounded-lg bg-primary2 justify-center items-center px-16 py-6 ">
        <h1 className="text-2xl font-bold text-center">
          Still have a question?
        </h1>
        <p className="text-lg mb-8 text-center">
          Contact us for more information.
        </p>
        <button className="bg-primary1 transition-all duration-300 font-semibold hover:bg-gray-300 hover:text-primary1 hover:ring-2 hover:ring-primary1 hover:scale-105 text-white px-4 py-2 rounded-md">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default FAQs;
