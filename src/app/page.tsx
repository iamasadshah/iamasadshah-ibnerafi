import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About-me";
import Projects from "./components/Projects";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Skills from "./components/Skills";
import Head from "next/head";
import Link from "next/link";
import { Html, Main, NextScript } from "next/document";

export default function Home() {
  return (
    <>
      <Head>
        <Link rel="icon" href={"/favicon.png"} />
        <body>
          <Main />
          <NextScript />
          <script
            id="675e6f0a2e998c396f4d8521"
            src="https://app.droxy.ai/chat.min.js"
            defer
          ></script>
        </body>
      </Head>
      <Wrapper>
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
