import { Link } from "react-router-dom";
import "../styles/Home.css"; // Assure-toi d'avoir un fichier CSS pour les styles

function Home() {
  return (
    <main className="home-container">
      {/* Section principale */}

      <section className="about-us"></section>

      {/* Services */}
      <section className="services-preview">
        <Link to="/services" className="btn-services">
          Découvrez tous nos services
        </Link>
      </section>

      {/* Contact */}
      <section className="contact-cta">
        <h2>Vous souhaitez en savoir plus ?</h2>
        <Link to="/contact" className="btn-contact">
          Contactez-nous
        </Link>
      </section>
    </main>
  );
}

export default Home;
