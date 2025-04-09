import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
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
