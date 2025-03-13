import React from "react";
import "../styles/Services.css"; // Assurez-vous que le CSS soit adapté
import { Link } from "react-scroll";
import servicesData from "../data/servicesData";
import image4 from "../assets/photos/istockphoto-612254260-2048x2048.webp";

import HomeContact from "../components/HomeContact";

const Services = () => {
  return (
    <div className="services-page">
      {/* Section d'Introduction avec fond animé */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${image4})` }}
      >
        <div className="hero-overlay">
          <h1>Transformez votre Espace</h1>
          <p>Explorez nos solutions innovantes pour embellir vos extérieurs.</p>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="btn-primary"
          >
            Découvrez nos services
          </Link>
        </div>
      </section>

      {/* Nouvelle Section - Nos Services et Produits */}
      <section className="info-supplementaires">
        <h2>Nos Services et Produits</h2>
        <div className="services">
          <div className="service">
            <h3>Négoce & Distribution de Matériaux</h3>
            <p>
              Nous proposons un large choix de matériaux et équipements pour
              l’aménagement des espaces verts. Retrouvez dans notre magasin plus
              de <strong>200 références</strong> de grandes marques : dallages,
              pavés, bordures, systèmes d’arrosage, et bien plus.
            </p>
            <ul className="features-list">
              <li>Conseil personnalisé par nos experts</li>
              <li>Produits de qualité pour un aménagement durable</li>
              <li>Stock disponible et livraison rapide</li>
            </ul>
          </div>

          <div className="service">
            <h3>Calepinage pour Parcs et Jardins</h3>
            <p>
              Notre service de <strong>calepinage sur-mesure</strong> vous
              accompagne dans la conception et l’aménagement de vos espaces
              extérieurs. Que ce soit pour un parc public ou un jardin privé,
              nous optimisons l’agencement des matériaux pour un rendu
              esthétique et fonctionnel.
            </p>
            <ul className="features-list">
              <li>Étude et modélisation 3D</li>
              <li>Sélection des matériaux adaptés</li>
              <li>Plan de pose détaillé pour une installation optimale</li>
            </ul>
          </div>

          <div className="service">
            <h3>Recyclage et Gestion Durable de l’Eau</h3>
            <p>
              Engagés dans une démarche écologique, nous proposons des solutions
              pour une gestion durable des ressources en eau.
              <strong>
                Récupération des eaux pluviales, systèmes de pompage et stockage
              </strong>
              pour réduire l’impact environnemental et optimiser l’irrigation
              des espaces verts.
            </p>
            <ul className="features-list">
              <li>Systèmes de filtration et stockage d’eau</li>
              <li>Solutions économiques et écologiques</li>
              <li>Intégration avec vos installations existantes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section Services - Grid horizontale avec effet hover */}
      <section id="services" className="services-section">
        <h2>Nos Services</h2>
        <div className="service-cards-container">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.image} alt={service.title} />
              <div className="card-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="process-section">
        <h2>Notre Processus en 4 étapes</h2>
        <div className="process-steps">
          <div className="step">
            <h4>1. Consultation Initiale</h4>
            <p>
              Nous commençons par une analyse approfondie de vos besoins
              spécifiques. Nous vous écoutons attentivement pour comprendre vos
              attentes, puis nous vous fournissons un devis personnalisé et
              détaillé.
            </p>
          </div>

          <div className="step">
            <h4>2. Conception Sur-Mesure</h4>
            <p>
              Une fois les besoins identifiés, nous créons une solution
              entièrement adaptée à vos exigences. Chaque projet est unique et
              nous nous assurons que la conception reflète parfaitement vos
              objectifs.
            </p>
          </div>

          <div className="step">
            <h4>3. Installation Professionnelle</h4>
            <p>
              Nous procédons à l'installation de la solution dans votre
              environnement, en veillant à respecter les délais et à tester
              chaque fonctionnalité pour assurer une performance optimale dès le
              départ.
            </p>
          </div>

          <div className="step">
            <h4>4. Suivi et Assistance Continue</h4>
            <p>
              Une fois l'installation terminée, nous ne vous laissons pas seuls.
              Notre équipe assure un suivi régulier, avec un entretien prévu et
              une assistance disponible en cas de besoin, afin de garantir une
              satisfaction à long terme.
            </p>
          </div>
        </div>
        <p className="process-note">
          Notre approche détaillée et rigoureuse garantit que chaque étape est
          réalisée avec soin, dans le but de vous offrir une solution sur
          mesure, efficace et pérenne.
        </p>
      </section>

      {/* Section de contact */}
      <section className="contact-section">
        <HomeContact />
      </section>
    </div>
  );
};

export default Services;
