import React from "react";
import "../styles/NeptunePage/Neptune.css";
import Breadcrumb from "../components/NeptunePage/Breadcrumb";
import Hero from "../components/NeptunePage/Hero";
import EngagementSection from "../components/NeptunePage/EngagementSection";
import Expertise from "../components/HomePage/Expertise";
import ProjectGallery from "../components/ServicesPage/ProjectGallery";

const Neptune = () => {
  return (
    <main className="neptune-page">
      <Breadcrumb title="Qui sommes-nous ?" />
      <Hero />
      <EngagementSection />
      <Expertise />
      <ProjectGallery />
    </main>
  );
};

export default Neptune;
