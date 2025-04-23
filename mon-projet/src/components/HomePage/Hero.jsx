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
        <div className="hero-content" data-aos="fade-up">
          <img
            src={logoNeptuneBlanc}
            alt="Logo de l'entreprise"
            data-aos="zoom-in"
            data-aos-delay="100"
          />

          <div className="hero-tagline" data-aos="fade-up" data-aos-delay="300">
            EXPERT EN SOLUTIONS
          </div>

          <h1 className="hero-title">
            <span
              className="hero-title-line"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              Arrosage &
            </span>
            <span
              className="hero-title-line"
              data-aos="fade-right"
              data-aos-delay="700"
            >
              aménagement
            </span>
            <span
              className="hero-title-line"
              data-aos="fade-right"
              data-aos-delay="900"
            >
              hydraulique
            </span>
            <span
              className="hero-title-line"
              data-aos="fade-right"
              data-aos-delay="1100"
            >
              Depuis 1970
            </span>
          </h1>

          <div className="hero-cta" data-aos="zoom-in" data-aos-delay="1100">
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
