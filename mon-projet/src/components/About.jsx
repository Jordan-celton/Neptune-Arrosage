import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/About.css";
import fontaineWebp from "../assets/photos/fountain-2955681_1280.webp";
import fontaine3webp from "../assets/photos/HRO1.webp";
import fontaine2Webp from "../assets/photos/park-2625002_1280.webp";
import fontaine4webp from "../assets/photos/Fontaine 2.webp";

const getImage = (webp, fallback, alt) => (
  <picture>
    <source srcSet={webp} type="image/webp" />
    <img src={fallback} alt={alt} loading="lazy" />
  </picture>
);

const About = () => {
  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>À propos | Neptune Arrosage</title>
        <meta
          name="description"
          content="Découvrez Neptune Arrosage, spécialiste en solutions d'arrosage et d'aménagement hydraulique depuis 50 ans."
        />
        <meta
          name="keywords"
          content="arrosage, fontaines, gestion de l'eau, aménagement hydraulique"
        />
      </Helmet>

      <section
        className="about-container"
        aria-labelledby="about-title"
        role="region"
      >
        <div className="about-title">
          <h1 id="about-title">
            Neptune Arrosage - Expert en solutions d’arrosage et d’aménagement
            hydraulique
          </h1>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Fondée en 1970 à Nantes, Neptune Arrosage est une entreprise
              spécialisée dans les solutions d’arrosage et d’aménagements
              hydrauliques. Forte de plus de 50 ans d'expérience, elle
              intervient dans des projets variés tels que les fontaines, les
              terrains sportifs, et les grands jardins.
            </p>
          </div>
          <div className="about-image">
            {getImage(
              fontaineWebp,
              fontaine4webp,
              "Fontaine élégante dans un jardin"
            )}
          </div>
        </div>

        <div className="about-section">
          <h2>Un engagement pour une gestion durable de l’eau</h2>
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
            {getImage(
              fontaine2Webp,
              fontaine3webp,
              "Installation hydraulique moderne"
            )}
          </div>
          <div className="about-text">
            <h2>Savoir-faire et innovation</h2>
            <p>
              Avec son expertise, Neptune Arrosage accompagne collectivités,
              architectes paysagistes et entreprises dans des projets
              respectueux de l’environnement.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
