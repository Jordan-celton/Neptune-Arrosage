import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../styles/NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navbarRef = useRef(null);
  const servicesRef = useRef(null);

  // Gestion du scroll et du body quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("navbar-open");
    } else {
      document.body.classList.remove("navbar-open");
    }
  }, [isMenuOpen]);

  // Fermeture au clic extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fermeture au redimensionnement
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsServicesOpen(false);
    }
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-logo">
        <NavLink
          to="/"
          aria-label="Accueil Neptune Arrosage"
          onClick={closeAllMenus}
        >
          {/* Logo sera affiché via le CSS */}
        </NavLink>
      </div>

      <button
        className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-controls="navbar-links"
      >
        <span className="navbar-toggle-icon"></span>
      </button>

      <ul
        id="navbar-links"
        className={`navbar-links ${isMenuOpen ? "active" : ""}`}
        hidden={!isMenuOpen}
      >
        <li>
          <NavLink
            to="/neptune"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeAllMenus}
          >
            NEPTUNE
          </NavLink>
        </li>

        <li
          className="services-menu"
          ref={servicesRef}
          onMouseEnter={() =>
            window.innerWidth > 768 && setIsServicesOpen(true)
          }
          onMouseLeave={() =>
            window.innerWidth > 768 && setIsServicesOpen(false)
          }
        >
          <button
            className="services-button"
            onClick={toggleServices}
            aria-expanded={isServicesOpen}
            aria-controls="services-submenu"
          >
            <NavLink to="/services">
              NOS SERVICES
              {isServicesOpen ? <FaChevronUp /> : <FaChevronDown />}
            </NavLink>
          </button>

          <ul
            id="services-submenu"
            className={`submenu ${isServicesOpen ? "show" : ""}`}
            aria-hidden={!isServicesOpen}
          >
            <li>
              <NavLink
                to="/services#fontaines"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeAllMenus}
              >
                FONTAINERIE
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services#sports"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeAllMenus}
              >
                TERRAINS SPORTIFS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services#jardins"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeAllMenus}
              >
                PARCS ET JARDINS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services#materiel"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeAllMenus}
              >
                MATERIEL D'ARROSAGE
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services#contrats"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeAllMenus}
              >
                CONTRATS ENTRETIEN
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services#recuperation"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeAllMenus}
              >
                RECUPERATION EAU DE PLUIE
              </NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink
            to="/realisations"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeAllMenus}
          >
            RÉALISATIONS
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeAllMenus}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
