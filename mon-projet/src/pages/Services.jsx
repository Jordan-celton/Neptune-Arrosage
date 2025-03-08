import React, { useState } from "react";
import "../styles/Services.css";
import image1 from "../assets/photos/20200512_155618.webp";
import image2 from "../assets/photos/20180614_160716.webp";

// Données des services
const servicesData = [
  {
    title: "Arrosage automatique",
    description:
      "Optimisez l’irrigation avec nos systèmes intelligents, adaptés à tous types d’espaces verts. Nos solutions permettent de réduire la consommation d'eau tout en maintenant des espaces verts luxuriants.",
    image: image1,
    details:
      "Nous utilisons des capteurs météo et des programmateurs pour ajuster l'arrosage en fonction des conditions climatiques.",
    price: "À partir de 1500€",
    time: "Installation en 2 à 3 jours",
    category: "arrosage",
  },
  {
    title: "Aménagement hydraulique",
    description:
      "Apportez une touche d’élégance avec nos fontaines, miroirs d’eau et bassins sur-mesure. Idéal pour embellir vos espaces extérieurs.",
    image: image2,
    details:
      "Nous concevons des installations sur mesure pour s'adapter à vos préférences et à l'esthétique de votre jardin.",
    price: "À partir de 2500€",
    time: "Installation en 5 jours",
    category: "hydraulique",
  },
  {
    title: "Gestion durable de l'eau",
    description:
      "Réduisez votre consommation grâce à des solutions de récupération et de réutilisation de l’eau.",
    image: "/images/gestion-eau.jpg",
    details:
      "Nous installons des systèmes pour collecter l'eau de pluie et réutiliser les eaux grises, réduisant ainsi l'empreinte écologique.",
    price: "À partir de 1200€",
    time: "Installation en 2 jours",
    category: "eau",
  },
];

// Témoignages clients
const testimonials = [
  {
    name: "Jean Dupont",
    feedback:
      "Le système d'arrosage automatique a changé la gestion de mon jardin. Un gain de temps et d'eau considérable !",
  },
  {
    name: "Marie Martin",
    feedback:
      "L'aménagement de la fontaine a transformé mon jardin. Très satisfait du service et de l'installation.",
  },
];

const Services = () => {
  const [filter, setFilter] = useState("all");

  // Filtrer les services en fonction de la catégorie
  const filteredServices = servicesData.filter(
    (service) => filter === "all" || service.category === filter
  );

  return (
    <section className="services-container">
      {/* Titre */}
      <h1 className="services-title">Nos Services</h1>

      {/* Filtres */}
      <div className="filters">
        <button onClick={() => setFilter("all")}>Tous</button>
        <button onClick={() => setFilter("arrosage")}>Arrosage</button>
        <button onClick={() => setFilter("hydraulique")}>Hydraulique</button>
        <button onClick={() => setFilter("eau")}>Gestion de l'eau</button>
      </div>

      {/* Grille des services */}
      <div className="services-grid">
        {filteredServices.map((service, index) => (
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
                <strong>Prix:</strong> {service.price}
              </p>
              <p>
                <strong>Temps d'installation:</strong> {service.time}
              </p>
              <button className="service-btn">En savoir plus</button>
            </div>
          </div>
        ))}
      </div>

      {/* Témoignages */}
      <div className="testimonials">
        <h2>Témoignages</h2>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <p>"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>

      {/* Appel à l'action */}
      <div className="cta-section">
        <h2>
          Prêt à faire passer vos espaces extérieurs au niveau supérieur ?
        </h2>
        <a href="mailto:contact@neptune-arrosage.fr?subject=Demande de devis&body=Bonjour, je souhaite obtenir un devis pour...">
          <button className="cta-btn">Demander un devis</button>
        </a>
      </div>
    </section>
  );
};

export default Services;
