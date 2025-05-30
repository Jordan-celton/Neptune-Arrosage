import React from "react";
import Breadcrumb from "../components/RecrutementPage/Breadcrumb";
import CandidatureSpontanee from "../components/RecrutementPage/CandidatureSpontanee";
import JobCard from "../components/RecrutementPage/JobCard";
import { useParams } from "react-router-dom";
import Offre from "../components/RecrutementPage/Offre";

const offres = [
  {
    id: "chef-de-chantier",
    title: "Chef de chantier arrosage automatique H/F",
    location: "Nantes & déplacements ponctuels Grand Ouest",
    contractType: "CDI – Temps plein – De journée",
  },
  // ... autres offres
];

const Recrutement = () => {
  const { jobId } = useParams();
  const selectedJob = offres.find((job) => job.id === jobId);

  return (
    <div>
      <div data-aos="fade-down">
        <Breadcrumb
          title={selectedJob ? selectedJob.title : "Nos offres d'emploi"}
        />
      </div>

      <div data-aos="fade-up" data-aos-delay="400">
        {selectedJob ? (
          <div>
            <Offre />
          </div>
        ) : (
          <>
            {offres.map((offre) => (
              <JobCard
                key={offre.id}
                title={offre.title}
                location={offre.location}
                contractType={offre.contractType}
                jobId={offre.id}
              />
            ))}
            <CandidatureSpontanee />
          </>
        )}
      </div>
    </div>
  );
};

export default Recrutement;
