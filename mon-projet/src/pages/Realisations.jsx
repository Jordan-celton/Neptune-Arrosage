import React, { useEffect } from "react";
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
      <section data-aos="fade-down">
        <Breadcrumb title="Réalisations" />
      </section>

      <section data-aos="fade-up" data-aos-delay="400">
        <IntroText />
      </section>

      <section data-aos="zoom-in" data-aos-delay="600">
        <ProjectRealisation />
      </section>
    </main>
  );
};

export default Realisations;
