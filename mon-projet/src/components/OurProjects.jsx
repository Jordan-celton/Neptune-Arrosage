import React, { useState, useEffect, useCallback } from "react";
import "../styles/OurProjects.css";
import image1 from "../assets/photos/20180614_160716.webp";
import image2 from "../assets/photos/HRO4.webp";
import image3 from "../assets/photos/Fontaine 2.webp";
import image4 from "../assets/photos/HRO1.webp";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const OurProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalTime = 3000; // Temps entre chaque slide auto

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
      description: "Système d'irrigation pour espace public",
    },
  ];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return; // Ne pas changer d'image pendant la transition
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  }, [isTransitioning, projects.length]);

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, intervalTime);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Gérer la fin de la transition
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, intervalTime); // Attendre que la transition soit terminée
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <section className="our-projects-container">
      <h2>Nos Projets Réalisés</h2>
      <div className="carousel-container">
        <div
          className="carousel-wrapper"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out", // Transition fluide
          }}
        >
          {projects.map((project) => (
            <div key={project.id} className="carousel-item">
              <img
                src={project.imageUrl}
                alt={project.altText}
                loading="lazy"
              />
              <div className="description">{project.description}</div>
            </div>
          ))}
        </div>
        <button
          className="carousel-prev"
          onClick={prevSlide}
          aria-label="Projet précédent"
        >
          <FaChevronLeft />
        </button>
        <button
          className="carousel-next"
          onClick={nextSlide}
          aria-label="Projet suivant"
        >
          <FaChevronRight />
        </button>
        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(OurProjects);
