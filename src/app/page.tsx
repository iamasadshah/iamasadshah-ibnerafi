import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About-me";
import Projects from "./components/Projects";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
export default function Home() {
  return (
    <>
      <Wrapper>
        <Hero />
        <Services />
        <About />
        <Projects />
        <FAQs />
        <Footer />
      </Wrapper>
    </>
  );
}
