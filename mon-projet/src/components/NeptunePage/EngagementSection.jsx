import React from "react";
import engagementImage from "../../assets/photos/Home/bg_nos_services.webp";
import "../../styles/NeptunePage/EngagementSection.css";

const EngagementSection = () => {
  return (
    <section className="engagement-section">
      <div className="engagement-container">
        {/* Colonne image */}
        <div className="engagement-image-container">
          <img
            src={engagementImage}
            alt="Solutions durables de gestion de l'eau"
            className="engagement-image"
          />
          <div className="image-overlay"></div>
        </div>

        {/* Colonne contenu */}
        <div className="engagement-content">
          <div className="engagement-header">
            <span className="engagement-number">8°</span>
            <h1 className="engagement-title">Un fort engagement</h1>
          </div>

          <h2 className="engagement-subtitle">
            Pour une gestion raisonnée de l'eau
          </h2>

          <div className="engagement-text">
            <p>
              Face aux enjeux environnementaux, Neptune Arrosage s'engage
              activement dans une démarche d'économie et de gestion durable de
              l'eau. L'entreprise développe des solutions innovantes pour
              optimiser l'usage des ressources hydriques, notamment à travers :
            </p>

            <ul className="engagement-list">
              <li>
                <strong>Pompage des eaux de surface</strong> pour limiter
                l'utilisation d'eau potable
              </li>
              <li>
                <strong>Stockage des eaux de pluie</strong> pour réutilisation
                optimisée
              </li>
              <li>
                <strong>Réutilisation des eaux grises</strong>, une alternative
                efficace et écologique
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
