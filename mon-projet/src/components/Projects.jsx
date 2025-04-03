// src/components/RealisationList.jsx
import React, { useRef } from "react";
import "../styles/Projects.css";
import image1 from "../assets/photos/AdobeStock_201488180_Preview.jpeg";
import image2 from "../assets/photos/Capture.webp";

const Projects = () => {
  const carouselRef = useRef(null);

  const realisations = [
    {
      ville: "SAINT-DENIS (93)",
      date: "27 MARS 2025",
      titre: "Rénovation du système d'arrosage du stade de france",
      lien: "Lire la suite",
      backgroundImage: `url(${image1})`,
      category: "ESPACES VERTS",
    },
    {
      ville: "ANGERS (49)",
      date: "27 MARS 2025",
      titre: "Rénovation du système d'arrosage du tramway d'Angers",
      lien: "Lire la suite",
      backgroundImage: `url(${image2})`,
      category: "TRANSPORT",
    },
    {
      ville: "PARIS (75)",
      date: "27 MARS 2025",
      titre: "Rénovation du système d'arrosage du jardin des Tuileries",
      lien: "Lire la suite",
      backgroundImage: `url(${image1})`,
      category: "ESPACES VERTS",
    },
    {
      ville: "LYON (69)",
      date: "27 MARS 2025",
      titre: "Rénovation du système d'arrosage de la place Bellecour",
      lien: "Lire la suite",
      backgroundImage: `url(${image2})`,
      category: "ESPACES VERTS",
    },
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="realisation-section">
      <div className="container">
        <h1 className="section-title">Découvrez nos dernières réalisations</h1>

        <div className="carousel-container">
          <button className="nav-button left" onClick={scrollLeft}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="#0066CC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="realisation-carousel" ref={carouselRef}>
            {realisations.map((item, index) => (
              <article key={index} className="realisation-card">
                <div
                  className="card-image"
                  style={{ backgroundImage: item.backgroundImage }}
                >
                  <span className="category-badge">{item.category}</span>
                </div>

                <div className="card-content">
                  <div className="meta-info">
                    <span className="location">{item.ville}</span>
                    <span className="separator">•</span>
                    <span className="date">{item.date}</span>
                  </div>

                  <h2 className="card-title">{item.titre}</h2>

                  <div className="card-footer">
                    <a href="#" className="read-more">
                      {item.lien}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.93945 13.3333L5.27279 12.6666L9.93945 7.99998L5.27279 3.33331L5.93945 2.66665L11.2728 7.99998L5.93945 13.3333Z"
                          fill="#0066CC"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button className="nav-button right" onClick={scrollRight}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#0066CC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="section-footer">
          <button className="see-all-button">
            Voir toutes nos réalisations
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.93945 13.3333L5.27279 12.6666L9.93945 7.99998L5.27279 3.33331L5.93945 2.66665L11.2728 7.99998L5.93945 13.3333Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
