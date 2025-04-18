import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/HomePage/Hero.css";
import logoNeptuneBlanc from "../../assets/logo/logo_neptune_blanc.svg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <img src={logoNeptuneBlanc} alt="Logo de l'entreprise" />
          <div className="hero-tagline">EXPERT EN SOLUTIONS</div>

          <h1 className="hero-title">
            <span className="hero-title-line">Arrosage &</span>
            <span className="hero-title-line">aménagement</span>
            <span className="hero-title-line">hydraulique</span>
            <span className="hero-title-line">Depuis 1970</span>
          </h1>
          <div className="hero-cta">
            <button
              className="hero-button"
              onClick={() => navigate("/contact")}
            >
              Une demande, un projet ?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
