import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/HomePage/Projects.css";
import realisationsData from "../../data/realisationData";
import { ArrowLeft, ArrowRight, ChevronRight, MapPin } from "lucide-react";

const Projects = () => {
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section
      className="realisation-section"
      aria-labelledby="realisation-title"
    >
      <div className="container">
        <h1
          className="section-title"
          id="realisation-title"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Découvrez nos dernières réalisations
        </h1>

        <div
          className="carousel-container"
          data-aos="fade-in"
          role="region"
          aria-label="Galerie de projets réalisés"
        >
          <button
            className="nav-button left"
            onClick={scrollLeft}
            aria-label="Faire défiler vers la gauche"
          >
            <ArrowLeft color="var(--secondary)" size={24} />
          </button>

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
                >
                  <span className="category-badge">{item.category}</span>
                </div>
                <div className="card-content">
                  <div className="meta-info">
                    <span className="location">
                      <MapPin
                        size={16}
                        color="#666"
                        style={{ marginRight: "5px" }}
                        aria-hidden="true"
                      />
                      {item.ville}
                    </span>
                    <span className="separator" aria-hidden="true">
                      •
                    </span>
                    <span className="date">{item.date}</span>
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

          <button
            className="nav-button right"
            onClick={scrollRight}
            aria-label="Faire défiler vers la droite"
          >
            <ArrowRight color="var(--secondary)" size={24} />
          </button>
        </div>

        <div className="section-footer" data-aos="fade-up" data-aos-delay="300">
          <button
            className="see-all-button"
            onClick={() => navigate("/realisations")}
            aria-label="Voir toutes les réalisations"
          >
            Voir toutes nos réalisations
            <ChevronRight size={16} color="white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
