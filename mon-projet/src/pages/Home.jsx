import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import Expertise from "../components/Expertise";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Expertise />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
