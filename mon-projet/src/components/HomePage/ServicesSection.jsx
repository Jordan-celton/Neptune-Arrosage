import React from "react";
import { servicesHero, servicesList } from "../../data/servicesData";
import "../../styles/HomePage/ServicesSection.css";

const ServicesSection = () => {
  const handleServiceLinkClick = (e, anchor) => {
    if (window.location.pathname === "/services") {
      e.preventDefault();
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="services-section">
      {/* Bloc Hero */}
      <div className="hero-block">
        <div
          className="hero-image-container"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={servicesHero.image}
            alt="Services d'arrosage et d'aménagement paysager"
            className="hero-image"
            loading="eager"
            width={1200}
            height={800}
          />
        </div>
        <div
          className="hero-title-container"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h1 className="services-main-title">
            <img
              src={servicesHero.icon}
              alt=""
              className="iconService-before-heading"
              aria-hidden="true"
            />
            <span className="services-label">Nos services</span>
            <br />
            Des services adaptés <br />
            <span className="highlight-green">à vos besoins</span>
          </h1>
        </div>
      </div>

      {/* Grille des services */}
      <div className="services-overlay-container">
        <div className="services-scroller">
          <div
            className="services-cards"
            role="region"
            aria-label="Liste des services"
          >
            {servicesList.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                onLinkClick={handleServiceLinkClick}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// 💡 Animation individuelle pour chaque carte avec delay croissant
const ServiceCard = ({ service, onLinkClick, index }) => (
  <div
    className="service-card"
    data-aos="zoom-in-up"
    data-aos-delay={100 * index}
    data-aos-duration="600"
  >
    <div className="card-image-container">
      <img
        src={service.image}
        alt={`${service.title} - ${service.description}`}
        loading="lazy"
        width={400}
        height={300}
        className="serviceSection-image"
      />
    </div>
    <div className="icon-wrapper">
      <div className="card-icon-container">
        <img src={service.icon} alt="" aria-hidden="true" />
      </div>
    </div>
    <div className="card-content-services">
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <a
        href={`/services#${service.anchor}`}
        className="service-link"
        onClick={(e) => onLinkClick(e, service.anchor)}
        aria-label={`En savoir plus sur ${service.title}`}
      >
        Lire la suite <span aria-hidden="true">→</span>
      </a>
    </div>
  </div>
);

export default ServicesSection;
