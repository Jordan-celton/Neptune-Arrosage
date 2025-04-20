import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/ServicesPage/Services.css";
import Breadcrumb from "../components/ServicesPage/Breadcrumb";
import ServiceList from "../components/ServicesPage/ServiceList";
import ServiceDescription from "../components/ServicesPage/ServiceDescription";
import { servicesData } from "../components/ServicesPage/ServicesData";
import EmotionWaterBanner from "../components/ServicesPage/EmotionWaterBanner";
import ProjectGallery from "../components/ServicesPage/ProjectGallery";

const Services = () => {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  // Mise à jour du service sélectionné selon le hash dans l'URL
  useEffect(() => {
    const hash = location.hash.replace("#", "").toLowerCase();

    if (hash) {
      const matchedService = servicesData.find(
        (service) => service.id === hash
      );
      if (matchedService) {
        setSelectedService(matchedService);
      }
    }
  }, [location.pathname, location.hash]);

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
                className="service-page-icon"
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
