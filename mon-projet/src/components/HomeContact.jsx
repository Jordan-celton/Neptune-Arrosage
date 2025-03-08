import React from "react";
import "../styles/HomeContact.css";

const HomeContact = () => {
  return (
    <section className="home-contact-container">
      <div className="home-contact-title">
        <h1>Contact</h1>
      </div>
      <div className="home-contact-content">
        <p>
          Vous avez un projet ou une question ? Nous sommes à votre disposition
          pour vous accompagner et répondre à vos besoins.
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <h3>📍 Adresse</h3>
            <p>123 Rue de l'Arrosage, 44000 Nantes, France</p>
          </div>

          <div className="contact-item">
            <h3>📞 Téléphone</h3>
            <p>
              <a href="tel:+33234567890"> 02 34 56 78 90</a>
            </p>
          </div>

          <div className="contact-item">
            <h3>✉️ Email</h3>
            <p>
              <a href="mailto:contact@neptune-arrosage.fr">
                contact@neptune-arrosage.fr
              </a>
            </p>
          </div>

          <div className="contact-item">
            <h3>🕒 Horaires</h3>
            <p>Lundi - Vendredi : 9h00 - 18h00</p>
            <p>Samedi : 9h00 - 13h00</p>
            <p>Dimanche : Fermé</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
