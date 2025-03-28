import React from "react";
import { FaTint, FaLeaf, FaCogs, FaChartLine } from "react-icons/fa";
import "../styles/Expertise.css";

const Expertise = () => {
  const expertItems = [
    {
      icon: <FaTint className="expert-icon" />,
      title: "Maîtrise de l'eau",
      description:
        "Solutions optimisées pour une gestion précise des ressources en eau",
      color: "#508BBF",
    },
    {
      icon: <FaLeaf className="expert-icon" />,
      title: "Éco-responsabilité",
      description: "Technologies réduisant la consommation jusqu'à 40%",
      color: "#ADBF21",
    },
    {
      icon: <FaCogs className="expert-icon" />,
      title: "Technologie avancée",
      description: "Systèmes intelligents avec contrôle à distance",
      color: "#736B5C",
    },
    {
      icon: <FaChartLine className="expert-icon" />,
      title: "Résultats mesurables",
      description: "Suivi précis des économies réalisées",
      color: "#1abc9c",
    },
  ];

  return (
    <section className="expertise-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Notre expertise</h2>
          <p className="section-subtitle">
            Plus de 15 ans d'expérience au service de vos espaces verts
          </p>
        </div>

        <div className="expertise-grid">
          {expertItems.map((item, index) => (
            <div
              className="expert-card"
              key={index}
              style={{ "--accent-color": item.color }}
            >
              <div className="expert-icon-container">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="expert-decoration"></div>
            </div>
          ))}
        </div>

        <div className="expertise-footer">
          <p>
            <strong>100+ projets réalisés</strong> avec un taux de satisfaction
            de 98%
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
