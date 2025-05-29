import React, { useRef, useEffect, useState } from "react";
import "../../styles/HomePage/Projects.css";
import realisationsData from "../../data/realisationData";
import { ArrowLeft, ArrowRight, ChevronRight, MapPin } from "lucide-react";
import iconProjects from "../../assets/icons/picto_bulles.svg";

const Projects = () => {
  const carouselRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(460);
  const GAP = 20;

  // Détecter la largeur des cartes en fonction de l'écran
  useEffect(() => {
    const updateCardWidth = () => {
      const screenWidth = window.innerWidth;
      const cardElement = document.querySelector(".realisation-card");

      if (cardElement) {
        if (screenWidth <= 768) {
          setCardWidth(cardElement.offsetWidth + GAP);
        } else if (screenWidth <= 1024) {
          // 2 cartes pour tablettes
          setCardWidth((cardElement.offsetWidth + GAP) * 2);
        } else {
          // 2 cartes pour desktop
          setCardWidth((cardElement.offsetWidth + GAP) * 2);
        }
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="realisation-section"
      aria-labelledby="realisation-title"
    >
      <div className="container-projects">
        {/* En-tête + Boutons */}
        <div className="carousel-header">
          <div className="header-image-container-projects">
            <img
              src={iconProjects}
              alt="Image d'une réalisation"
              className="header-image-projects"
              loading="eager"
            />
            <h2>Nos réalisations</h2>
          </div>
          <div className="header-title-container-projects">
            <h1
              className="section-title-projects"
              id="realisation-title"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Découvrez nos <br />
              dernières réalisations
            </h1>

            <div className="carousel-buttons">
              <button
                className="nav-button"
                onClick={scrollLeft}
                aria-label="Défiler vers la gauche"
              >
                <ArrowLeft color="var(--light-bg)" size={20} />
              </button>
              <button
                className="nav-button"
                onClick={scrollRight}
                aria-label="Défiler vers la droite"
              >
                <ArrowRight color="var(--light-bg)" size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Carrousel */}
        <div
          className="carousel-wrapper"
          data-aos="fade-in"
          role="region"
          aria-label="Galerie de projets réalisés"
        >
          <div className="realisation-carousel" ref={carouselRef}>
            {realisationsData.map((item, index) => (
              <article
                key={index}
                className="realisation-card"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                data-aos-duration="600"
              >
                <div
                  className="card-image"
                  style={{ backgroundImage: item.backgroundImage }}
                  role="img"
                  aria-label={`${item.titre} – ${item.ville}, ${item.date}`}
                ></div>
                <div className="card-content">
                  <div className="meta-info">
                    <span className="location">
                      <img
                        src={item.icons}
                        alt=""
                        className="location-icon"
                        style={{
                          width: "16px",
                          height: "25px",
                          marginRight: "5px",
                        }}
                        aria-hidden="true"
                      />
                      {item.ville}
                    </span>
                  </div>
                  <h2 className="card-title">{item.titre}</h2>
                  <div className="card-footer">
                    <a
                      href="#"
                      className="read-more"
                      aria-label={`Lire la suite à propos du projet ${item.titre}`}
                    >
                      {item.lien}
                      <ChevronRight
                        size={16}
                        color="var(--secondary)"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
