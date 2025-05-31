import React from "react";
import { Helmet } from "react-helmet-async";
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

  const pageTitle = selectedJob
    ? `${selectedJob.title} | Recrutement Neptune Arrosage`
    : "Rejoignez Neptune Arrosage | Nos offres d'emploi";

  const pageDescription = selectedJob
    ? `Découvrez notre offre : ${selectedJob.title} à ${selectedJob.location}. Rejoignez Neptune Arrosage, spécialiste de l’arrosage automatique.`
    : "Découvrez toutes nos offres d'emploi en Loire Atlantique, Île-de-France et Centre-Val de Loire. Rejoignez Neptune Arrosage et participez à des projets innovants.";

  const canonicalUrl = selectedJob
    ? `https://www.neptunearrosage.com/recrutement/${selectedJob.id}`
    : "https://www.neptunearrosage.com/recrutement";

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content={
            selectedJob
              ? `${selectedJob.title}, emploi arrosage automatique, recrutement jardinier, Neptune Arrosage`
              : "offres emploi arrosage automatique, Neptune Arrosage, jardinier, technicien irrigation, recrutement Loire Atlantique, Île-de-France"
          }
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        {/* <meta
          property="og:image"
          content="https://www.neptunearrosage.com/og-recrutement.jpg"
        /> */}
      </Helmet>

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

      {/* Bloc SEO caché */}
      {!selectedJob && (
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
          <h1>Recrutement Neptune Arrosage</h1>
          <p>
            Neptune Arrosage recherche des talents pour accompagner son
            développement en Loire Atlantique, Île-de-France et Centre-Val de
            Loire. Nos métiers incluent l'installation de systèmes d'arrosage
            automatique, la maintenance de fontaineries et la gestion de projets
            paysagers.
          </p>
          <ul>
            <li>Technicien arrosage automatique</li>
            <li>Chef de chantier spécialisé</li>
            <li>Alternant(e) en maintenance ou irrigation</li>
            <li>Postes en CDI et alternance</li>
            <li>Interventions sur tout le Grand Ouest</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Recrutement;
