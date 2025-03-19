import { useState } from "react";
import realisations from "../data/realisations";
import "../styles/Realisations.css";
import HomeContact from "../components/HomeContact";
import FilterButtons from "../components/FilterButtons";
import RealisationCard from "../components/RealisationCard";

const Realisations = () => {
  const [categorie, setCategorie] = useState("Toutes");

  // Filtrage des réalisations
  const realisationsFiltrees =
    categorie === "Toutes"
      ? realisations
      : realisations.filter(
          (r) => r.categorie.toLowerCase() === categorie.toLowerCase()
        );

  return (
    <main className="main-container">
      {/* En-tête */}
      <header>
        <h1>Nos Réalisations</h1>
        <p>
          Découvrez nos projets réalisés pour des particuliers, des
          collectivités et des infrastructures sportives.
        </p>
      </header>

      {/* Filtres */}
      <FilterButtons categorie={categorie} setCategorie={setCategorie} />

      {/* Grille de réalisations */}
      <section aria-labelledby="realisations">
        <div className="grid">
          {realisationsFiltrees.length > 0 ? (
            realisationsFiltrees.map((r) => (
              <RealisationCard key={r.id} realisation={r} />
            ))
          ) : (
            <p className="no-results">
              Aucune réalisation trouvée pour cette catégorie.
            </p>
          )}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="cta-section">
        <h2>Vous avez un projet ?</h2>
        <p>Contactez-nous pour en discuter et concrétiser vos idées.</p>
        <button onClick={() => (window.location.href = "/contact")}>
          Nous contacter
        </button>
      </section>
    </main>
  );
};

export default Realisations;
