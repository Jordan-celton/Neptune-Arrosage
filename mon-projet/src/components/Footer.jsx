import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Footer.css";
import ContactHome from "../../src/components/HomePage/ContactHome";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <footer className="footer">
      <ContactHome data-aos="fade-up" />

      <div className="footer-container">
        {/* Section Contact - Nantes */}
        <div
          className="footer-section"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h3 className="footer-section-title">Nantes</h3>
          <div className="footer-contact">
            <p>
              3 rue Réaumur
              <br />
              44100 Nantes
            </p>
          </div>
          <div className="footer-contact-details">
            <a
              href="mailto:contact@neptunearrosage.com"
              className="footer-link"
            >
              contact@neptunearrosage.com
            </a>
            <p>02 40 73 64 89</p>
          </div>
        </div>

        {/* Section Paris */}
        <div
          className="footer-section"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h3 className="footer-section-title">Paris</h3>
          <div className="footer-contact">
            <p>
              1 rue du bois des carreaux
              <br />
              92290 Chantenay Malabry
            </p>
          </div>
        </div>

        {/* Section Entreprise */}
        <div className="footer-section">
          <h3 className="footer-section-title">Neptune arrosage</h3>
          <ul className="footer-links">
            <li>
              <Link to="/recrutement">Recrutement</Link>
            </li>
            <li>
              <Link to="/neptune">Qui sommes-nous ?</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/contact#mentions">Mentions légales</Link>
            </li>
          </ul>
        </div>

        {/* Section Services */}
        <div className="footer-section">
          <h3 className="footer-section-title">Nos services</h3>
          <ul className="footer-links">
            <li>
              <Link to="/services#fontaines">Fontainerie</Link>
            </li>
            <li>
              <Link to="/services#sports">Terrains sportifs</Link>
            </li>
            <li>
              <Link to="/services#jardins">Jardins et espaces publics</Link>
            </li>
            <li>
              <Link to="/services#materiel">Matériel d'arrosage</Link>
            </li>
            <li>
              <Link to="/services#contrats">Contrats d'entretien</Link>
            </li>
            <li>
              <Link to="/services#recuperation">
                Récupération eaux pluviales
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="footer-bottom" data-aos="fade-up" data-aos-delay="500">
        <p>
          © {new Date().getFullYear()} Neptune Arrosage - Tous droits réservés
        </p>
      </div> */}
    </footer>
  );
};

export default Footer;
