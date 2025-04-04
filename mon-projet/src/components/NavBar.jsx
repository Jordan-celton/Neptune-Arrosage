import React, { useState, useRef, useEffect } from "react";
import "../styles/NavBar.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navbarRef = useRef(null);
  const servicesRef = useRef(null);

  // Fermeture du menu lors du clic à l'extérieur ou sur un lien
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Fermer le menu principal si clic à l'extérieur
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }

      // Fermer le sous-menu services si clic à l'extérieur
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    // Fermer le menu lors du redimensionnement de la fenêtre
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Empêcher le défilement de la page lorsque le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsServicesOpen(false);
    }
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-logo">
        <a href="/" aria-label="Accueil Neptune Arrosage"></a>
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
        aria-hidden={!isMenuOpen}
      >
        <li>
          <a href="#neptune" onClick={closeMenu}>
            NEPTUNE
          </a>
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
            onClick={toggleServices}
            aria-expanded={isServicesOpen}
            aria-controls="services-submenu"
            className="services-button"
          >
            NOS SERVICES
            {isServicesOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          <ul
            id="services-submenu"
            className={`submenu ${isServicesOpen ? "show" : ""}`}
            aria-hidden={!isServicesOpen}
          >
            <li>
              <a href="#fontaines" onClick={closeMenu}>
                FONTAINERIE
              </a>
            </li>
            <li>
              <a href="#sports" onClick={closeMenu}>
                TERRAINS SPORTIFS
              </a>
            </li>
            <li>
              <a href="#jardins" onClick={closeMenu}>
                JARDINS & ESPACES PUBLICS
              </a>
            </li>
            <li>
              <a href="#contrats" onClick={closeMenu}>
                CONTRATS ENTRETIEN
              </a>
            </li>
            <li>
              <a href="#recupération" onClick={closeMenu}>
                RECUPERATION EAU DE PLUIE
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#realisations" onClick={closeMenu}>
            RÉALISATIONS
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
