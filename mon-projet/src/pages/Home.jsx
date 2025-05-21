import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/HomePage/Hero";
import AboutSection from "../components/HomePage/AboutSection";
import ServicesSection from "../components/HomePage/ServicesSection";
import Expertise from "../components/HomePage/Expertise";
import Projects from "../components/HomePage/Projects";

const Home = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>
          Neptune Arrosage - Experts en Arrosage Automatique | [Région]
        </title>
        <meta
          name="description"
          content="Installation et entretien de systèmes d'arrosage automatique en Loire Atlantique et Ile de France. Solutions sur mesure pour jardins et espaces verts. Devis gratuit et intervention rapide."
        />
        <meta
          name="keywords"
          content="arrosage automatique en Loire Atlantique et Ile de France, installation arrosage, entretien jardin, système irrigation, fontainerie, paysagiste [Ville]"
        />
        <link rel="canonical" href="https://www.neptune-arrosage.com" />

        {/* Balises Open Graph spécifiques à la page d'accueil */}
        <meta
          property="og:title"
          content="Neptune Arrosage - Experts en Arrosage Automatique | [Région]"
        />
        <meta
          property="og:description"
          content="Professionnels de l'arrosage automatique dans en Loire Atlantique et Ile de France. Solutions écologiques et entretien sur mesure pour votre jardin."
        />
      </Helmet>

      <section data-aos="fade-up">
        <Hero />
      </section>

      <section data-aos="fade-right">
        <AboutSection />
      </section>

      <section data-aos="fade-left">
        <ServicesSection />
      </section>

      <section data-aos="zoom-in">
        <Expertise />
      </section>

      <section data-aos="fade-up" data-aos-delay="200">
        <Projects />
      </section>

      {/* Section cachée pour SEO sémantique */}
      <div
        className="seo-content"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <h1>
          Neptune Arrosage - Expert en installation d'arrosage automatique.
        </h1>
        <h2>
          Installation et entretien d'arrosage automatique en Loire Atlantique
          et Ile de France
        </h2>
        <p>
          Neptune Arrosage est votre spécialiste en systèmes d'irrigation à
          Nantes et dans toute la Loire-Atlantique. Nous installons et
          entretenons des systèmes d'arrosage automatique résidentiels et
          professionnels, avec des solutions adaptées à chaque type de jardin et
          espace vert.
        </p>
        <h3>Nos services d'arrosage à Nantes</h3>
        <ul>
          <li>Installation complète d'arrosage enterré</li>
          <li>Programmation de systèmes intelligents</li>
          <li>Dépannage et réparation</li>
          <li>Entretien saisonnier</li>
          <li>Fontaines et systèmes décoratifs</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
