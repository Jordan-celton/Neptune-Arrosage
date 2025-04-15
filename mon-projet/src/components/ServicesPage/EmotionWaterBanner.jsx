import React from "react";
import "../../styles/ServicesPage/EmotionWaterBanner.css";
import apostrophe from "../../assets/icons/double-quotes-svgrepo-com.svg";

const EmotionWaterBanner = () => {
  return (
    <div className="emotion-water-banner">
      <div className="banner-content">
        <img src={apostrophe} alt="Citation" className="apostrophe-icon" />
        <h1 className="banner-title">
          Créer l'émotion par l'eau
          <br />
          <span className="banner-subtitle">
            avec des fontaines durables et sur mesure
          </span>
        </h1>
      </div>
    </div>
  );
};

export default EmotionWaterBanner;
