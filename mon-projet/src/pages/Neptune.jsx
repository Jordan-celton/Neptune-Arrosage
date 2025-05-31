import React from "react";
import { Helmet } from "react-helmet-async";

import "../styles/NeptunePage/Neptune.css";

import Breadcrumb from "../components/NeptunePage/Breadcrumb";
import HeroNeptune from "../components/NeptunePage/HeroNeptune";
import EngagementSection from "../components/NeptunePage/EngagementSection";
import Expertise from "../components/HomePage/Expertise";
import ProjectGallery from "../components/ServicesPage/ProjectGallery";

const Neptune = () => {
  return (
    <main
      className="neptune-page"
      aria-label="Présentation de l'entreprise Neptune Arrosage"
    >
      <Helmet>
        <title>
          À propos de Neptune Arrosage - Experts en irrigation écologique et
          durable
        </title>
        <meta
          name="description"
          content="Découvrez Neptune Arrosage : notre mission, nos engagements écologiques, notre savoir-faire en arrosage automatique et nos projets en Loire-Atlantique et Île-de-France."
        />
        <meta
          name="keywords"
          content="Neptune Arrosage, entreprise arrosage automatique, irrigation durable, fontainerie, Loire Atlantique, Île-de-France, arrosage écologique, présentation entreprise"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Neptune Arrosage" />
        <meta name="language" content="fr" />
        <link
          rel="canonical"
          href="https://www.neptunearrosage.com/qui-sommes-nous"
        />

        {/* Open Graph */}
        <meta property="og:title" content="À propos de Neptune Arrosage" />
        <meta
          property="og:description"
          content="En savoir plus sur Neptune Arrosage : notre expertise en systèmes d'arrosage, notre engagement écologique, et nos réalisations."
        />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:image"
          content="https://www.neptunearrosage.com/og-image.jpg"
        /> */}
        <meta
          property="og:url"
          content="https://www.neptunearrosage.com/qui-sommes-nous"
        />
      </Helmet>

      <Breadcrumb title="Qui sommes-nous ?" />

      <section aria-labelledby="neptune-hero-title" data-aos="fade-up">
        <HeroNeptune />
      </section>

      <section aria-labelledby="engagement-title" data-aos="fade-right">
        <EngagementSection />
      </section>

      <section aria-labelledby="expertise-heading" data-aos="zoom-in">
        <Expertise />
      </section>

      <section aria-labelledby="project-gallery-title" data-aos="fade-up">
        <ProjectGallery />
      </section>

      {/* Contenu SEO masqué accessible aux moteurs */}
      <div
        className="seo-hidden"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <h1>Présentation de Neptune Arrosage</h1>
        <p>
          Neptune Arrosage est une entreprise spécialisée dans l’installation et
          la maintenance de systèmes d’irrigation automatique en
          Loire-Atlantique et en Île-de-France. Engagée dans une démarche
          écologique, notre équipe conçoit des solutions durables pour
          l’arrosage de jardins, d’espaces verts et de fontainerie.
        </p>
        <h2>Nos engagements</h2>
        <ul>
          <li>Respect de l’environnement et des ressources en eau</li>
          <li>Technologies intelligentes et connectées</li>
          <li>Interventions rapides et personnalisées</li>
        </ul>
      </div>
    </main>
  );
};

export default Neptune;
