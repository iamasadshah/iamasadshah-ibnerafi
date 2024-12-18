import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary2 bg-cover bg-center bg-no-repeat px-6 overflow-hidden py-0">
      <h1 className="text-4xl font-bold text-center text-primary3 ">
        Frequently Asked Questions
      </h1>
      <p className="text-lg text-center">
        Find answers to commonly asked questions about developer and his
        Services.
      </p>

      {/* Accordion with 'collapsible' property */}
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-md  rounded-lg px-10"
      >
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
          <AccordionTrigger className="text-md md:text-lg lg:text-xl ">
            How can I contact you for a project?
          </AccordionTrigger>
          <AccordionContent>
            You can reach out through the contact form on the website.
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
    </div>
  );
};

export default FAQs;
