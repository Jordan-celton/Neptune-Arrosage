import React from "react";
import iconearth from "../../assets/icons/picto_environnement.svg";
import "../../styles/HomePage/Expertise.css";

const Expertise = () => {
  return (
    <section className="expertise-section" aria-labelledby="expertise-heading">
      <div className="expertise-background" aria-hidden="true"></div>
      <div className="container">
        <header className="section-header">
          <img
            src={iconearth}
            alt="Icône représentant la Terre, symbole de notre engagement environnemental"
            loading="lazy"
          />
          <h2 className="section-title-expertise" id="expertise-heading">
            Savoir-faire et innovation
          </h2>
          <span className="section-subtitle">
            au service de l'environnement
          </span>
          <p>
            Grâce à une expertise technique reconnue et une approche sur-mesure,
            Neptune Arrosage accompagne les collectivités, architectes
            paysagistes, bureaux d'étude et entreprises d'espaces verts dans la
            réalisation de projets performants et respectueux de
            l'environnement.
          </p>
        </header>
      </div>
    </section>
  );
};

export default Expertise;
