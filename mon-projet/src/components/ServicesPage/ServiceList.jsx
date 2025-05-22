import React from "react";
import "../../styles/ServicesPage/ServiceList.css";

const ServiceList = ({ services, selectedService, setSelectedService }) => (
  <>
    <h2 className="section-services-title">Nos services</h2>
    <ul className="services-list">
      {services.map((service) => {
        const slug = service.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/\s+/g, "-");

        const isActive = selectedService.name === service.name;

        return (
          <li
            key={slug}
            className={`service-item ${isActive ? "active" : ""}`}
            onClick={() => setSelectedService(service)}
          >
            <img
              src={service.icon}
              alt={`Icône de ${service.name}`}
              className={`icon-serviceList ${isActive ? "icon-active" : ""}`}
            />

            <div className="service-icon">
              <img
                src={service.icon}
                alt={`Icône de ${service.name}`}
                className="service-list-icon"
              />
            </div>
            <a href={`#${slug}`} className="service-link-page">
              {service.name}
              <span className="arrow-icon">{isActive ? "✔" : "→"}</span>
            </a>
          </li>
        );
      })}
    </ul>
  </>
);

export default ServiceList;
