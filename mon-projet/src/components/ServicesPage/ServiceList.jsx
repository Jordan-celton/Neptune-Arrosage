import React from "react";
import "../../styles/ServicesPage/ServiceList.css";

const ServiceList = ({ services, selectedService, setSelectedService }) => (
  <>
    <h2
      className="section-services-title"
      data-aos="fade-down"
      data-aos-duration="800"
    >
      Nos services
    </h2>
    <ul className="services-list">
      {services.map((service, index) => {
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
            data-aos="fade-right"
            data-aos-delay={index * 100} // décalage pour animation en cascade
            data-aos-duration="600"
          >
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
