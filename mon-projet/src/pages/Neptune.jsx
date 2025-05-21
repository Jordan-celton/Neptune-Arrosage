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
    </main>
  );
};

export default Neptune;
