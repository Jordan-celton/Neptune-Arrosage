import React, { useState, useEffect, useCallback } from "react";
import "../styles/OurProjects.css";
import image1 from "../assets/photos/architecture-1853096_1920.webp";

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
      imageUrl: image1,
      altText: "Projet 2",
      description: "Aménagement hydraulique pour un grand jardin privé",
    },
    {
      id: 3,
      imageUrl: image1,
      altText: "Projet 3",
      description: "Système d'irrigation pour espace public",
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
  }, [currentIndex, nextSlide]);

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
              <img src={project.imageUrl} alt={project.altText} />
              <div className="description">{project.description}</div>
            </div>
          ))}
        </div>

        <button className="carousel-prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="carousel-next" onClick={nextSlide}>
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
