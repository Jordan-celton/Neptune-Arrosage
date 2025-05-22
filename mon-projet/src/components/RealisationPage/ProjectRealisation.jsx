import React, { useState } from "react";
import "../../styles/RealisationPage/ProjectRealisation.css";
import IconLocation from "../../assets/icons/picto_gps.svg";

// Import des images
import image1 from "../../assets/photos/Services/DSCF0989.webp";
import image3 from "../../assets/photos/Home/article_réalisation.webp";

const ProjectRealisation = () => {
  // Types de projets disponibles
  const projectTypes = [
    "Fontainerie",
    "Terrains sportifs",
    "Jardins espaces publics",
    "Materiel d'arrosage",
    "Contrats d'entretien",
    "Récupération d'eau de pluie",
  ];

  // État pour le filtre actif
  const [activeFilter, setActiveFilter] = useState("Tous les projets");

  // Données des projets avec catégories
  const projects = [
    {
      id: 1,
      icon: IconLocation,
      date: "THIAIS (93) 27 MARS 2025",
      title: "Fontaine et mouvement d'eau",
      link: "#",
      image: image1,
      type: "Fontainerie",
    },
    {
      id: 2,
      icon: IconLocation,
      date: "PARIS (75) 15 JUIN 2025",
      title: "Fontaine urbaine moderne",
      link: "#",
      image: image1,
      type: "Terrains sportifs",
    },
    {
      id: 3,
      icon: IconLocation,
      date: "LYON (69) 3 MAI 2025",
      title: "Arrosage terrain de football",
      link: "#",
      image: image3,
      type: "Materiel d'arrosage",
    },
    {
      id: 4,
      icon: IconLocation,
      date: "LYON (69) 3 MAI 2025",
      title: "Arrosage terrain de football",
      link: "#",
      image: image3,
      type: "Jardins espaces publics",
    },
    {
      id: 5,
      icon: IconLocation,
      date: "LYON (69) 3 MAI 2025",
      title: "Arrosage terrain de football",
      link: "#",
      image: image3,
      type: "Contrats d'entretien",
    },
    {
      id: 6,
      icon: IconLocation,
      date: "LYON (69) 3 MAI 2025",
      title: "Arrosage terrain de football",
      link: "#",
      image: image3,
      type: "Récupération d'eau de pluie",
    },
    // Ajoutez d'autres projets ici si nécessaire
  ];

  // Filtrer les projets selon la sélection
  const filteredProjects =
    activeFilter === "Tous les projets"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <section className="projectRealisation-gallery">
      <div className="galleryRealisation-header">
        <h2 className="galleryRealisation-title">
          Découvrez nos derniers projets
        </h2>

        {/* Filtres */}
        <div className="projectRealisation-filters">
          {projectTypes.map((type) => (
            <button
              key={type}
              className={`filter-btn ${activeFilter === type ? "active" : ""}`}
              onClick={() => setActiveFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Grille de projets filtrés */}
      <div className="projectsRealisation-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="projectRealisation-card">
            <div className="projectRealisation-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="projectRealisation-image"
              />
              <div className="projectRealisation-overlay"></div>
            </div>

            <div className="projectRealisation-info">
              <div className="projectRealisation-header">
                <div className="projectRealisation-icon-container">
                  <img
                    src={project.icon}
                    alt="Location icon"
                    className="projectRealisation-icon"
                  />
                </div>
                <p className="projectRealisation-date">{project.date}</p>
              </div>
              <h3 className="projectRealisation-title">{project.title}</h3>
              <a href={project.link} className="projectRealisation-link">
                Lire la suite
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectRealisation;
