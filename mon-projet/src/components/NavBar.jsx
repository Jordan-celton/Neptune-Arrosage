import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../data/navLinks"; // Import des liens
import "../styles/NavBar.css";
import logo from "../assets/logo.jpg";
import Burger from "../components/Burger";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null);

  // Ferme le menu mobile quand on clique sur un lien
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  // Détecte le scroll pour rendre la navbar plus visible
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ferme le menu quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeMenu]);

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
          </Link>
        </div>

        {/* Utilisation du composant Burger */}
        <Burger
          menuOpen={menuOpen}
          toggleMenu={() => setMenuOpen((prev) => !prev)}
        />

        {/* Liens de navigation */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={getLinkClass(link.path)}
                onClick={closeMenu}
                aria-current={
                  location.pathname === link.path ? "page" : undefined
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
