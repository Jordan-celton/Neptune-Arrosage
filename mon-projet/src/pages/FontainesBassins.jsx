import React from "react";
import "../styles/FontainesBassins.css";
import HomeContact from "../components/HomeContact";
import image1 from "../assets/photos/A 003.webp";
import image2 from "../assets/photos/20180614_160716.webp";
import image3 from "../assets/photos/DSCF0989.webp";
import image4 from "../assets/photos/fountain-2498605_1280.webp";
import image5 from "../assets/photos/Fontaine Rueil Imp 1.webp";
import image6 from "../assets/photos/Fontaine Caen 1.webp";

const FontainesBassins = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="fontaines-bassins-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Fontaines & Bassins</h1>
          <p>
            Conception et installation de fontaines et bassins pour embellir vos
            espaces extérieurs tout en respectant l'environnement.
          </p>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <h2>Transformez votre espace extérieur</h2>
          <p>
            Nos fontaines et bassins sont conçus pour ajouter une touche
            d'élégance et de sérénité à votre jardin ou espace public. Nous
            utilisons des matériaux de haute qualité et des techniques
            innovantes pour créer des designs uniques et durables.
          </p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              tabIndex={0}
              role="button"
              aria-label={`Image ${index + 1}`}
            >
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <HomeContact />
    </div>
  );
};

export default FontainesBassins;
