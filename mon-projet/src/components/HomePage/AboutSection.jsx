import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/HomePage/AboutSection.css";

import Image1 from "../../assets/photos/Home/20180614_160716.webp";
import Image2 from "../../assets/photos/Home/Capture.webp";
import Image3 from "../../assets/photos/Home/DSC_0779.webp";
import Icon from "../../assets/icons/picto_bulles.svg";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Grille d'images */}
          <div className="images-grid">
            <div
              className="image-container-1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src={Image1}
                alt="Système d’arrosage automatique installé dans un jardin paysager"
                className="about-image"
                loading="lazy"
              />
            </div>
            <div
              className="image-container-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img
                src={Image2}
                alt="Fontaine décorative design dans un espace vert public"
                className="about-image"
                loading="lazy"
              />
            </div>
            <div
              className="image-container-3"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img
                src={Image3}
                alt="Aménagement paysager complet avec gazon et massifs fleuris"
                className="about-image"
                loading="lazy"
              />
            </div>
          </div>

          {/* Colonne du texte */}
          <div
            className="text-column"
            data-aos="fade-left"
            data-aos-delay="700"
          >
            <div className="title-with-icon">
              <img
                src={Icon}
                alt="Icône décorative de bulles"
                className="icon-before-heading"
                loading="lazy"
              />
              <h2 className="about-heading">
                Pour des espaces verts d'exception
              </h2>
            </div>
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

            <button
              className="about-button"
              onClick={() => navigate("/neptune")}
              aria-label="En savoir plus sur Neptune, spécialiste de l'arrosage et des fontaines"
              data-aos="zoom-in"
              data-aos-delay="900"
            >
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
