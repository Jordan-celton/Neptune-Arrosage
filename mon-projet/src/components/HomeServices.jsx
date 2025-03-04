import React from "react";
import "../styles/HomeServices.css";

const HomeServices = () => {
  return (
    <section className="home-services-container">
      <div className="home-services-title">
        <h1>Nos Services</h1>
      </div>
      <div className="services">
        <div className="service-item">
          <h3>Arrosage automatique</h3>
          <p>
            Nous concevons des systèmes d’arrosage automatique sur-mesure pour
            jardins, espaces publics et terrains sportifs, afin d’optimiser la
            gestion de l’eau.
          </p>
        </div>
        <div className="service-item">
          <h3>Aménagement hydraulique</h3>
          <p>
            Conception et réalisation de systèmes d’aménagements hydrauliques,
            tels que fontaines, miroirs d’eau et bassins, pour embellir vos
            espaces extérieurs.
          </p>
        </div>
        <div className="service-item">
          <h3>Gestion durable de l'eau</h3>
          <p>
            Solutions innovantes pour une gestion raisonnée de l’eau :
            récupération des eaux de pluie, pompage des eaux de surface et
            réutilisation des eaux grises.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
