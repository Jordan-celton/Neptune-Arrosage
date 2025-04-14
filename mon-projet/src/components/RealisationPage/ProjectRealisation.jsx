import React, { useState } from "react";
import "../../styles/RealisationPage/ProjectRealisation.css";
import { IoLocationSharp } from "react-icons/io5";

// Import des images
import image1 from "../../assets/photos/Services/DSCF0989.webp";
import image2 from "../../assets/photos/Services/DSCF0989.webp";
import image3 from "../../assets/photos//Home/article_réalisation.webp";

const ProjectRealisation = () => {
  // Types de projets disponibles
  const projectTypes = [
    "Tous les projets",
    "Fontainerie",
    "Terrains sportifs",
    "Jardins espaces publics",
    "Materiel d'arrosage",
    "Contrats d'entretien",
    "Récupération d'eau de pluie",
  ];

  const [activeFilter, setActiveFilter] = useState("Tous les projets");

  // Données des projets avec catégories
  const projects = [
    {
      id: 1,
      icon: <IoLocationSharp className="project-icon" />,
      date: "THIAIS (93) 27 MARS 2025",
      title: "Fontaine et mouvement d'eau",
      link: "#",
      image: image1,
      type: "Fontainerie",
    },
    {
      id: 2,
      icon: <IoLocationSharp className="project-icon" />,
      date: "PARIS (75) 15 JUIN 2025",
      title: "Fontaine urbaine moderne",
      link: "#",
      image: image2,
      type: "Terrains sportifs",
    },
    {
      id: 3,
      icon: <IoLocationSharp className="project-icon" />,
      date: "LYON (69) 3 MAI 2025",
      title: "Arrosage terrain de football",
      link: "#",
      image: image3,
      type: "Materiel d'arrosage",
    },
    // Ajoutez d'autres projets...
  ];

  // Filtrer les projets selon la sélection
  const filteredProjects =
    activeFilter === "Tous les projets"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <section className="project-gallery">
      <div className="gallery-header">
        <h2 className="gallery-title">Découvrez nos derniers projets</h2>

        {/* Filtres */}
        <div className="project-filters">
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
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay"></div>
            </div>

            <div className="project-info">
              <div className="project-header">
                <div className="project-icon-container">{project.icon}</div>
                <p className="project-date">{project.date}</p>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <a href={project.link} className="project-link">
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
