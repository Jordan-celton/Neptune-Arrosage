import React from "react";
import "../../styles/RealisationPage/Realisations.css";

const Breadcrumb = ({ title }) => (
  <div>
    <section className="breadcrumb-section">
      <div className="breadcrumb-overlay">
        <header className="services-header">
          <h1>{title}</h1>
        </header>
        <nav aria-label="Fil d'Ariane" className="breadcrumb">
          <ol>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/realisations">Contact</a>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  </div>
);

export default Breadcrumb;
