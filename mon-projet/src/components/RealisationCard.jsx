const RealisationCard = ({ realisation }) => {
  return (
    <article className="card">
      <div className="image-container">
        <img src={realisation.image} alt={realisation.nom} loading="lazy" />
      </div>
      <h3>{realisation.nom}</h3>
      <p>{realisation.description}</p>
    </article>
  );
};

export default RealisationCard;
