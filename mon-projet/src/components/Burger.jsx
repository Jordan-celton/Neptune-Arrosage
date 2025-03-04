import { useEffect } from "react";

function Burger({ menuOpen, toggleMenu, closeMenu, navbarRef }) {
  // Ferme le menu mobile quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, navbarRef, closeMenu]);

  // Gestionnaire pour fermer le menu avec la touche "Escape"
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && menuOpen) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);
    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [menuOpen, closeMenu]);

  return (
    <div className="burger-container">
      {/* Menu Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className={`bar ${menuOpen ? "bar1" : ""}`}></span>
        <span className={`bar ${menuOpen ? "bar2" : ""}`}></span>
        <span className={`bar ${menuOpen ? "bar3" : ""}`}></span>
      </div>

      {/* Affiche la croix quand le menu est ouvert */}
      {menuOpen && (
        <button className="close-btn" onClick={closeMenu}>
          X
        </button>
      )}
    </div>
  );
}

export default Burger;
