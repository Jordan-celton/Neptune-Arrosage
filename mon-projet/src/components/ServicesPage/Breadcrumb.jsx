import React from "react";
import "../../styles/ServicesPage/Breadcrumb.css";

const Breadcrumb = ({ title }) => (
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
            <a href="/services">Nos services</a>
          </li>
          <li aria-current="page">{title}</li>
        </ol>
      </nav>
    </div>
  </section>
);

export default Breadcrumb;
