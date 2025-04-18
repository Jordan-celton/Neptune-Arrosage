import React from "react";
import "../../styles/NeptunePage/Breadcrumb.css";

const Breadcrumb = ({ title }) => (
  <div>
    <section className="breadcrumbNeptune-section">
      <div className="breadcrumbNeptune-overlay">
        <header className="servicesNeptune-header">
          <h1>{title}</h1>
        </header>
        <nav aria-label="Fil d'Ariane" className="breadcrumbNeptune">
          <ol>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/realisations">Neptune</a>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  </div>
);

export default Breadcrumb;
