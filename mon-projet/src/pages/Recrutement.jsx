import React from "react";
import Breadcrumb from "../components/RecrutementPage/Breadcrumb";
import Offre from "../components/RecrutementPage/Offre";
import CandidatureSpontanee from "../components/RecrutementPage/CandidatureSpontanee";

const Recrutement = () => {
  return (
    <div>
      <div data-aos="fade-down">
        <Breadcrumb title="Chef de chantier arrosage automatique H/F" />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <Offre />
      </div>

      <div data-aos="fade-up" data-aos-delay="400">
        <CandidatureSpontanee />
      </div>
    </div>
  );
};

export default Recrutement;
