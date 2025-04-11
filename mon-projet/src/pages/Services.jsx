import React, { useState } from "react";
import "../styles/ServicesPage/Services.css";

// Imports des images et icônes
import fontaine from "../assets/photos/Services/Fontaine Rueil Imp 1.webp";
import terrains from "../assets/photos/Home/article_réalisation.webp";
import jardins from "../assets/photos/Home/services_jardins_parcs.webp";
import materiel from "../assets/photos/Home/sprinkler-498514_1920.webp";
import contrats from "../assets/photos/Home/DSC_0767.webp";
import recuperation from "../assets/photos/Home/water-1544808_1280.webp";

import iconFontaine from "../assets/icons/picto_fontainerie.svg";
import iconSport from "../assets/icons/picto_terrains_sportifs.svg";
import iconJardin from "../assets/icons/picto_parc_jardins.svg";
import iconMateriel from "../assets/icons/picto_materiel_arrosage.svg";
import iconContrat from "../assets/icons/picto_contrats_entretien.svg";
import iconEau from "../assets/icons/picto_bulles.svg";

// Données des services
const servicesData = [
  {
    name: "Fontainerie",
    description:
      "Neptune Arrosage possède une solide expertise dans la conception et la réalisation de fontaines et d'aménagements hydrauliques, alliant génie civil, stations de pompage, traitement et filtration de l'eau.",
    image: fontaine,
    icon: iconFontaine,
  },
  {
    name: "Terrains sportifs",
    description:
      "Installation et entretien de systèmes d’arrosage pour terrains de sport. Optimisation de la couverture, régulation automatisée, et maintenance.",
    image: terrains,
    icon: iconSport,
  },
  {
    name: "Jardins & espaces",
    description:
      "Aménagement paysager et gestion de l’arrosage pour les espaces verts publics ou privés. Solutions esthétiques et écologiques.",
    image: jardins,
    icon: iconJardin,
  },
  {
    name: "Matériel d'arrosage",
    description:
      "Fourniture de matériel professionnel d’arrosage : tuyères, programmateurs, électrovannes, capteurs, etc.",
    image: materiel,
    icon: iconMateriel,
  },
  {
    name: "Contrats d'entretien",
    description:
      "Contrats de maintenance préventive et curative pour assurer la longévité de vos installations.",
    image: contrats,
    icon: iconContrat,
  },
  {
    name: "Récupération EP",
    description:
      "Systèmes de récupération et de gestion des eaux pluviales pour un usage raisonné et durable de l’eau.",
    image: recuperation,
    icon: iconEau,
  },
];

// Fil d’Ariane dynamique
const Breadcrumb = ({ title }) => (
  <section className="breadcrumb-section">
    <div className="breadcrumb-overlay">
      <header className="services-header">
        <h1>{title}</h1>
      </header>
      <nav aria-label="Fil d'Ariane" className="breadcrumb">
        <ol>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/services">Nos services</a>
          </li>
          <li aria-current="page">{title}</li>
        </ol>
      </nav>
    </div>
  </section>
);

// Liste de services
const ServiceList = ({ services, selectedService, setSelectedService }) => (
  <>
    <h2 className="section-title">Nos services</h2>
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

// Description dynamique
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

// Composant principal
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
                className="service-icon"
              />
            </div>
          </div>
          <ServiceDescription service={selectedService} />
        </div>
      </section>
    </main>
  );
};

export default Services;
