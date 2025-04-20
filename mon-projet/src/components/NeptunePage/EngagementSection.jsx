import React from "react";
import engagementImage from "../../assets/photos/Home/bg_nos_services.webp";
import icon from "../../assets/icons/picto_bulles.svg";
import icon1 from "../../assets/icons/picto_materiel_arrosage.svg";
import icon2 from "../../assets/icons/picto_parc_jardins.svg";
import icon3 from "../../assets/icons/picto_recup_EP.svg";

import cardsImage1 from "../../assets/photos/Home/A_photograph_captures_a_Wallace_Fountain_situated_.webp";
import cardsImage2 from "../../assets/photos/Home/header_accueil.webp";
import cardsImage3 from "../../assets/photos/Home/bg_nos_services.webp";

import "../../styles/NeptunePage/EngagementSection.css";

const EngagementSection = () => {
  return (
    <section className="engagement-section">
      <div className="engagement-container">
        {/* Colonne contenu */}
        <div className="engagement-content">
          <div className="engagement-header">
            <img src={icon} className="engagement-icon" alt="Engagement icon" />
            <h1 className="engagement-title">Un fort engagement</h1>
          </div>

          <h2 className="engagement-subtitle">
            Pour une gestion <span>raisonnée de l'eau</span>
          </h2>

          <div className="engagement-text">
            <p>
              Face aux enjeux environnementaux, Neptune Arrosage s'engage
              activement dans une démarche d'économie et de gestion durable de
              l'eau. L'entreprise développe des solutions innovantes pour
              optimiser l'usage des ressources hydriques, notamment à travers :
            </p>
          </div>
        </div>

        {/* Colonne image */}
        <div className="engagement-image-container">
          <img
            src={engagementImage}
            alt="Solutions durables de gestion de l'eau"
            className="engagement-image"
          />
          <div className="image-overlay"></div>
        </div>
      </div>

      {/* Cartes superposées */}
      <div className="engagement-card-list">
        <div className="engagement-card">
          <img src={cardsImage1} alt="Pompage des eaux" />
          <div className="engagement-card-icon">
            <img src={icon1} alt="Pompage icon" />
          </div>
          <p>
            Pompage des eaux de surface pour limiter l'utilisation d’eau potable
          </p>
        </div>

        <div className="engagement-card">
          <img src={cardsImage2} alt="Stockage des eaux" />
          <div className="engagement-card-icon">
            <img src={icon2} alt="Stockage icon" />
          </div>
          <p>Stockage des eaux de pluie pour réutilisation optimisée</p>
        </div>

        <div className="engagement-card">
          <img src={cardsImage3} alt="Réutilisation des eaux grises" />
          <div className="engagement-card-icon">
            <img src={icon3} alt="Réutilisation icon" />
          </div>
          <p>
            La réutilisation des eaux grises, une alternative efficace et
            écologique
          </p>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
