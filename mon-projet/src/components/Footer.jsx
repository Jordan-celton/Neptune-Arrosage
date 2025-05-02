import React from "react";
import "../styles/Footer.css";
import ContactHome from "../../src/components/HomePage/ContactHome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ContactHome />
      <div className="footer-container">
        {/* Section Contact - Nantes */}
        <div className="footer-section">
          <h3 className="footer-section-title">Nantes</h3>
          <div className="footer-contact">
            <p>
              3 rue Réaumur
              <br />
              44100 Nantes
            </p>
          </div>
          <div className="footer-contact">
            <a
              href="mailto:contact@neptunearrosage.com"
              className="footer-link"
            >
              contact@neptunearrosage.com
            </a>
          </div>

          <div className="footer-contact">
            <p>02 40 73 64 89</p>
          </div>
        </div>

        {/* Section Paris */}
        <div className="footer-section">
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
              <Link to="/contact"> Recrutement</Link>
            </li>
            <li>
              <Link to="/neptune">Qui sommes-nous ?</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>Mentions légales</li>
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
              <Link to="/services#jardins">Jardins et parcs</Link>
            </li>
            <li>
              <Link to="/services#materiel">Matériel d'arrosage</Link>
            </li>
            <li>
              <Link to="/services#contrats">Contrats d'entretien</Link>
            </li>
            <li>
              <Link to="/services#recuperation">
                Récupération des eaux pluviales
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Neptune Arrosage - Tous droits réservés
        </p>
      </div>
    </footer>
  );
};

export default Footer;
