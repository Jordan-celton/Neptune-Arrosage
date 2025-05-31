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
          Neptune Arrosage - Experts en Arrosage Automatique en Loire-Atlantique
          et Île-de-France
        </title>
        <meta
          name="description"
          content="Installation et entretien de systèmes d'arrosage automatique en Loire-Atlantique et Île-de-France. Solutions sur mesure pour jardins et espaces verts. Devis gratuit et intervention rapide."
        />
        <meta
          name="keywords"
          content="arrosage automatique Loire Atlantique, arrosage automatique Ile de France, installation arrosage Nantes, arrosage jardin Paris, système d'irrigation automatique, entretien arrosage automatique, fontainerie jardin, installation arrosage enterré, paysagiste arrosage Loire Atlantique, système arrosage programmable, arrosage espaces verts, Neptune Arrosage"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Neptune Arrosage" />
        <meta name="language" content="fr" />
        <link rel="canonical" href="https://www.neptunearrosage.com" />

        {/* Open Graph pour réseaux sociaux */}
        <meta
          property="og:title"
          content="Neptune Arrosage - Experts en Arrosage Automatique en Loire-Atlantique et Île-de-France"
        />
        <meta
          property="og:description"
          content="Professionnels de l'arrosage automatique en Loire-Atlantique et Île-de-France. Solutions écologiques et entretien sur mesure pour votre jardin."
        />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:image"
          content="https://www.neptune-arrosage.com/og-image.jpg"
        /> */}
        <meta property="og:url" content="https://www.neptunearrosage.com/" />
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

      {/* Section SEO cachée mais lisible par Google */}
      <div
        className="seo-content"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <h1>
          Neptune Arrosage - Expert en installation d'arrosage automatique
        </h1>
        <h2>
          Installation et entretien d'arrosage automatique en Loire-Atlantique
          et Île-de-France
        </h2>
        <p>
          Neptune Arrosage est votre spécialiste en systèmes d'irrigation à
          Nantes, Paris et dans les régions de Loire-Atlantique et
          Île-de-France. Nous installons et entretenons des systèmes d'arrosage
          automatique résidentiels et professionnels, avec des solutions
          adaptées à chaque type de jardin et espace vert.
        </p>
        <h3>Nos services d'arrosage</h3>
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
