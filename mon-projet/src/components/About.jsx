import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/About.css";

import image1 from "../assets/photos/DSC_0778.webp"; // Image d'illustration
import image2 from "../assets/photos/IMG_1312.webp"; // Deuxième image

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

      <section className="about-container">
        <div className="about-hero">
          <h1>Neptune Arrosage</h1>
          <p>Expert en solutions d’arrosage et d’aménagement hydraulique</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Fondée en 1970 à Nantes, Neptune Arrosage est une entreprise
              spécialisée dans les solutions d’arrosage et d’aménagements
              hydrauliques. Forte de plus de 50 ans d'expérience, elle
              intervient dans des projets variés tels que les fontaines, les
              terrains sportifs et les grands jardins.
            </p>
            <p>
              Une équipe basée à Paris est également disponible pour répondre à
              tous vos besoins et vous accompagner dans vos projets.{" "}
              <a href="/contact" className="contact-link">
                Contactez-nous
              </a>
            </p>
          </div>
          <div className="about-image">
            <img src={image1} alt="Projets d'arrosage" loading="lazy" />
          </div>
        </div>

        <div className="about-content reverse">
          <div className="about-image">
            <img src={image2} alt="Équipe Neptune Arrosage" loading="lazy" />
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
