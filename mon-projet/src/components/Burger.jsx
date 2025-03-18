import React from "react";

const Burger = ({ menuOpen, toggleMenu }) => {
  return (
    <button
      className={`burger ${menuOpen ? "open" : ""}`}
      onClick={toggleMenu}
      aria-label="Menu"
      aria-expanded={menuOpen}
    >
      <span className="burger-line"></span>
      <span className="burger-line"></span>
      <span className="burger-line"></span>
    </button>
  );
};

export default Burger;
