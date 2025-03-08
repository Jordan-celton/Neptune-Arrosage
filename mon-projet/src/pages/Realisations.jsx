import React from "react";
import "../styles/Realisations.css";

// Données des réalisations
const realisationsData = [
  {
    title: "Jardin de Luxe à Nantes",
    description:
      "Un aménagement paysager complet incluant un système d'arrosage automatique et une fontaine.",
    image: "/images/jardin-luxe.jpg",
    details:
      "Durée : 4 semaines | Matériaux : pierres naturelles, plantes méditerranéennes",
    client: "Monsieur Dupont",
  },
  {
    title: "Aménagement d'un espace vert privé",
    description:
      "Création d'un jardin moderne avec une gestion durable de l'eau.",
    image: "/images/espace-vert.jpg",
    details: "Durée : 3 semaines | Matériaux : bois recyclé, plantes indigènes",
    client: "Madame Martin",
  },
  {
    title: "Fontaine décorative pour une terrasse",
    description:
      "Installation d'une fontaine contemporaine dans un petit espace extérieur.",
    image: "/images/fontaine-terrasse.jpg",
    details: "Durée : 2 jours | Matériaux : béton, pierre reconstituée",
    client: "Société XYZ",
  },
];

const Realisations = () => {
  return (
    <section className="realisations-container main-container">
      {/* Titre */}
      <h1 className="realisations-title">Nos Réalisations</h1>

      {/* Introduction */}
      <p className="realisations-intro">
        Découvrez quelques-unes de nos réalisations les plus récentes. Chaque
        projet est un témoignage de notre savoir-faire et de notre passion pour
        l'aménagement paysager.
      </p>

      {/* Galerie des réalisations */}
      <div className="realisations-grid grid">
        {realisationsData.map((realis, index) => (
          <div key={index} className="realisations-card">
            <img
              src={realis.image}
              alt={realis.title}
              className="realisations-image"
            />
            <div className="realisations-content">
              <h3>{realis.title}</h3>
              <p>{realis.description}</p>
              <p>
                <strong>Détails : </strong>
                {realis.details}
              </p>
              <p>
                <strong>Client : </strong>
                {realis.client}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Témoignages */}
      <div className="testimonials">
        <h2>Témoignages</h2>
        <div className="testimonial-item">
          <p>
            "Le jardin que vous avez créé est tout simplement magnifique.
            L'arrosage automatique a changé ma façon de gérer l'entretien !" -{" "}
            <strong>Jean Dupont</strong>
          </p>
        </div>
        <div className="testimonial-item">
          <p>
            "Merci pour votre professionnalisme et la qualité de votre travail.
            La fontaine est un vrai chef-d'œuvre." -{" "}
            <strong>Marie Martin</strong>
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <h2>Prêt à transformer vos espaces extérieurs ?</h2>
        <a
          href="mailto:contact@neptune-arrosage.fr?subject=Demande de devis pour un projet"
          className="cta-btn"
        >
          Demander un devis
        </a>
      </div>
    </section>
  );
};

export default Realisations;
