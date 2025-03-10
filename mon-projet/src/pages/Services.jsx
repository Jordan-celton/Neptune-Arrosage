import React from "react";
import "../styles/Services.css";
import image1 from "../assets/photos/20200512_155618.webp";
import image2 from "../assets/photos/20180614_160716.webp";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeContact from "../components/HomeContact";

const servicesData = [
  {
    title: "Arrosage automatique",
    description:
      "Optimisez l’irrigation avec nos systèmes intelligents, adaptés à tous types d’espaces verts.",
    image: image1,
    details: "Systèmes intelligents avec capteurs météo et programmateurs.",
    time: "Installation en 2 à 3 jours",
  },
  {
    title: "Aménagement hydraulique",
    description: "Ajoutez une touche d’élégance avec nos fontaines et bassins.",
    image: image2,
    details: "Conceptions sur mesure adaptées à votre jardin.",
    time: "Installation en 5 jours",
  },
];

const galleryImages = [
  image1,
  image2,
  "/images/realisation1.jpg",
  "/images/realisation2.jpg",
];

const Services = () => {
  return (
    <section className="services-container">
      <h1 className="services-title">Nos Services</h1>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p>
                <strong>Détails:</strong> {service.details}
              </p>
              <p>
                <strong>Temps d'installation:</strong> {service.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery">
        <h2>Nos Réalisations</h2>
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          {galleryImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Réalisation ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="process">
        <h2>Notre Processus</h2>
        <ul>
          <li>
            <strong>1. Consultation :</strong> Analyse des besoins et devis.
          </li>
          <li>
            <strong>2. Conception :</strong> Plan et validation du projet.
          </li>
          <li>
            <strong>3. Installation :</strong> Mise en place et tests.
          </li>
          <li>
            <strong>4. Suivi :</strong> Entretien et assistance après
            installation.
          </li>
        </ul>
      </div>

      <div className="cta-section">
        <HomeContact />
      </div>
    </section>
  );
};

export default Services;
