import React, { useState, useEffect } from "react";
import { servicesHero, servicesList } from "../../data/servicesData";
import "../../styles/HomePage/ServicesSection.css";
import Carousel from "../HomePage/Carousel";

const ServicesSection = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setIsMobileOrTablet(true); // Pass to column for mobile/tablet
      } else {
        setIsMobileOrTablet(false); // Default to row for desktop
      }
    };

    handleResize(); // Check size on mount
    window.addEventListener("resize", handleResize); // Listen to resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  const handleServiceLinkClick = (e, anchor) => {
    if (window.location.pathname === "/services") {
      e.preventDefault();
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="services-section"
      aria-labelledby="services-main-heading"
    >
      {/* Bloc Hero */}
      <div className="hero-block">
        <div
          className="hero-image-container"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={servicesHero.image}
            alt="Illustration d'aménagement paysager avec systèmes d’arrosage"
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
          <h1 className="services-main-title" id="services-main-heading">
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
          {/* Pass the isMobileOrTablet prop to adjust the carousel layout */}
          <Carousel isMobileOrTablet={isMobileOrTablet}>
            {servicesList.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                onLinkClick={handleServiceLinkClick}
                index={index}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, onLinkClick, index }) => (
  <article
    className="service-card"
    data-aos="zoom-in-up"
    data-aos-delay={100 * index}
    data-aos-duration="600"
  >
    <div className="card-image-container">
      <img
        src={service.image}
        alt={`Service : ${service.title} – ${service.description}`}
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
        aria-label={`En savoir plus sur le service ${service.title}`}
      >
        Lire la suite
      </a>
    </div>
  </article>
);

export default ServicesSection;
