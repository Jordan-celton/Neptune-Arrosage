import React, { useState } from "react";
import "../styles/ServicesPage/Services.css";
import Breadcrumb from "../components/ServicesPage/Breadcrumb";
import ServiceList from "../components/ServicesPage/ServiceList";
import ServiceDescription from "../components/ServicesPage/ServiceDescription";
import { servicesData } from "../components/ServicesPage/ServicesData";
import EmotionWaterBanner from "../components/ServicesPage/EmotionWaterBanner";
import ProjectGallery from "../components/ServicesPage/ProjectGallery";

const Services = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  return (
    <main className="services-page">
      <Breadcrumb title={selectedService.name} />
      <section className="services-section">
        <div className="services-list-container">
          <div className="services-overlay">
            <ServiceList
              services={servicesData}
              selectedService={selectedService}
              setSelectedService={setSelectedService}
            />
            <div className="services-icon">
              <img
                src={selectedService.icon}
                alt={`Icône de ${selectedService.name}`}
                className="service-list-icon"
              />
            </div>
          </div>
          <ServiceDescription service={selectedService} />
        </div>
      </section>
      <EmotionWaterBanner />
      <ProjectGallery />
    </main>
  );
};

export default Services;
