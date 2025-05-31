import React, { useState } from "react";
import "../../styles/RealisationPage/ProjectRealisation.css";
import { projectTypes, projects } from "../../data/projectsData";

const ProjectRealisation = () => {
  const [activeFilter, setActiveFilter] = useState("Tous les projets");
  const [selectedProject, setSelectedProject] = useState(null);

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
