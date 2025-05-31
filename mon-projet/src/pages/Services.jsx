import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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

  // Met à jour le service sélectionné à partir du hash de l'URL
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
  }, [location.hash]);

  // Valeurs SEO dynamiques
  const pageTitle = `Service - ${selectedService.name} | Neptune Arrosage`;
  const pageDescription = selectedService.description.slice(0, 155); // Pour éviter que ça dépasse
  const pageKeywords = `arrosage automatique, ${selectedService.name}, Neptune Arrosage, Loire Atlantique, Île-de-France`;

  return (
    <main className="services-page">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Neptune Arrosage" />
        <meta name="language" content="fr" />
        <link
          rel="canonical"
          href={`https://www.neptunearrosage.com/services${location.hash}`}
        />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:image"
          content="https://www.neptunearrosage.com/og-services.jpg"
        /> */}
        <meta
          property="og:url"
          content={`https://www.neptunearrosage.com/services${location.hash}`}
        />
      </Helmet>

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

      {/* Contenu SEO caché */}
      <div
        className="seo-hidden"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <h1>Nos services en arrosage automatique</h1>
        <p>
          Neptune Arrosage propose des services sur mesure pour l’arrosage
          automatique en Loire-Atlantique et Île-de-France : installation,
          entretien, programmation intelligente, fontainerie décorative, et bien
          plus encore.
        </p>
        <ul>
          {servicesData.map((service) => (
            <li key={service.id}>{service.name}</li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Services;
