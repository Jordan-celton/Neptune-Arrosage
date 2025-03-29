import React from "react";
import { FaTools, FaSeedling, FaTint } from "react-icons/fa";
import { GiSoccerField } from "react-icons/gi";
import { TbFountain } from "react-icons/tb";
import ServiceImage from "../assets/photos/AdobeStock_220745292.jpeg";
import Service1Img from "../assets/photos/AdobeStock_220745292.jpeg";
import Service2Img from "../assets/photos/AdobeStock_220745292.jpeg";
import Service3Img from "../assets/photos/AdobeStock_220745292.jpeg";
import Service4Img from "../assets/photos/AdobeStock_220745292.jpeg";
import Service5Img from "../assets/photos/AdobeStock_220745292.jpeg";
import "../styles/ServicesSection.css";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Contrats d'entretien",
      description:
        "Entretien et maintenance de vos installations d'arrosage automatique",
      icon: <FaTools className="service-icon" />,
      image: Service1Img,
    },
    {
      id: 2,
      title: "Jardins & espaces publics",
      description: "Réalisation de jardins et d'espaces publics d'exception",
      icon: <FaSeedling className="service-icon" />,
      image: Service2Img,
    },
    {
      id: 3,
      title: "Fontainerie",
      description:
        "Conception et réalisation de fontaines et d'aménagements hydrauliques",
      icon: <TbFountain className="service-icon" />,
      image: Service3Img,
    },
    {
      id: 4,
      title: "Terrains Sportifs",
      description:
        "Arrosage et maintenance des terrains sportifs pour la rénovation ou la création",
      icon: <GiSoccerField className="service-icon" />,
      image: Service4Img,
    },
    {
      id: 5,
      title: "Matériel d'arrosage",
      description: "Vente de matériel d'arrosage et de jardinage",
      icon: <FaTint className="service-icon" />,
      image: Service5Img,
    },
  ];

  return (
    <section className="services-section">
      {/* Hero Block avec image et titre */}
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

      {/* Section des services avec effet de chevauchement */}
      <div className="services-overlay-container">
        <div className="services-scroller">
          <div className="services-cards">
            {services.map((service) => (
              <div className="service-card" key={service.id}>
                <div className="card-image-container">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="card-image"
                    loading="lazy"
                  />
                  <div className="card-icon-container">{service.icon}</div>
                </div>
                <div className="card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#" className="service-link">
                    Lire la suite <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
