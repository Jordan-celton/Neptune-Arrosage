import React from "react";
import image1 from "../assets/photos/20200512_155618.webp";
import image2 from "../assets/photos/DSC_0778.webp";
import image3 from "../assets/photos/IMG_1310.webp";
import "../styles/ArrosageAuto.css";
import { FaCheckCircle, FaTools, FaRulerCombined } from "react-icons/fa";

const ArrosageAuto = () => {
  return (
    <div className="arrosage-auto-page container">
      {/* En-tête */}
      <header className="header-arrosage-auto">
        <h1>Arrosage Automatique</h1>
        <p>
          Des systèmes d'arrosage sur-mesure pour jardins, espaces verts et
          terrains sportifs, conçus pour optimiser l'utilisation de l'eau.
        </p>
      </header>

      {/* Section des services avec images */}
      <section className="services-arrosage-auto">
        <div className="services-arrosage-card">
          <div className="icon-container">
            <FaRulerCombined className="service-icon" /> {/* Icône */}
          </div>
          <h2>Systèmes sur-mesure</h2>
          <p>
            Nous concevons des systèmes d'arrosage adaptés à vos besoins, que ce
            soit pour un jardin, un espace vert ou un terrain sportif.
          </p>
        </div>

        <div className="services-arrosage-card">
          <div children="icon-container">
            <FaCheckCircle className="service-icon" /> {/* Icône */}
          </div>
          <h2>Optimisation de l'eau</h2>
          <p>
            Nos solutions sont conçues pour minimiser le gaspillage d'eau tout
            en assurant une irrigation efficace.
          </p>
        </div>

        <div className="services-arrosage-card">
          <div className="icon-container">
            <FaTools className="service-icon" /> {/* Icône */}
          </div>
          <h2>Installation professionnelle</h2>
          <p>
            Notre équipe d'experts assure une installation rapide et fiable,
            avec un suivi personnalisé.
          </p>
        </div>
      </section>

      <section className="realisations">
        <h2>Nos réalisations</h2>
        <div className="realisations-gallery">
          <img src={image1} alt="Projet 1" className="realisation-image" />
          <img src={image2} alt="Projet 2" className="realisation-image" />
          <img src={image3} alt="Projet 3" className="realisation-image" />
        </div>
      </section>

      {/* Section de contact */}
      <section className="Contact-arrosage">
        <p>
          Intéressé par nos services ?{" "}
          <a href="/contact" className="button primary">
            Contactez-nous
          </a>{" "}
          pour un devis gratuit.
        </p>
      </section>
    </div>
  );
};

export default ArrosageAuto;
