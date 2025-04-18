import React from "react";
import "../../styles/ServicesPage/ProjectGallery.css";

// import des images
import image1 from "../../assets/photos/Services/DSCF0989.webp";

// import des icônes
import { IoLocationSharp } from "react-icons/io5";

const ProjectGallery = () => {
  const projects = [
    {
      icon: <IoLocationSharp className="project-icon" />,
      date: "THIAIS (93) 27 MARS 2025",
      title: "Fontaine et mouvement d'eau",
      link: "#",
      image: image1,
    },
    {
      icon: <IoLocationSharp className="project-icon" />,
      date: "THIAIS (93) 27 MARS 2025",
      title: "Fontaine et mouvement d'eau",
      link: "#",
      image: image1,
    },
    {
      icon: <IoLocationSharp className="project-icon" />,
      date: "THIAIS (93) 27 MARS 2025",
      title: "Fontaine et mouvement d'eau",
      link: "#",
      image: image1,
    },
    // Ajoutez autant de projets que nécessaire en suivant la même structure
    // Les données pourraient aussi venir d'une API ou d'un fichier JSON
  ];

  return (
    <section className="project-gallery">
      <h2 className="gallery-title">Découvrez nos derniers projets</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
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

export default ProjectGallery;
