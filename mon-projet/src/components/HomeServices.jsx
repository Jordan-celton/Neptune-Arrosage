import React from "react";
import "../styles/HomeServices.css";
import { FaTint, FaWater, FaLeaf } from "react-icons/fa";

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
          },
          {
            title: "Fontaines & Bassins",
            description:
              "Conception et installation de fontaines et bassins pour embellir vos espaces extérieurs tout en respectant l'environnement.",
            icon: <FaWater />,
          },
          {
            title: "Économie d'Eau",
            description:
              "Solutions innovantes pour une gestion durable de l'eau : récupération des eaux de pluie, systèmes de réutilisation et optimisation des ressources.",
            icon: <FaLeaf />,
          },
        ].map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
