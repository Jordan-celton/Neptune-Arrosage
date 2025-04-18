import React from "react";
import logo from "../../assets/logo/logo_neptune.svg";
import heroImage from "../../assets/photos/Home/A_photograph_captures_a_Wallace_Fountain_situated_.webp";
import "../../styles/NeptunePage/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      {/* Colonne de l'image */}
      <div className="hero-image-column">
        <img
          src={heroImage}
          alt="Fontaine Wallace à Paris"
          className="hero-image"
        />
      </div>

      {/* Colonne du contenu */}
      <div className="hero-content-column">
        {/* Logo et titre */}
        <div className="hero-header">
          <img src={logo} alt="Logo Neptune Arrosage" className="hero-logo" />
          <div className="hero-title">O A R R O S A G E</div>
        </div>

        {/* Contenu texte */}
        <div className="hero-content">
          <div className="hero-divider"></div>
          <h3 className="hero-tagline">Depuis 1970 expert en solutions</h3>
          <div className="hero-divider"></div>
          <h4 className="hero-service">Arrosage & aménagement hydraulique</h4>

          <div className="hero-description">
            <p>
              Fondée en 1970 à Nantes, Neptune Arrosage est une entreprise
              spécialisée dans la conception et la réalisation de solutions
              d'arrosage et d'aménagements hydrauliques. Forte de plus de 50 ans
              d'expérience, Neptune intervient sur des projets variés, des
              fontaines et miroirs d'eau aux terrains sportifs (golf, centres
              équestres, stades), en passant par les jardins et espaces publics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
