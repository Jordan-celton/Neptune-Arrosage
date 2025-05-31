import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../styles/NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <Helmet>
        <title>404 - Page non trouvée | Neptune Arrosage</title>
        <meta
          name="description"
          content="La page que vous recherchez est introuvable. Retournez à l'accueil ou à la page précédente."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page non trouvée</h2>
        <p>
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <button onClick={() => navigate(-1)} className="go-back-button">
          Retour
        </button>
        <button onClick={() => navigate("/")} className="home-button">
          Accueil
        </button>
      </div>
    </div>
  );
};

export default NotFound;
