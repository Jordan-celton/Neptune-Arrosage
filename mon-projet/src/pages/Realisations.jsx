import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

import Breadcrumb from "../components/RealisationPage/Breadcrumb";
import ProjectRealisation from "../components/RealisationPage/ProjectRealisation";
import "../styles/RealisationPage/Realisations.css";
import IntroText from "../components/RealisationPage/IntroText";

const Realisations = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="realisations-page">
      <Helmet>
        <title>Nos Réalisations | Neptune Arrosage</title>
        <meta
          name="description"
          content="Découvrez les réalisations de Neptune Arrosage en Loire-Atlantique et Île-de-France. Projets d’arrosage automatique pour jardins, espaces verts et fontaineries."
        />
        <meta
          name="keywords"
          content="réalisations arrosage automatique, Neptune Arrosage, projets jardin, fontainerie, Loire Atlantique, Île-de-France"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Neptune Arrosage" />
        <meta name="language" content="fr" />
        <link
          rel="canonical"
          href="https://www.neptunearrosage.com/realisations"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Réalisations Neptune Arrosage - Jardins & Espaces Verts"
        />
        <meta
          property="og:description"
          content="Découvrez des exemples concrets de projets réalisés par Neptune Arrosage, spécialiste en irrigation et fontainerie."
        />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:image"
          content="https://www.neptunearrosage.com/og-realisations.jpg"
        /> */}
        <meta
          property="og:url"
          content="https://www.neptunearrosage.com/realisations"
        />
      </Helmet>

      <section data-aos="fade-down">
        <Breadcrumb title="Réalisations" />
      </section>

      <section data-aos="fade-up" data-aos-delay="400">
        <IntroText />
      </section>

      <section data-aos="zoom-in" data-aos-delay="600">
        <ProjectRealisation />
      </section>

      {/* Contenu SEO caché */}
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
        <h1>Nos projets d'arrosage automatique</h1>
        <p>
          Neptune Arrosage conçoit et installe des systèmes d’irrigation
          performants adaptés à tous types de jardins et espaces verts. Nos
          projets réalisés en Loire-Atlantique et en Île-de-France témoignent de
          notre savoir-faire en matière de solutions personnalisées, durables et
          esthétiques.
        </p>
        <ul>
          <li>Jardins paysagers avec arrosage intégré</li>
          <li>Systèmes enterrés pour espaces résidentiels</li>
          <li>Fontaines et fontainerie décorative</li>
          <li>Solutions d’arrosage intelligent programmables</li>
          <li>Maintenance de systèmes existants</li>
        </ul>
      </div>
    </main>
  );
};

export default Realisations;
