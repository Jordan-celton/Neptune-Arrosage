import React from "react";
import "../../styles/RecrutementPage/Breadcrumb.css";

const BreadcrumbRecrutement = ({ title }) => (
  <section className="breadcrumb-Recrutement-section">
    <div className="breadcrumb-Recrutement-overlay">
      <header className="breadcrumb-recrutement-header">
        <h1>{title}</h1>
      </header>
      <nav aria-label="Fil d'Ariane" className="Recrutement-breadcrumb">
        <ol>
          <li>
            <a href="/" aria-label="Retour à la page d'accueil">
              Accueil
            </a>
          </li>
          <li>
            <a href="/recrutement" aria-label="Voir la page de recrutement">
              Recrutement
            </a>
          </li>
        </ol>
      </nav>
    </div>
  </section>
);

export default BreadcrumbRecrutement;
