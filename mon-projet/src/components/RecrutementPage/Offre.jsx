import React from "react";
import offresData from "../..//data/offreData"; // adapte le chemin selon ta structure
import CandidatureSpontanee from "../RecrutementPage/CandidatureSpontanee";
import "../../styles/RecrutementPage/Offre.css";

const SectionTitle = ({ children }) => <h2>{children}</h2>;

const List = ({ items }) => (
  <ul>
    {items.map((item, i) =>
      Array.isArray(item) ? (
        <ul key={i}>
          {item.map((subItem, j) => (
            <li key={j}>{subItem}</li>
          ))}
        </ul>
      ) : (
        <li key={i}>{item}</li>
      )
    )}
  </ul>
);

const Offre = ({ jobId }) => {
  const offre = offresData[jobId];

  if (!offre) {
    return <p>Offre non trouvée. Merci de sélectionner une offre valide.</p>;
  }

  return (
    <>
      <section className="offre-section">
        <div className="offre-container">
          <SectionTitle>L’entreprise :</SectionTitle>
          <p>{offre.entreprise}</p>

          <p className="offre-mission">{offre.introMission}</p>

          <SectionTitle>Vos missions :</SectionTitle>
          <List items={offre.missions} />

          <SectionTitle>Profil recherché :</SectionTitle>
          <List items={offre.profil} />

          <SectionTitle>Conditions proposées :</SectionTitle>
          <p>{offre.conditions.type}</p>
          {offre.conditions.remuneration !== "N/A" && (
            <p>Rémunération : {offre.conditions.remuneration}</p>
          )}
          {offre.conditions.avantages && (
            <>
              <strong>Avantages :</strong>
              <List items={offre.conditions.avantages} />
            </>
          )}

          {offre.competences.length > 0 && (
            <>
              <SectionTitle>
                Compétences & habilitations souhaitées :
              </SectionTitle>
              <List items={offre.competences} />
            </>
          )}
        </div>
      </section>
      <section>
        <CandidatureSpontanee />
      </section>
    </>
  );
};

export default Offre;
