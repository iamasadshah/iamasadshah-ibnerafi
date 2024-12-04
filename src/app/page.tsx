import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About-me";
import Projects from "./components/Projects";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Skills from "./components/Skills";
import CustomCursor from "./components/Customcursor";
import BackgroundEffect from "./components/BackgroundEffect";

export default function Home() {
  return (
    <>
      <Wrapper>
        <CustomCursor />
        <BackgroundEffect />
        <Hero />
        <About />
        <Projects />
        <Services />
        <Skills />
        <FAQs />
        <Footer />
      </Wrapper>
    </>
  );
}
