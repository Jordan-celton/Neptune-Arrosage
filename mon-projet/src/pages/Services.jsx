import React from "react";
import "../styles/Services.css"; // Assurez-vous que le CSS soit adapté
import { Link } from "react-scroll";
import image1 from "../assets/photos/20200512_155618.webp";
import image2 from "../assets/photos/Fontaine Rueil Imp 1.webp";
import image3 from "../assets/photos/sprinkler-498514_1920.webp";
import image4 from "../assets/photos/istockphoto-612254260-2048x2048.webp";
import image5 from "../assets/photos/irrigation-7262563_1920.webp";
import HomeContact from "../components/HomeContact";

const servicesData = [
  {
    title: "Espace Public",
    description:
      "Transformez les espaces publics en lieux accueillants et fonctionnels grâce à nos solutions innovantes d'ilots de fraicheur et de canopées brumisation.",
    image: image1,
  },
  {
    title: "Fontaines et Bassins",
    description:
      "Créez des ambiances uniques et rafraichissantes avec nos fontaines et bassins d'agrément, idéales pour les jardins et les espaces de détente.",
    image: image2,
  },
  {
    title: "Terrains sportifs",
    description:
      "Améliorez les performances de vos terrains sportifs avec nos solutions de brumisation et de rafraichissement, idéales pour les clubs et les collectivités.",
    image: image3,
  },
  {
    title: "Terres agricoles",
    description:
      "Optimisez la production de vos terres agricoles avec nos solutions de brumisation et d'irrigation, idéales pour les exploitations et les coopératives.",
    image: image5,
  },
];

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

      {/* Section Processus - Illustrations interactives */}
      <section className="process-section">
        <h2>Notre Processus</h2>
        <div className="process-steps">
          <div className="step">
            <h4>1. Consultation</h4>
            <p>Analyse des besoins et devis.</p>
          </div>
          <div className="step">
            <h4>2. Conception</h4>
            <p>Planification sur mesure.</p>
          </div>
          <div className="step">
            <h4>3. Installation</h4>
            <p>Mise en place et tests.</p>
          </div>
          <div className="step">
            <h4>4. Suivi</h4>
            <p>Entretien et assistance après installation.</p>
          </div>
        </div>
      </section>

      {/* Section de contact */}
      <section className="contact-section">
        <HomeContact />
      </section>
    </div>
  );
};

export default Services;
