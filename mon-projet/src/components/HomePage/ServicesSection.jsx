import React from "react";
import ServiceImage from "../../assets/photos/Home/bg_nos_services.webp";
import Service1Img from "../../assets/photos/Home/DSC_0767.webp";
import Service2Img from "../../assets/photos/Home/20200512_155618.webp";
import Service3Img from "../../assets/photos/Home/Fontaine 2.webp";
import Service4Img from "../../assets/photos/Home/article_réalisation.webp";
import Service5Img from "../../assets/photos/Home/sprinkler-498514_1920.webp";

import Icon from "../../assets/icons/picto_bulles.svg";
import icon1 from "../../assets/icons/picto_contrats_entretien.svg";
import icon2 from "../../assets/icons/picto_parc_jardins.svg";
import icon3 from "../../assets/icons/picto_fontainerie.svg";
import icon4 from "../../assets/icons/picto_terrains_sportifs.svg";
import icon5 from "../../assets/icons/picto_materiel_arrosage.svg";
import "../../styles/HomePage/ServicesSection.css";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Contrats d'entretien",
      description:
        "Entretien et maintenance de vos installations d'arrosage automatique",
      icon: (
        <img src={icon1} alt="Contrats d'entretien" className="service-icon" />
      ),
      image: Service1Img,
      anchor: "contrats",
    },
    {
      id: 2,
      title: "Jardins & espaces publics",
      description: "Réalisation de jardins et d'espaces publics d'exception",
      icon: <img src={icon2} alt="" className="service-icon" />,
      image: Service2Img,
      anchor: "jardins",
    },
    {
      id: 3,
      title: "Fontainerie",
      description:
        "Conception et réalisation de fontaines et d'aménagements hydrauliques",
      icon: <img src={icon3} alt="" className="service-icon" />,
      image: Service3Img,
      anchor: "fontaines",
    },
    {
      id: 4,
      title: "Terrains Sportifs",
      description:
        "Arrosage et maintenance des terrains sportifs pour la rénovation ou la création",
      icon: <img src={icon4} alt="" className="service-icon" />,
      image: Service4Img,
      anchor: "sports",
    },
    {
      id: 5,
      title: "Matériel d'arrosage",
      description: "Vente de matériel d'arrosage et de jardinage",
      icon: <img src={icon5} alt="" className="service-icon" />,
      image: Service5Img,
      anchor: "materiel",
    },
  ];

  return (
    <section className="services-section">
      {/* Hero Block avec image et titre */}
      <div className="hero-block">
        <div className="hero-image-container">
          <img
            src={ServiceImage}
            alt="Services d'arrosage et d'aménagement paysager"
            className="hero-image"
            loading="eager" // Prioritaire car visible
            width="1200"
            height="800"
          />
        </div>
        <div className="hero-title-container">
          <h1 className="services-main-title">
            <img src={Icon} alt="" className="icon-before-heading" />
            Des services adaptés <span>à vos besoins</span>
          </h1>
        </div>
      </div>

      {/* Section des services avec effet de chevauchement */}
      <div className="services-overlay-container">
        <div className="services-scroller">
          <div
            className="services-cards"
            role="region"
            aria-label="Liste des services"
            tabIndex="0"
          >
            {services.map((service) => (
              <div className="service-card" key={service.id}>
                <div className="card-image-container">
                  <img
                    src={service.image}
                    alt={`${service.title} - ${service.description}`} // Texte alt unique
                    className="card-image"
                    loading="lazy"
                    width="320" // Dimensions explicites
                    height="200"
                  />
                </div>
                <div className="card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a
                    href={`/services#${service.anchor}`} // Lien vers la page Services avec ancre
                    className="service-link"
                    onClick={(e) => {
                      // Si vous êtes déjà sur la page Services
                      if (window.location.pathname === "/services") {
                        e.preventDefault();
                        document
                          .getElementById(service.anchor)
                          ?.scrollIntoView({
                            behavior: "smooth",
                          });
                      }
                    }}
                  >
                    Lire la suite <span>→</span>
                  </a>
                </div>
                <div className="card-icon-container">{service.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
