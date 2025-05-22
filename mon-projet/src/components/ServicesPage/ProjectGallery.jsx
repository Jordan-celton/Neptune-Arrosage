import { Link } from "react-router-dom";
import "../../styles/ServicesPage/ProjectServices.css";
// import des images
import image1 from "../../assets/photos/Services/DSCF0989.webp";

// import des icônes
import IconLocation from "../../assets/icons/picto_gps.svg";

const ProjectGallery = () => {
  const projects = [
    {
      icon: IconLocation,
      date: "THIAIS (93) 27 MARS 2025",
      title: "Fontaine et mouvement d'eau",
      link: "#",
      image: image1,
    },
    {
      icon: IconLocation,
      date: "THIAIS (93) 27 MARS 2025",
      title: "Fontaine et mouvement d'eau",
      link: "#",
      image: image1,
    },
    {
      icon: IconLocation,
      date: "THIAIS (93) 27 MARS 2025",
      title: "Fontaine et mouvement d'eau",
      link: "#",
      image: image1,
    },
    // Ajoutez autant de projets que nécessaire
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
                alt={`Projet: ${project.title}`}
                className="project-image"
                loading="lazy"
              />
              <div className="project-overlay"></div>
            </div>

            <div className="project-info">
              <div className="project-header">
                <div className="project-icon-container">
                  <img
                    src={project.icon}
                    alt="Location icon"
                    className="project-icon"
                  />
                </div>
                <p className="project-date">{project.date}</p>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <Link
                to="/realisations"
                className="project-link"
                aria-label={`Lire la suite sur ${project.title}`}
              >
                Lire la suite
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
