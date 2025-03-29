import React from "react";
import { FaTools, FaSeedling, FaTint } from "react-icons/fa";
import { GiSoccerField } from "react-icons/gi";
import { TbFountain } from "react-icons/tb";
import "../styles/ServicesSection.css";

// Importez vos images (à adapter avec vos chemins)
import Service1Img from "../assets/photos/AdobeStock_220745292.jpeg";
import Service2Img from "../assets/photos/AdobeStock_220745292.jpeg";
import Service3Img from "../assets/photos/AdobeStock_220745292.jpeg";
import Service4Img from "../assets/photos/AdobeStock_220745292.jpeg";
import Service5Img from "../assets/photos/AdobeStock_220745292.jpeg";
import ServiceImage from "../assets/photos/AdobeStock_220745292.jpeg";
const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Contrats d'entretien",
      description:
        "Entretien et maintenance de vos installations d'arrosage automatique",
      link: "Lire la suite",
      image: Service1Img,
      icon: <FaTools className="service-icon" />, // Plus représentatif de la maintenance
    },
    {
      id: 2,
      title: "Jardins & espaces publics",
      description: "Réalisation de jardins et d'espaces publics d'exception",
      link: "Lire la suite",
      image: Service2Img,
      icon: <FaSeedling className="service-icon" />, // Meilleur pour les jardins
    },
    {
      id: 3,
      title: "Fontainerie",
      description:
        "Conception et réalisation de fontaines et d'aménagements hydrauliques",
      link: "Lire la suite",
      image: Service3Img,
      icon: <TbFountain className="service-icon" />, // Plus évocateur pour les fontaines
    },
    {
      id: 4,
      title: "Terrains Sportifs",
      description:
        "Arrosage et maintenance des terrains sportifs pour la rénovation ou la création",
      link: "Lire la suite",
      image: Service4Img,
      icon: <GiSoccerField className="service-icon" />, // Plus spécifique aux terrains sportifs
    },
    {
      id: 5,
      title: "Matériel d'arrosage",
      description: "Vente de matériel d'arrosage et de jardinage",
      link: "Lire la suite",
      image: Service5Img,
      icon: <FaTint className="service-icon" />, // Gardé car pertinent pour l'arrosage
    },
  ];

  return (
    <section className="services-section">
      {/* Premier élément : Image à gauche / Titre à droite */}
      <div className="hero-block">
        <div className="hero-image-container">
          <img
            src={ServiceImage}
            alt="Services Neptune"
            className="hero-image"
          />
        </div>
        <div className="hero-title-container">
          <h1 className="services-main-title">
            Des services adaptés <span>à vos besoins</span>
          </h1>
        </div>
      </div>

      <div className="services-scroll-container">
        <div className="services-cards">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={service.id || `service-${index}`}
            >
              <div className="card-image-container">
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-image"
                  loading="lazy" // Optimisation du chargement
                />
                <div className="card-icon" aria-hidden="true">
                  {service.icon}
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
                <div className="card-link-container">
                  <a
                    href="#"
                    className="card-link"
                    aria-label={`En savoir plus sur ${service.title}`}
                  >
                    {service.link}
                    <span className="link-arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
