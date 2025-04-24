import React from "react";
import "../../styles/NeptunePage/Breadcrumb.css";

const Breadcrumb = ({ title }) => (
  <section
    className="breadcrumbNeptune-section"
    aria-labelledby="breadcrumb-title"
  >
    <div className="breadcrumbNeptune-overlay">
      <header className="servicesNeptune-header">
        <h1 id="breadcrumb-title">{title}</h1>
      </header>

      <nav
        className="breadcrumbNeptune"
        aria-label="Fil d'Ariane"
        role="navigation"
      >
        <ol>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/neptune" aria-current="page">
              Neptune
            </a>
          </li>
        </ol>
      </nav>
    </div>
  </section>
);

export default Breadcrumb;
