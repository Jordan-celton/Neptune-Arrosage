import React from "react";
import "../styles/Services.css";

const Services = () => {
  return (
    <div className="services-page">
      <h1 className="page-title">Nos Services</h1>

      {/* Section Fontainerie */}
      <section id="fontaines" className="service-section">
        <h2 className="service-title">Fontainerie</h2>
        <div className="service-content">
          <div className="service-description">
            <h3>Création, installation et entretien de fontaines sur mesure</h3>
            <p>
              Nous concevons et réalisons des fontaines uniques pour embellir
              vos espaces intérieurs et extérieurs. Nos fontaines allient
              esthétique, qualité et technologie pour créer des ambiances
              apaisantes.
            </p>

            <div className="service-features">
              <div className="feature-card">
                <div className="feature-icon">
                  <img src="/icons/custom-design.svg" alt="Design sur mesure" />
                </div>
                <h4>Design sur mesure</h4>
                <p>Créations adaptées à votre espace et à votre style</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <img src="/icons/water-tech.svg" alt="Technologie avancée" />
                </div>
                <h4>Technologie avancée</h4>
                <p>Systèmes économes en eau et énergie</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <img src="/icons/maintenance.svg" alt="Entretien complet" />
                </div>
                <h4>Entretien complet</h4>
                <p>Nettoyage, réparation et optimisation</p>
              </div>
            </div>
          </div>

          <div className="service-gallery">
            <h3>Nos réalisations</h3>
            <div className="gallery-grid">
              <img
                src="/images/fontaine-modern.jpg"
                alt="Fontaine moderne"
                className="gallery-image"
              />
              <img
                src="/images/fontaine-classic.jpg"
                alt="Fontaine classique"
                className="gallery-image"
              />
              <img
                src="/images/fontaine-jardin.jpg"
                alt="Fontaine de jardin"
                className="gallery-image"
              />
              <img
                src="/images/fontaine-interieur.jpg"
                alt="Fontaine d'intérieur"
                className="gallery-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Terrains Sportifs */}
      <section id="sports" className="service-section">
        <h2 className="service-title">Terrains Sportifs</h2>
        <div className="service-content">
          <div className="service-description">
            <h3>Aménagement et entretien d'aires sportives</h3>
            <p>
              Nous proposons des solutions complètes pour les terrains de
              football, tennis, pétanque et autres surfaces sportives, avec des
              matériaux de qualité professionnelle.
            </p>

            <div className="service-features">
              <div className="feature-card">
                <div className="feature-icon">
                  <img src="/icons/terrain-foot.svg" alt="Terrains football" />
                </div>
                <h4>Terrains de football</h4>
                <p>Pelouse naturelle ou synthétique aux normes FIFA</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <img src="/icons/terrain-tennis.svg" alt="Terrains tennis" />
                </div>
                <h4>Terrains de tennis</h4>
                <p>Revêtements en terre battue, gazon ou résine</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <img src="/icons/maintenance.svg" alt="Entretien" />
                </div>
                <h4>Entretien régulier</h4>
                <p>Tonte, arrosage, marquage et réparation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Jardins & Espaces Publics */}
      <section id="jardins" className="service-section">
        <h2 className="service-title">Jardins & Espaces Publics</h2>
        <div className="service-content">
          <div className="service-description">
            <h3>Création et gestion d'espaces verts</h3>
            <p>
              De la conception paysagère à l'entretien régulier, nous valorisons
              les espaces verts publics et privés avec une approche écologique
              et durable.
            </p>

            <div className="service-features">
              <div className="feature-card">
                <div className="feature-icon">
                  <img src="/icons/paysagisme.svg" alt="Paysagisme" />
                </div>
                <h4>Aménagement paysager</h4>
                <p>Conception sur plan et réalisation clé en main</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <img src="/icons/parcs.svg" alt="Espaces publics" />
                </div>
                <h4>Espaces publics</h4>
                <p>Plantation, mobilier urbain et éclairage</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <img src="/icons/eco.svg" alt="Approche écologique" />
                </div>
                <h4>Approche écologique</h4>
                <p>Plantes locales, gestion raisonnée de l'eau</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contrats Entretien */}
      <section id="contrats" className="service-section">
        <h2 className="service-title">Contrats d'Entretien</h2>
        <div className="service-content">
          <div className="service-description">
            <h3>Des solutions d'entretien adaptées à vos besoins</h3>
            <p>
              Abonnez-vous à nos formules d'entretien pour bénéficier d'un
              service régulier et professionnel sans souci d'organisation.
            </p>

            <div className="contract-options">
              <div className="contract-card">
                <h4>Formule Basique</h4>
                <ul>
                  <li>Tonte mensuelle</li>
                  <li>Désherbage</li>
                  <li>Tailles simples</li>
                </ul>
                <button className="contract-btn">En savoir plus</button>
              </div>

              <div className="contract-card premium">
                <div className="popular-badge">Populaire</div>
                <h4>Formule Complète</h4>
                <ul>
                  <li>Entretien hebdomadaire</li>
                  <li>Arrosage automatique</li>
                  <li>Engrais et traitements</li>
                  <li>Nettoyage hivernal</li>
                </ul>
                <button className="contract-btn">En savoir plus</button>
              </div>

              <div className="contract-card">
                <h4>Formule Sur Mesure</h4>
                <ul>
                  <li>Personnalisation complète</li>
                  <li>Interventions à la demande</li>
                  <li>Services additionnels</li>
                </ul>
                <button className="contract-btn">Contactez-nous</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Matériel d'Arrosage */}
      <section id="materiel" className="service-section">
        <h2 className="service-title">Matériel d'Arrosage</h2>
        <div className="service-content">
          <div className="service-description">
            <h3>Solutions d'arrosage innovantes</h3>
            <p>
              Nous fournissons et installons tout le matériel nécessaire pour un
              arrosage efficace et économe en eau, des petits jardins aux grands
              espaces verts.
            </p>

            <div className="product-grid">
              <div className="product-card">
                <img
                  src="/images/arrosage-automatique.jpg"
                  alt="Arrosage automatique"
                />
                <h4>Systèmes automatiques</h4>
                <p>Programmateurs, électrovannes, tuyères</p>
                <button className="product-btn">Voir catalogue</button>
              </div>

              <div className="product-card">
                <img src="/images/asperseurs.jpg" alt="Asperseurs" />
                <h4>Asperseurs</h4>
                <p>Tous modèles pour surfaces variables</p>
                <button className="product-btn">Voir catalogue</button>
              </div>

              <div className="product-card">
                <img src="/images/goutte-a-goutte.jpg" alt="Goutte à goutte" />
                <h4>Goutte-à-goutte</h4>
                <p>Solutions économiques pour massifs et potagers</p>
                <button className="product-btn">Voir catalogue</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Récupération Eau de Pluie (optionnelle) */}
      <section id="recuperation" className="service-section">
        <h2 className="service-title">Récupération d'Eau de Pluie</h2>
        <div className="service-content">
          <div className="service-description">
            <h3>Des solutions durables pour économiser l'eau</h3>
            <p>
              Nos systèmes de récupération permettent de valoriser les eaux
              pluviales pour un arrosage écologique et économique.
            </p>
            <div className="cta-block">
              <button className="primary-cta">Demander une étude</button>
              <button className="secondary-cta">Voir les solutions</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
