import React from "react";
import logo from "../../assets/logo/logo_neptune.svg";
import heroImage from "../../assets/photos/Home/A_photograph_captures_a_Wallace_Fountain_situated_.webp";
import "../../styles/NeptunePage/HeroNeptune.css";

const HeroNeptune = () => {
  return (
    <div className="heroNeptune">
      {/* Colonne de l'image */}
      <div className="heroNeptune-image-column">
        <img
          src={heroImage}
          alt="Fontaine Wallace à Paris"
          className="heroNeptune-image"
        />
      </div>

      {/* Colonne du contenu */}
      <div className="heroNeptune-content-column">
        {/* Logo et titre */}
        <div className="heroNeptune-header">
          <img
            src={logo}
            alt="Logo Neptune Arrosage"
            className="heroNeptune-logo"
          />
        </div>

        {/* Contenu texte */}
        <div className="heroNeptune-content">
          <div className="heroNeptune-divider"></div>
          <h3 className="heroNeptune-tagline">
            Depuis 1970 expert en solutions
          </h3>
          <div className="heroNeptune-divider"></div>
          <h4 className="heroNeptune-service">
            Arrosage & aménagement hydraulique
          </h4>

          <div className="heroNeptune-description">
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

export default HeroNeptune;
