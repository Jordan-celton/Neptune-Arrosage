import React from "react";
import iconearth from "../../assets/icons/picto_environnement.svg";

import "../../styles/HomePage/Expertise.css";

const Expertise = () => {
  return (
    <section className="expertise-section">
      <div className="expertise-background"></div>
      <div className="container">
        <div className="section-header">
          <img src={iconearth} alt="Icône terre" />
          <h2 className="section-title-expertise">
            Savoir-faire et innovation
          </h2>
          <span className="section-subtitle">
            au service de l'environnement
          </span>
          <p>
            Grâce à une expertise technique reconnue et une approche sur-mesure,
            Neptune Arrosage accompagne les collectivités, architectes
            paysagistes, bureau d'étude et entreprise d'espace vert dans la
            réalisation de projets performants et respectueux de
            l'environnement.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Expertise;
