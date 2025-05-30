import React from "react";
import "../../styles/MentionPage/Breadcrumb.css";

const BreadcrumbMentionLegale = ({ title }) => (
  <section className="breadcrumb-MentionLegale-section">
    <div className="breadcrumb-MentionLegale-overlay">
      <header className="breadcrumb-Mentionlegale-header">
        <h1>{title}</h1>
      </header>
      <nav aria-label="Fil d'Ariane" className="MentionLegale-breadcrumb">
        <ol>
          <li>
            <a href="/" aria-label="Retour à la page d'accueil">
              Accueil
            </a>
          </li>
          <li>
            <a
              href="/mentions-legales"
              aria-label="Voir la page des mentions légales"
            >
              Mentions légales
            </a>
          </li>
        </ol>
      </nav>
    </div>
  </section>
);

export default BreadcrumbMentionLegale;
