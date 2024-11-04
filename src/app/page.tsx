import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About-me";
import Projects from "./components/Projects";
import FAQs from "./components/FAQs";
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Projects />
      <FAQs />
    </>
  );
}
