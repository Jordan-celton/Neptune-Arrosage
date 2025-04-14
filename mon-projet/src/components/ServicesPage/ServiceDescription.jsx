import React from "react";
import "../../styles/ServicesPage/ServiceDescription.css";

const ServiceDescription = ({ service }) => (
  <div className="services-image-section animate delay-1">
    <img
      src={service.image}
      alt={`Illustration de ${service.name}`}
      className="service-image"
    />
    <h2 className="description-title">
      {service.name} – de la conception à l'aménagement
    </h2>
    <p className="description-text">{service.description}</p>
  </div>
);

export default ServiceDescription;
