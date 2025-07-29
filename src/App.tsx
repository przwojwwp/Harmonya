import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BeforeAfter } from "./components/BeforeAfter";
import { Benefits } from "./components/Benefits";
import { Contact } from "./components/Contact";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";

export const App = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Testimonials />
      {/* <BeforeAfter />
      <Faq />
      <Pricing />
      <Contact />
      <Footer /> */}
    </>
  );
};
