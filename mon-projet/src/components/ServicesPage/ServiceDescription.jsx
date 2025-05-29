import React from "react";
import PropTypes from "prop-types";
import "../../styles/ServicesPage/ServiceDescription.css";

const ServiceDescription = ({ service }) => {
  // Vérifier si l'objet service existe et ses propriétés
  if (!service || !service.image || !service.name || !service.description) {
    return null; // Ne rien rendre si les données sont manquantes
  }

  return (
    <div className="services-image-section">
      <img
        src={service.image}
        alt={`Illustration de ${service.name}`}
        className="service-image"
        loading="lazy"
      />
      <h2 className="description-title">
        <span className="description-title1">
          {service.name} – de la conception
        </span>{" "}
        <br />
        <span className="description-title2">à l'aménagement</span>
      </h2>
      <p className="description-text">{service.description}</p>
    </div>
  );
};

// Ajouter PropTypes pour vérifier les types des props
ServiceDescription.propTypes = {
  service: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServiceDescription;
