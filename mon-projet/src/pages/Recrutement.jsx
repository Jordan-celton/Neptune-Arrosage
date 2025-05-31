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
  {
    id: "technicien-specialise",
    title: "Technicien spécialisé en arrosage automatique H/F",
    location: "Nantes & déplacements ponctuels Grand Ouest",
    contractType: "CDI – Temps plein – De journée",
  },
  {
    id: "alternant-technicien-maintenance",
    title:
      "Alternant(e) Technicien(ne) de Maintenance Arrosage & Fontaine (H/F)",
    location: "Orléans (45) et environs",
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
            <Offre jobId={selectedJob.id} />
          </div>
        ) : (
          <>
            <section
              className="job-listing"
              style={{ background: "#f9f9f9", padding: "70px 0 40px" }}
            >
              {offres.map((offre) => (
                <JobCard
                  key={offre.id}
                  title={offre.title}
                  location={offre.location}
                  contractType={offre.contractType}
                  jobId={offre.id}
                />
              ))}
            </section>
            <CandidatureSpontanee />
          </>
        )}
      </div>
    </div>
  );
};

export default Recrutement;
