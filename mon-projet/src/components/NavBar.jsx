import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fonction pour activer/désactiver le menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "active" : ""}`}>
      <div className="navbar-header">
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Logo Neptune Arrosage" className="logo-img" />
            <span>Neptune Arrosage</span>
          </Link>
        </div>

        {/* Menu Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Liens de navigation */}
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/realisations" className="nav-link">
              Réalisations
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
