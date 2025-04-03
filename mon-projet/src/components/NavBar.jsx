import React, { useState, useRef, useEffect } from "react";
import "../styles/NavBar.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const servicesRef = useRef(null);

  // Ferme le sous-menu si on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesHovered(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/" aria-label="Accueil Neptune Arrosage"></a>
      </div>

      <button
        className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
        aria-label="Menu navigation"
      >
        <span className="navbar-toggle-icon"></span>
      </button>

      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#neptune" onClick={() => setIsMenuOpen(false)}>
            NEPTUNE
          </a>
        </li>
        <li
          className="services-menu"
          ref={servicesRef}
          onMouseEnter={() => setIsServicesHovered(true)}
          onMouseLeave={() => setIsServicesHovered(false)}
          onClick={() =>
            window.innerWidth <= 768 && setIsServicesHovered(!isServicesHovered)
          }
        >
          <a href="#services">
            NOS SERVICES
            {isServicesHovered ? <FaChevronUp /> : <FaChevronDown />}
          </a>
          <ul className={`submenu ${isServicesHovered ? "show" : ""}`}>
            <li>
              <a href="#fontaines" onClick={() => setIsMenuOpen(false)}>
                FONTAINERIE
              </a>
            </li>
            <li>
              <a href="#sports" onClick={() => setIsMenuOpen(false)}>
                TERRAINS SPORTIFS
              </a>
            </li>
            <li>
              <a href="#jardins" onClick={() => setIsMenuOpen(false)}>
                JARDINS & ESPACES PUBLICS
              </a>
            </li>
            <li>
              <a href="#contrats" onClick={() => setIsMenuOpen(false)}>
                CONTRATS ENTRETIEN
              </a>
            </li>
            <li>
              <a href="#recupération" onClick={() => setIsMenuOpen(false)}>
                RECUPERATION EAU DE PLUIE
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#realisations" onClick={() => setIsMenuOpen(false)}>
            RÉALISATIONS
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
