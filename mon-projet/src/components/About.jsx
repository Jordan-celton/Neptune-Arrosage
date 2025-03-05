import React from "react";
import "../styles/About.css";
import fontaine from "../assets/photos/istockphoto-612254260-2048x2048.webp";
import fontaine2 from "../assets/photos/architecture-1853096_1920.webp";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-title">
        <h1>À propos</h1>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h2>
            Neptune Arrosage - Expert en solutions d’arrosage et d’aménagement
            hydraulique
          </h2>
          <p>
            Fondée en 1970 à Nantes, Neptune Arrosage est une entreprise
            spécialisée dans les solutions d’arrosage et d’aménagements
            hydrauliques. Forte de plus de 50 ans d'expérience, elle intervient
            dans des projets variés tels que les fontaines, les terrains
            sportifs, et les grands jardins.
          </p>
        </div>
        <div className="about-image">
          <img src={fontaine} alt="Fontaine" />
        </div>
      </div>

      <div className="about-section">
        <h3>Un engagement pour une gestion durable de l’eau</h3>
        <p>
          Neptune Arrosage développe des solutions innovantes pour optimiser
          l’usage de l'eau, telles que :
        </p>
        <ul>
          <li>💧 Stockage des eaux de pluie pour réutilisation</li>
          <li>
            ⚡ Pompage des eaux de surface pour réduire l’utilisation d’eau
            potable
          </li>
          <li>♻️ Réutilisation des eaux grises</li>
        </ul>
      </div>

      <div className="about-content reverse">
        <div className="about-image">
          <img src={fontaine2} alt="Fontaine" />
        </div>
        <div className="about-text">
          <h3>Savoir-faire et innovation</h3>
          <p>
            Avec son expertise, Neptune Arrosage accompagne collectivités,
            architectes paysagistes et entreprises dans des projets respectueux
            de l’environnement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
