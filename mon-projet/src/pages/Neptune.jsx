import React from "react";
import "../styles/NeptunePage/Neptune.css";
import Breadcrumb from "../components/NeptunePage/Breadcrumb";
import EngagementSection from "../components/NeptunePage/EngagementSection";
import Expertise from "../components/HomePage/Expertise";
import ProjectGallery from "../components/ServicesPage/ProjectGallery";
import HeroNeptune from "../components/NeptunePage/HeroNeptune";

const Neptune = () => {
  return (
    <main className="neptune-page">
      <Breadcrumb title="Qui sommes-nous ?" />
      <HeroNeptune />
      <EngagementSection />
      <Expertise />
      <ProjectGallery />
    </main>
  );
};

export default Neptune;
