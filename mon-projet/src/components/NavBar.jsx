// Navbar.js
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../assets/logo.jpg";
import Burger from "../components/Burger"; // Importation du nouveau composant

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null); // Ref pour la navbar

  // Fonction pour activer/désactiver le menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Ferme le menu mobile quand on clique sur un lien
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Détecte le scroll pour rendre la navbar plus visible
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Vérifie si la route actuelle correspond à un lien
  const getLinkClass = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <nav
      ref={navbarRef}
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        menuOpen ? "active" : ""
      }`}
    >
      <div className="navbar-header">
        <div className="logo">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img src={logo} alt="Logo Neptune Arrosage" className="logo-img" />
            <span>Neptune Arrosage</span>
          </Link>
        </div>

        {/* Utilisation du composant Burger */}
        <Burger
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
          navbarRef={navbarRef} // Passer la référence de la navbar
        />

        {/* Liens de navigation */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className={getLinkClass("/")} onClick={closeMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={getLinkClass("/services")}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/realisations"
              className={getLinkClass("/realisations")}
              onClick={closeMenu}
            >
              Réalisations
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={getLinkClass("/contact")}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
