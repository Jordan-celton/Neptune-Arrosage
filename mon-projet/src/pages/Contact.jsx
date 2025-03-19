import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import ContactMap from "../components/ContactMap";
import CTA from "../components/CTA";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* En-tête */}
      <header className="headerContact">
        <h1>Contactez-nous</h1>
        <p>
          Notre équipe est à votre écoute pour répondre à vos questions et vous
          accompagner dans vos projets.
        </p>
      </header>

      {/* Informations de contact */}
      <ContactInfo />

      {/* Formulaire de contact */}
      <ContactForm />

      {/* Carte interactive */}
      <ContactMap />

      {/* CTA final */}
      <CTA />
    </div>
  );
};

export default Contact;
