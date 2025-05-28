import React from "react";
import Breadcrumb from "../components/RecrutementPage/Breadcrumb";
import Offre from "../components/RecrutementPage/Offre";
import CandidatureSpontanee from "../components/RecrutementPage/CandidatureSpontanee";

const Recrutement = () => {
  return (
    <div>
      <Breadcrumb title="Chef de chantier arrosage automatique H/F" />
      <Offre />
      <CandidatureSpontanee />
    </div>
  );
};

export default Recrutement;
