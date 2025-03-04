import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-title">
        <h1>À propos</h1>
      </div>
      <div className="about-content">
        <h2>
          Neptune Arrosage - Expert en solutions d’arrosage et d’aménagement
          hydraulique
        </h2>
        <p>
          Fondée en 1970 à Nantes, Neptune Arrosage est une entreprise
          spécialisée dans les solutions d’arrosage et d’aménagements
          hydrauliques. Forte de plus de 50 ans d'expérience, elle intervient
          dans des projets variés tels que les fontaines, les terrains sportifs,
          et les grands jardins.
        </p>
        <h3>Un engagement pour une gestion durable de l’eau</h3>
        <p>
          Neptune Arrosage développe des solutions innovantes pour optimiser
          l’usage de l'eau, telles que :
        </p>
        <ul>
          <li>Stockage des eaux de pluie pour réutilisation</li>
          <li>
            Pompage des eaux de surface pour réduire l’utilisation d’eau potable
          </li>
          <li>Réutilisation des eaux grises</li>
        </ul>
        <h3>Savoir-faire et innovation</h3>
        <p>
          Avec son expertise, Neptune Arrosage accompagne collectivités,
          architectes paysagistes et entreprises dans des projets respectueux de
          l’environnement.
        </p>
      </div>
    </section>
  );
};

export default About;
