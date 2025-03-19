import React, { useState, useEffect, useCallback } from "react";
import "../styles/Hero.css";
import image1 from "../assets/photos/20141022_134502.webp";
import image2 from "../assets/photos/20180614_160716.webp";
import image3 from "../assets/photos/DSC_0779.webp";
import image4 from "../assets/photos/building-4437724_1920.webp";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Liste des images du carrousel
  const slides = [image1, image2, image3, image4];

  // Fonction pour passer à la slide suivante
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  // Fonction pour passer à la slide précédente
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Optionnel : Défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change de slide toutes les 5 secondes

    return () => clearInterval(interval); // Nettoie l'intervalle lors du démontage du composant
  }, [nextSlide]);

  return (
    <section className="hero">
      {/* Carrousel en fond */}
      <div className="carrousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        ))}
      </div>

      {/* Contenu du Hero */}
      <div className="hero-content">
        <h1>Des solutions innovantes pour la gestion de l'eau</h1>
        <p>
          Arrosage automatique, fontaines design, récupération des eaux de pluie
          et bien plus encore.
        </p>
        <a href="#services" className="button primary">
          Découvrez nos services
        </a>
      </div>

      {/* Boutons de navigation */}
      <button className="carrousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carrousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </section>
  );
};

export default Hero;
