import React from "react";
import Breadcrumb from "../components/RealisationPage/Breadcrumb";
import ProjectRealisation from "../components/RealisationPage/ProjectRealisation";
import "../styles/RealisationPage/Realisations.css";
import IntroText from "../components/RealisationPage/IntroText";

const Realisations = () => {
  return (
    <main className="realisations-page">
      <Breadcrumb title="Réalisations" />
      <IntroText />
      <ProjectRealisation />
    </main>
  );
};

export default Realisations;
