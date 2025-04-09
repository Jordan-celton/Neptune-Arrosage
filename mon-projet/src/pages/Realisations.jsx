import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Realisations.css";

// Données temporaires - à remplacer par votre API ou données réelles
const realisationsData = [
  {
    id: 1,
    title: "Parc municipal de Fontainebleau",
    description:
      "Aménagement complet d'un parc public avec fontaines et espaces verts",
    image: "/images/realisations/parc-fontainebleau.jpg",
    category: "fontaines",
    tags: ["Fontainerie", "Espaces verts"],
    date: "2023",
  },
  {
    id: 2,
    title: "Stade de football de Lyon",
    description: "Rénovation du terrain et système d'arrosage automatique",
    image: "/images/realisations/stade-lyon.jpg",
    category: "sports",
    tags: ["Terrain sportif", "Arrosage"],
    date: "2022",
  },
  // Ajoutez d'autres réalisations...
];

const Realisations = () => {
  const [activeFilter, setActiveFilter] = useState("tous");

  const filters = [
    { id: "tous", name: "Tous nos travaux" },
    { id: "fontaines", name: "Fontainerie" },
    { id: "sports", name: "Terrains sportifs" },
    { id: "jardins", name: "Jardins" },
    { id: "contrats", name: "Contrats d'entretien" },
  ];

  const filteredRealisations =
    activeFilter === "tous"
      ? realisationsData
      : realisationsData.filter((real) => real.category === activeFilter);

  return (
    <div className="realisations-page">
      <h1 className="animate">Nos Réalisations</h1>

      <div className="realisations-filters">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-btn ${
              activeFilter === filter.id ? "active" : ""
            }`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.name}
          </button>
        ))}
      </div>

      <div className="realisations-grid">
        {filteredRealisations.map((realisation, index) => (
          <div
            key={realisation.id}
            className="realisation-card animate"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img
              src={realisation.image}
              alt={realisation.title}
              className="realisation-image"
            />
            <div className="realisation-content">
              <h3>{realisation.title}</h3>
              <p>{realisation.description}</p>

              <div className="realisation-tags">
                {realisation.tags.map((tag) => (
                  <span key={tag} className="realisation-tag">
                    {tag}
                  </span>
                ))}
                <span className="realisation-tag">{realisation.date}</span>
              </div>

              <NavLink
                to={`/realisations/${realisation.id}`}
                className="realisation-link"
              >
                Voir le projet →
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Realisations;
