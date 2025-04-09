import React from "react";
import "../styles/Services.css";

const Services = () => {
  return (
    <div className="services-page">
      <h1>Nos Services</h1>

      {/* Section Fontainerie */}
      <section id="fontaines" className="service-section">
        <h2>Fontainerie</h2>
        <div className="service-content">
          {/* Contenu détaillé ici */}
          <p>Description des services de fontainerie...</p>
          {/* Ajoutez images, texte, etc. */}
        </div>
      </section>

      {/* Section Terrains Sportifs */}
      <section id="sports" className="service-section">
        <h2>Terrains Sportifs</h2>
        <div className="service-content">
          <p>Description des services pour terrains sportifs...</p>
        </div>
      </section>

      {/* Section Jardins & Espaces Publics */}
      <section id="jardins" className="service-section">
        <h2>Jardins & Espaces Publics</h2>
        <div className="service-content">
          <p>Description des services pour jardins et espaces publics...</p>
        </div>
      </section>

      {/* Section Contrats Entretien */}
      <section id="contrats" className="service-section">
        <h2>Contrats Entretien</h2>
        <div className="service-content">
          <p>Description des contrats d'entretien...</p>
        </div>
      </section>

      {/* Section Récupération Eau de Pluie */}
      <section id="recuperation" className="service-section">
        <h2>Récupération Eau de Pluie</h2>
        <div className="service-content">
          <p>Description des systèmes de récupération d'eau de pluie...</p>
        </div>
      </section>
    </div>
  );
};

export default Services;
