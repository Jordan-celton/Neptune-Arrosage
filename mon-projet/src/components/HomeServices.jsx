import React from "react";
import "../styles/HomeServices.css";
import { FaTint, FaWater, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeServices = () => {
  return (
    <section className="home-services-container">
      <div className="home-services-title">
        <h1 className="services-title">Nos Prestations</h1>
      </div>
      <div className="services">
        {[
          {
            title: "Arrosage Automatique",
            description:
              "Des systèmes d'arrosage sur-mesure pour jardins, espaces verts et terrains sportifs, conçus pour optimiser l'utilisation de l'eau.",
            icon: <FaTint />,
            link: "/arrosage-automatique",
          },
          {
            title: "Fontaines & Bassins",
            description:
              "Conception et installation de fontaines et bassins pour embellir vos espaces extérieurs tout en respectant l'environnement.",
            icon: <FaWater />,
            link: "/fontaines-bassins",
          },
          {
            title: "Économie d'Eau",
            description:
              "Solutions innovantes pour une gestion durable de l'eau : récupération des eaux de pluie, systèmes de réutilisation et optimisation des ressources.",
            icon: <FaLeaf />,
            link: "/economie-eau", // Lien vers la page correspondante
          },
        ].map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {/* Bouton "En savoir plus" avec react-router-dom */}
            <Link to={service.link} className="service-button">
              En savoir plus
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
