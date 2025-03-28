import React from "react";
import "../styles/ServicesSection.css";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      image: "/assets/arrosage.jpg",
      title: "Arrosage automatique",
      description: "Systèmes intelligents avec programmation",
      buttonText: "En savoir plus",
    },
    {
      id: 2,
      image: "/assets/fontaines.jpg",
      title: "Fontaines décoratives",
      description: "Éléments aquatiques design",
      buttonText: "En savoir plus",
    },
    {
      id: 3,
      image: "/assets/eclairage.jpg",
      title: "Éclairage de jardin",
      description: "Mise en valeur nocturne",
      buttonText: "En savoir plus",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Nos solutions</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div
                className="service-image"
                style={{ backgroundImage: `url('${service.image}')` }}
                aria-label={service.title}
              ></div>
              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="service-button">{service.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
