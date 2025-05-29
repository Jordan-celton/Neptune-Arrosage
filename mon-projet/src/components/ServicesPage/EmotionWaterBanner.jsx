import React from "react";
import "../../styles/ServicesPage/EmotionWaterBanner.css";
import apostrophe from "../../assets/icons/double-quotes-svgrepo-com.svg";

const EmotionWaterBanner = () => {
  return (
    <div
      className="emotion-water-banner"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="banner-content">
        <img
          src={apostrophe}
          alt="Guillemet de citation"
          className="apostrophe-icon"
        />
        <h1 className="banner-title">
          Créer l'émotion par l'eau avec
          <br />
          <span className="banner-subtitle">
            des fontaines durables et sur mesure
          </span>
        </h1>
      </div>
    </div>
  );
};

export default EmotionWaterBanner;
