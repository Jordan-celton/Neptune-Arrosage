import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-tagline">EXPERT EN SOLUTIONS</div>
          <h1 className="hero-title">
            <span className="hero-title-line">Arrosage &</span>
            <span className="hero-title-line">aménagement</span>
            <span className="hero-title-line">hydraulique</span>
            <span className="hero-title-line">Depuis 1970</span>
          </h1>
          <div className="hero-cta">
            <button className="hero-button">Une demande, un projet ?</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
