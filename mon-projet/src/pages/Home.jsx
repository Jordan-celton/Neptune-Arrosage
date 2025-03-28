import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import Expertise from "../components/Expertise";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Expertise />
    </div>
  );
};

export default Home;
