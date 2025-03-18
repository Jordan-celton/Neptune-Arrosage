// src/pages/Contact.js
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  // Adresse email à laquelle le message sera envoyé
  const emailAddress = "contact@neptune-arrosage.fr"; // Remplace par ton adresse email
  const subject = "Demande de contact"; // Sujet par défaut de l'email

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contactez-nous</h1>
      <div className="contact-details">
        <div className="contact-section">
          <FaMapMarkerAlt className="icon" />
          <h3>Adresse</h3>
          <p>3 Rue Réaumur, 44100 Nantes</p>
        </div>
        <div className="contact-section">
          <FaPhoneAlt className="icon" />
          <h3>Téléphone</h3>
          <p>02 40 73 64 89</p>
        </div>
        <div className="contact-section">
          <FaClock className="icon" />
          <h3>Horaires</h3>
          <ul>
            <li>
              <strong>Lundi :</strong> 08:00–18:00
            </li>
            <li>
              <strong>Mardi :</strong> 08:00–18:00
            </li>
            <li>
              <strong>Mercredi :</strong> 08:00–18:00
            </li>
            <li>
              <strong>Jeudi :</strong> 08:00–18:00
            </li>
            <li>
              <strong>Vendredi :</strong> 08:00–15:00
            </li>
            <li>
              <strong>Samedi :</strong> Fermé
            </li>
            <li>
              <strong>Dimanche :</strong> Fermé
            </li>
          </ul>
        </div>
      </div>

      {/* Bouton mailto pour ouvrir l'email par défaut */}
      <div className="contact-form">
        <h3>Envoyer un message</h3>
        <a
          href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`}
          className="contact-button-page"
        >
          Contacter par email
        </a>
      </div>
    </div>
  );
};

export default Contact;
