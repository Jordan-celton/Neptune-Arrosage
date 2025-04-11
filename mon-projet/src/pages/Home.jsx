import React from "react";
import Hero from "../components/HomePage/Hero";
import AboutSection from "../components/HomePage/AboutSection";
import ServicesSection from "../components/HomePage/ServicesSection";
import Expertise from "../components/HomePage/Expertise";
import Projects from "../components/HomePage/Projects";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Expertise />
      <Projects />
    </div>
  );
};

export default Home;
