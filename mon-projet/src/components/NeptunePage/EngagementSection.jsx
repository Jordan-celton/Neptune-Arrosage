import React from "react";
import "../../styles/NeptunePage/EngagementSection.css";
import engagementImage from "../../assets/photos/Neptune/fontaine_683x570.webp";
import icon from "../../assets/icons/picto_bulles.svg";
import icon1 from "../../assets/icons/picto_pompage.svg";
import icon2 from "../../assets/icons/picto_stockage.svg";
import icon3 from "../../assets/icons/picto_eaux_grises.svg";
import cardsImage1 from "../../assets/photos/Neptune/AdobeStock_410343655.webp";
import cardsImage2 from "../../assets/photos/Neptune/AdobeStock_301104036.webp";
import cardsImage3 from "../../assets/photos/Neptune/AdobeStock_559732379.webp";

const cards = [
  {
    img: cardsImage1,
    icon: icon1,
    alt: "Pompage des eaux de surface",
    text: "Pompage des eaux de surface pour limiter l'utilisation d'eau potable",
  },
  {
    img: cardsImage2,
    icon: icon2,
    alt: "Stockage des eaux de pluie",
    text: "Stockage des eaux de pluie pour réutilisation optimisée",
  },
  {
    img: cardsImage3,
    icon: icon3,
    alt: "Réutilisation des eaux grises",
    text: "La réutilisation des eaux grises, une alternative efficace et écologique",
  },
];

const EngagementSection = () => {
  return (
    <section className="engagement-section" aria-labelledby="engagement-title">
      <div className="engagement-container">
        {/* Colonne contenu */}
        <div className="engagement-content">
          <div>
            <div className="engagement-header">
              <img
                src={icon}
                className="engagement-icon"
                alt=""
                aria-hidden="true"
              />
              <h1 className="engagement-title" id="engagement-title">
                Un fort engagement
              </h1>
            </div>

            <h2 className="engagement-subtitle">
              Pour une gestion
              <br />
              <span>raisonnée de l'eau</span>
            </h2>

            <div className="engagement-text">
              <p>
                Face aux enjeux environnementaux, Neptune Arrosage s'engage
                activement dans une démarche d'économie et de gestion durable de
                l'eau. L'entreprise développe des solutions innovantes pour
                optimiser l'usage des ressources hydriques, notamment à travers
                :
              </p>
            </div>
          </div>
        </div>

        {/* Colonne image */}
        <div className="engagement-image-container">
          <img
            src={engagementImage}
            alt="Professionnel installant un système de gestion de l'eau"
            className="engagement-image"
          />
          <div className="image-overlay"></div>
        </div>
      </div>

      {/* Cartes */}
      <div className="engagement-card-list">
        {cards.map((card, i) => (
          <article key={i} className="engagement-card">
            <div className="card-image-container">
              <img
                src={card.img}
                alt={card.alt}
                className="engagement-card-image"
              />
            </div>
            <div className="engagement-card-icon-container">
              <div className="icon-wrapper-engagement">
                <div className="icon-background">
                  <img
                    src={card.icon}
                    alt=""
                    className="engagement-card-icon"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div className="engagement-card-content">
              <p>{card.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EngagementSection;
