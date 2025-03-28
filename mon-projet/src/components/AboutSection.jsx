import React from "react";
import "../styles/AboutSection.css";

// Import des images (à adapter avec vos chemins)
import FontaineImg from "../assets/photos/AdobeStock_220745292.jpeg";
import GolfImg from "../assets/photos/AdobeStock_220745292.jpeg";
import JardinImg from "../assets/photos/AdobeStock_220745292.jpeg";

const About = () => {
  const projects = [
    {
      id: 1,
      image: FontaineImg,
      title: "Fontaines",
      category: "fontaines",
    },
    {
      id: 2,
      image: GolfImg,
      title: "Terrains de golf",
      category: "sport",
    },
    {
      id: 3,
      image: JardinImg,
      title: "Jardins privés",
      category: "jardin",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Partie texte */}
        <div className="about-content">
          <h2 className="about-heading">Pour des espaces verts d'exception</h2>
          <h3 className="about-subheading">L'art de l'eau & de l'arrosage</h3>

          <div className="about-text">
            <p>
              Forte de plus de 50 ans d'expérience, Neptune intervient sur des
              projets variés, allant des fontaines et miroirs d'eau aux terrains
              sportifs (golf, centres équestres, stades), en passant par les
              jardins et espaces publics.
            </p>
          </div>

          <button className="about-button">
            En savoir plus sur Neptune
            <span className="button-arrow">→</span>
          </button>
        </div>

        {/* Partie images avec Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              className={`project-item ${project.category}`}
              key={project.id}
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="project-overlay">
                <h4>{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
