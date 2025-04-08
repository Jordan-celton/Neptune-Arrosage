import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Neptune.css";

const Neptune = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="neptune-page">
      {/* Bannière Hero */}
      <section className="hero-arrosage">
        <div className="hero-content">
          <h1>Neptune - Experts en Arrosage & Fontaines</h1>
          <p className="tagline">
            L'eau intelligente pour vos espaces verts et projets urbains
          </p>
        </div>
      </section>

      {/* Section Présentation */}
      <section className="presentation-section">
        <div className="container">
          <div className="presentation-grid">
            <div className="presentation-text">
              <h2>Notre Expertise Hydraulique</h2>
              <p>
                Depuis 2010, Neptune conçoit, installe et entretient des
                systèmes d'arrosage performants pour les collectivités, les
                professionnels et les particuliers. Notre parc de 2 hectares
                nous permet de stocker tout le matériel nécessaire pour répondre
                rapidement à vos besoins.
              </p>
              <ul className="expertise-list">
                <li>Arrosage automatique sur-mesure</li>
                <li>Conception de fontaines décoratives</li>
                <li>Solutions pour terrains de sport</li>
                <li>Systèmes éco-responsables</li>
              </ul>
            </div>
            <div className="presentation-image">
              <img
                src="/images/parc-materiel.jpg"
                alt="Parc de stockage Neptune"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Domaines d'Intervention */}
      <section className="domaines-section">
        <div className="container">
          <h2>Nos Domaines d'Intervention</h2>
          <div className="domaines-grid">
            <div className="domaine-card collectivites">
              <h3>Collectivités</h3>
              <p>Parcs municipaux, stades, ronds-points, voiries</p>
              <Link to="/realisations#collectivites" className="see-more">
                Voir nos réalisations
              </Link>
            </div>
            <div className="domaine-card particuliers">
              <h3>Particuliers</h3>
              <p>Jardins, potagers, terrains privés</p>
              <Link to="/realisations#particuliers" className="see-more">
                Découvrir
              </Link>
            </div>
            <div className="domaine-card fontaines">
              <h3>Fontaines</h3>
              <p>Création et rénovation de fontaines décoratives</p>
              <Link to="/realisations#fontaines" className="see-more">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Parc Matériel */}
      <section className="parc-section">
        <div className="container">
          <h2>Notre Parc Matériel</h2>
          <div className="parc-content">
            <p>
              Notre force : un parc de stockage de 20 000 m² nous permettant
              d'avoir en permanence :
            </p>
            <div className="materiel-list">
              <div className="materiel-item">
                <img src="/icons/tuyaux.png" alt="Tuyaux" />
                <span>+15 km de tuyaux en stock</span>
              </div>
              <div className="materiel-item">
                <img src="/icons/arroseurs.png" alt="Arroseurs" />
                <span>500 arroseurs disponibles</span>
              </div>
              <div className="materiel-item">
                <img src="/icons/pompes.png" alt="Pompes" />
                <span>30 modèles de pompes</span>
              </div>
              <div className="materiel-item">
                <img src="/icons/fontaines.png" alt="Fontaines" />
                <span>Composants pour fontaines</span>
              </div>
            </div>
            <p className="avantage-text">
              Cela nous permet une réactivité unique pour vos projets urgents !
            </p>
          </div>
        </div>
      </section>

      {/* Section Approche Technique */}
      <section className="technique-section">
        <div className="container">
          <h2>Notre Approche Technique</h2>
          <div className="technique-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Étude Hydraulique</h3>
              <p>Analyse précise de vos besoins et contraintes</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Conception Sur-Mesure</h3>
              <p>Plans détaillés avec solutions optimisées</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Installation Professionnelle</h3>
              <p>Par nos équipes qualifiées</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Maintenance Préventive</h3>
              <p>Contrats d'entretien adaptés</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Un projet d'arrosage ou de fontaine ?</h2>
          <p>Notre équipe vous conseille et vous accompagne</p>
          <Link to="/contact" className="cta-button">
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Neptune;
