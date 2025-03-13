import React from "react";
import "../styles/HomeServices.css";

const HomeServices = () => {
  return (
    <section className="home-services-container">
      <div className="home-services-title">
        <h1 className="services-title">Nos Prestations</h1>
      </div>
      <div className="services">
        {[
          {
            title: "Arrosage automatique",
            description:
              "Nous concevons des systèmes d’arrosage automatique sur-mesure pour jardins, espaces publics et terrains sportifs, afin d’optimiser la gestion de l’eau.",
          },
          {
            title: "Aménagement hydraulique",
            description:
              "Conception et réalisation de systèmes d’aménagements hydrauliques, tels que fontaines, miroirs d’eau et bassins, pour embellir vos espaces extérieurs.",
          },
          {
            title: "Gestion durable de l'eau",
            description:
              "Solutions innovantes pour une gestion raisonnée de l’eau : récupération des eaux de pluie, pompage des eaux de surface et réutilisation des eaux grises.",
          },
        ].map((service, index) => (
          <div key={index} className="service-item">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
