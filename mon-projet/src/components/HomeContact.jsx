import React from "react";
import "../styles/HomeContact.css";

const HomeContact = () => {
  return (
    <section className="home-contact-container">
      <div className="home-contact-title">
        <h1>Contact</h1>
      </div>
      <div className="home-contact-content">
        <p className="contact-text">Vous avez un projet ? Contactez-nous !</p>

        <a href="mailto:contact@neptune-arrosage.fr" className="contact-button">
          Contactez-nous
        </a>
      </div>
    </section>
  );
};

export default HomeContact;
