import React from "react";
import {
  FaUsers,
  FaHandshake,
  FaBoxOpen,
  FaBuilding,
  FaComments,
} from "react-icons/fa";
import agencyImage from "../assets/photos/agence.webp"; // Import de l'image de l'agence
import "../styles/AboutAgency.css";

const AboutAgency = () => {
  return (
    <section className="about-agency">
      <h2>Notre Agence</h2>
      <p className="agency-description">
        Spécialisée dans les systèmes d'arrosage automatique, notre agence allie
        expertise technique et engagement écologique pour répondre à vos
        besoins.
      </p>

      {/* Section avec photo et détails de l'agence */}
      <div className="agency-details">
        <div className="agency-image-container">
          <img src={agencyImage} alt="Notre agence" className="agency-image" />
        </div>
        <div className="agency-info">
          <div className="info-item">
            <div className="info-icon">
              <FaBuilding />
            </div>
            <h3>Superficie de 1000 m²</h3>
            <p>
              Notre agence dispose d'un espace de 1000 m² dédié à la conception,
              au stockage et à la préparation des systèmes d'arrosage.
            </p>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <FaComments />
            </div>
            <h3>Conseil client personnalisé</h3>
            <p>
              Notre équipe est à votre écoute pour vous proposer des solutions
              adaptées à vos besoins et à votre budget.
            </p>
          </div>
        </div>
      </div>

      {/* Points forts de l'agence */}
      <section className="agency-highlights">
        <h2>Nos points forts</h2>
        <div className="highlights-container">
          {/* Point fort 1 : Équipe expérimentée */}
          <div className="highlight-card">
            <div className="highlight-icon">
              <FaUsers />
            </div>
            <div className="highlight-text">
              <h3>Équipe expérimentée</h3>
              <p>
                Notre équipe de professionnels certifiés vous accompagne de la
                conception à l'installation.
              </p>
            </div>
          </div>

          {/* Point fort 2 : Engagement client */}
          <div className="highlight-card">
            <div className="highlight-icon">
              <FaHandshake />
            </div>
            <div className="highlight-text">
              <h3>Engagement client</h3>
              <p>
                Nous nous engageons à vous fournir des solutions sur-mesure et
                un service personnalisé.
              </p>
            </div>
          </div>

          {/* Point fort 3 : Résultats prouvés */}
          <div className="highlight-card">
            <div className="highlight-icon">
              <FaBoxOpen /> {/* Icône pour le matériel fourni */}
            </div>
            <div className="highlight-text">
              <h3>Matériel fourni</h3>
              <p>
                Nous fournissons tout le matériel nécessaire pour une
                installation complète et de qualité.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutAgency;
