import React from "react";
import { FaWater, FaTree, FaFootballBall, FaTint } from "react-icons/fa";
import { TbFountainFilled } from "react-icons/tb";
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
      title: "Fats etien",
      description: "réalisation de ménagements illiques",
      link: "suite",
      image: Service1Img,
      icon: <FaTint className="service-icon" />,
    },
    {
      title: "Jardins & espaces publics",
      description: "Réalisation de jardins et d'espaces publics d'exception",
      link: "Lire la suite",
      image: Service2Img,
      icon: <FaTree className="service-icon" />,
    },
    {
      title: "Fontainerie",
      description:
        "Conception et réalisation de fontaines et d'aménagements hydrauliques",
      link: "Lire la suite",
      image: Service3Img,
      icon: <TbFountainFilled className="service-icon" />,
    },
    {
      title: "Terrains Sportifs",
      description:
        "Arrosage et maintenance des terrains sportifs pour la rénovation ou la création",
      link: "Lire la suite",
      image: Service4Img,
      icon: <FaFootballBall className="service-icon" />,
    },
    {
      title: "Maté d'arro",
      description: "Tuyaux P. goutte-à-gout: compres",
      link: "Lire la",
      image: Service5Img,
      icon: <FaWater className="service-icon" />,
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
            Des services adaptés à vos besoins
          </h1>
        </div>
      </div>

      <div className="services-scroll-container">
        <div className="services-cards">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="card-image-container">
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-image"
                />
                <div className="card-icon">{service.icon}</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
                <a href="#" className="card-link">
                  {service.link}
                  <span className="link-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
