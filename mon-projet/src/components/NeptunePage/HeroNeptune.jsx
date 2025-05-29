import React from "react";
import logo from "../../assets/logo/logo_neptune.svg";
import heroImage from "../../assets/photos/Neptune/fontaine_613x750.webp";
import "../../styles/NeptunePage/HeroNeptune.css";
import Icon from "../../assets/icons/picto_bulles.svg";

const HeroNeptune = () => {
  return (
    <section className="heroNeptune" aria-labelledby="hero-neptune-title">
      {/* Colonne de l'image */}
      <div className="heroNeptune-image-column">
        <img
          src={heroImage}
          alt="Fontaine Wallace à Paris, symbole de l'expertise Neptune"
          className="heroNeptune-image"
          width={600}
          height={800}
        />
      </div>

      {/* Colonne du contenu */}
      <div className="heroNeptune-content-column">
        <header className="heroNeptune-header">
          <img
            src={logo}
            alt="Logo Neptune Arrosage"
            className="heroNeptune-logo"
            width={160}
            height={80}
          />
        </header>

        <div className="heroNeptune-content">
          <div className="heroNeptune-title-with-icon">
            <img
              src={Icon}
              alt=""
              className="iconNeptune-before-heading"
              aria-hidden="true"
            />
            <h1 id="hero-neptune-title" className="heroNeptune-tagline">
              Spécialiste de l’arrosage depuis 1970
            </h1>
          </div>

          <h2 className="heroNeptune-service">
            Arrosage & <br />
            aménagement <span>hydraulique</span>
          </h2>

          <div className="heroNeptune-description">
            <p>
              Fondée en 1970 à Nantes, Neptune Arrosage est une entreprise
              indépendante spécialisée dans la conception et la réalisation de
              solutions d'arrosage et d'aménagements hydrauliques. Forte de plus
              de 50 ans d'expérience, Neptune intervient sur des projets variés,
              des fontaines et miroirs d'eau aux terrains sportifs (golf,
              centres équestres, stades), en passant par les jardins et espaces
              publics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNeptune;
