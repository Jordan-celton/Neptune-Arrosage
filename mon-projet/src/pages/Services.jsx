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

    // Vérifie si l'ID du service existe dans l'URL et le met à jour
    if (hash) {
      const matchedService = servicesData.find(
        (service) => service.id === hash
      );
      if (matchedService) {
        setSelectedService(matchedService);
      }
    }
  }, [location.hash]); // Dépendance à location.hash uniquement

  return (
    <main className="services-page">
      <Breadcrumb title={selectedService.name} />

      {/* Section principale des services */}
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

          {/* Description du service sélectionné */}
          <ServiceDescription service={selectedService} />
        </div>
      </section>

      {/* Bannière et galerie de projets */}
      <EmotionWaterBanner />
      <ProjectGallery />
    </main>
  );
};

export default Services;
