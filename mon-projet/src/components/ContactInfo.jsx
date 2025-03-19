import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <div className="info-grid">
        <div className="info-item">
          <FaMapMarkerAlt className="icon" />
          <h3>Adresse</h3>
          <p>3 Rue Réaumur, 44100 Nantes</p>
        </div>
        <div className="info-item">
          <FaPhoneAlt className="icon" />
          <h3>Téléphone</h3>
          <p>02 40 73 64 89</p>
        </div>
        <div className="info-item">
          <FaClock className="icon" />
          <h3>Horaires</h3>
          <ul>
            <li>
              <strong>Lundi au Jeudi :</strong> 08:00–18:00
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
    </section>
  );
};

export default ContactInfo;
