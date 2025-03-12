import React, { useState, useEffect, useCallback } from "react";
import "../styles/OurProjects.css";
import image1 from "../assets/photos/20180614_160716.webp";
import image2 from "../assets/photos/HRO4.webp";
import image3 from "../assets/photos/Fontaine 2.webp";
import image4 from "../assets/photos/HRO1.webp";

const OurProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 3000; // Temps en millisecondes entre chaque défilement

  const projects = [
    {
      id: 1,
      imageUrl: image1,
      altText: "Projet 1",
      description: "Fontaine dans le parc de la ville de Nantes",
    },
    {
      id: 2,
      imageUrl: image2,
      altText: "Projet 2",
      description: "Système d'irrigation pour espace public",
    },
    {
      id: 3,
      imageUrl: image3,
      altText: "Projet 3",
      description: "Système d'irrigation pour espace public",
    },
    {
      id: 4,
      imageUrl: image4,
      altText: "Projet 4",
      description: "Système d'irrigation pour espace public", // A modifier
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  }, [projects.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, intervalTime);
    return () => clearInterval(interval);
  }, [nextSlide]); // Pas besoin de dépendre de currentIndex

  return (
    <section className="our-projects-container">
      <h2>Nos Projets Réalisés</h2>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <picture>
                <source srcSet={project.imageUrl} type="image/webp" />
                <img
                  src={project.imageUrl}
                  alt={project.altText}
                  loading="lazy"
                />
              </picture>
              <div className="description">{project.description}</div>
            </div>
          ))}
        </div>

        <button
          className="carousel-prev"
          onClick={prevSlide}
          aria-label="Projet précédent"
        >
          ‹
        </button>
        <button
          className="carousel-next"
          onClick={nextSlide}
          aria-label="Projet suivant"
        >
          ›
        </button>

        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`carousel-indicator ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Aller au projet ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(OurProjects);
