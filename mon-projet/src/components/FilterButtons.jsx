const FilterButtons = ({ categorie, setCategorie }) => {
  const categories = ["Toutes", "Sport", "Collectivités", "Particuliers"];

  return (
    <section aria-labelledby="filters">
      <div className="filtres">
        {categories.map((cat) => (
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
  );
};

export default FilterButtons;
