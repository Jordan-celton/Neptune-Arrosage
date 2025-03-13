import { useState } from "react";
import data from "../data/realisations";
import "../styles/Realisations.css";
import HomeContact from "../components/HomeContact";

const Realisations = () => {
  const [categorie, setCategorie] = useState("Toutes");

  // Filtrage des réalisations
  const realisationsFiltrees =
    categorie === "Toutes"
      ? data
      : data.filter((r) => r.categorie === categorie);

  return (
    <main className="main-container">
      <header>
        {/* Titre principal de la page */}
        <h1>Nos Réalisations</h1>
        {/* Description pour améliorer l'indexation */}
        <meta
          name="description"
          content="Découvrez nos réalisations dans divers domaines tels que l'agriculture, le sport et les collectivités. Explorez nos projets en détail."
        />
        {/* Balises Open Graph pour un meilleur partage sur les réseaux sociaux */}
        <meta
          property="og:title"
          content="Nos Réalisations - Neptune-Arrosage"
        />
        <meta
          property="og:description"
          content="Découvrez nos réalisations dans divers domaines tels que l'agriculture, le sport et les collectivités."
        />
        <meta property="og:image" content="[URL de l'image de la page]" />
        <meta property="og:url" content="[URL de la page]" />
        <meta property="og:type" content="website" />
        {/* Balises Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nos Réalisations - [Nom de l'entreprise]"
        />
        <meta
          name="twitter:description"
          content="Découvrez nos réalisations dans divers domaines tels que l'agriculture, le sport et les collectivités."
        />
        <meta name="twitter:image" content="[URL de l'image de la page]" />
      </header>

      {/* Filtres */}
      <section aria-labelledby="filters">
        <div className="filtres">
          {[
            "Toutes",
            "Agriculture",
            "Sport",
            "Collectivités",
            "Particuliers",
          ].map((cat) => (
            <button
              key={cat}
              className={categorie === cat ? "actif" : ""}
              onClick={() => setCategorie(cat)}
              aria-label={`Filtrer par catégorie ${cat}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Liste des réalisations */}
      <section aria-labelledby="realisations">
        <div className="grid">
          {realisationsFiltrees.map((r) => (
            <article key={r.id} className="card">
              {/* Conteneur pour l'effet de zoom */}
              <div className="image-container">
                <img src={r.image} alt={r.nom} />
              </div>
              {/* Titre de la réalisation */}
              <h3>{r.nom}</h3>
              {/* Description de la réalisation */}
              <p>{r.description}</p>
            </article>
          ))}
        </div>
      </section>
      <HomeContact />
    </main>
  );
};

export default Realisations;
