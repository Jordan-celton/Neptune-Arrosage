import React from "react";
import "../styles/AboutSection.css";

// Import des images
import Image1 from "../assets/photos/AdobeStock_220745292.jpeg";
import Image2 from "../assets/photos/AdobeStock_220745292.jpeg";
import Image3 from "../assets/photos/AdobeStock_220745292.jpeg";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Grille d'images */}
          <div className="images-grid">
            <div className="image-container-1">
              <img
                src={Image1}
                alt="Projet d'arrosage"
                className="about-image"
              />
            </div>
            <div className="image-container-2">
              <img
                src={Image2}
                alt="Fontaine décorative"
                className="about-image"
              />
            </div>
            <div className="image-container-3">
              <img
                src={Image3}
                alt="Aménagement paysager"
                className="about-image"
              />
            </div>
          </div>

          {/* Colonne du texte */}
          <div className="text-column">
            <h2 className="about-heading">
              Pour des espaces verts d'exception
            </h2>
            <h3 className="about-subheading">
              L'art de l'eau & <span>de l'arrosage</span>
            </h3>

            <div className="about-text">
              <p>
                Forte de plus de 50 ans d'expérience, Neptune intervient sur des
                projets variés, allant des fontaines et miroirs d'eau aux
                terrains sportifs (golf, centres équestres, stades), en passant
                par les jardins et espaces publics.
              </p>
            </div>

            <button className="about-button">
              En savoir plus sur Neptune
              <span className="button-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
