import React, { useState } from "react";
import "../../styles/RealisationPage/ProjectRealisation.css";
import IconLocation from "../../assets/icons/picto_gps.svg";

// Import des images
import image1 from "../../assets/photos/Realisations/STADE.webp";
import image2 from "../../assets/photos/Realisations/HIPPO.webp";
import image3 from "../../assets/photos/Realisations/GOLF.webp";
import image4 from "../../assets/photos/Realisations/TRAM.webp";
import image5 from "../../assets/photos/Realisations/PARC.webp";
import image6 from "../../assets/photos/Realisations/FONTAINE.webp";

const ProjectRealisation = () => {
  const projectTypes = [
    "Tous les projets",
    "Stades",
    "Hippodromes",
    "Golfs",
    "Parcs et jardins",
    "Tramways",
    "Fontainerie",
  ];

  const [activeFilter, setActiveFilter] = useState("Tous les projets");
  const [selectedProject, setSelectedProject] = useState(null); // Pour la modale

  const projects = [
    {
      id: 1,
      icon: IconLocation,
      date: "ARGENTEUIL (93)",
      title: "Terrain de sport",
      link: "#",
      image: image1,
      type: "Stades",
    },
    {
      id: 2,
      icon: IconLocation,
      date: "LE LION D'ANGERS (49)",
      title: "Hippodrome",
      link: "#",
      image: image2,
      type: "Hippodromes",
    },
    {
      id: 3,
      icon: IconLocation,
      date: "BRESSUIRE (79)",
      title: "Golf",
      link: "#",
      image: image3,
      type: "Golfs",
    },
    {
      id: 4,
      icon: IconLocation,
      date: "ANGERS (49)",
      title: "Tramways d'Angers",
      link: "#",
      image: image4,
      type: "Tramways",
    },
    {
      id: 5,
      icon: IconLocation,
      date: "PARC DU PUY DU FOU (85)",
      title: "Parc et lieux culturels",
      link: "#",
      image: image5,
      type: "Parcs et jardins",
    },
    {
      id: 6,
      icon: IconLocation,
      date: "MONTGERON (91)",
      title: "Fontaines des rois grâces",
      link: "#",
      image: image6,
      type: "Fontainerie",
    },
  ];

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
              <button
                onClick={() => setSelectedProject(project)}
                className="projectRealisation-link"
              >
                Lire la suite
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODALE */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectRealisation;
