import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Formulaire envoyé! Nous vous contacterons bientôt.");
  };

  return (
    <div className="contact-page">
      <h1 className="animate">Contactez-nous</h1>

      <div className="contact-container">
        {/* Information column */}
        <div className="contact-info animate delay-1">
          <h2>Nos coordonnées</h2>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-text">
                <h3>Adresse</h3>
                <p>
                  3 rue Réaumur
                  <br />
                  44100 Nantes
                </p>
                <p>
                  1 rue du bois des carreaux
                  <br />
                  92290 Chantenay Malabry
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-text">
                <h3>Téléphone</h3>
                <p>
                  <a href="tel:+33123456789">02 40 73 64 89</a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-text">
                <h3>Email</h3>
                <p>
                  <a href="mailto:contact@neptunearrosage.com">
                    contact@neptunearrosage.com
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaClock />
              </div>
              <div className="contact-text">
                <h3>Horaires</h3>
                <p>Lundi-Vendredi: 8h-18h</p>
              </div>
            </div>
          </div>

          <h2>Suivez-nous</h2>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Contact form */}
        <div className="contact-form animate delay-2">
          <h2>Envoyez-nous un message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Nom complet
              </label>
              <input type="text" id="name" className="form-control" required />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Téléphone
              </label>
              <input type="tel" id="phone" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Sujet
              </label>
              <select id="subject" className="form-control" required>
                <option value="">Sélectionnez un sujet</option>
                <option value="fontaines">Fontainerie</option>
                <option value="sports">Terrains sportifs</option>
                <option value="jardins">Jardins & Espaces publics</option>
                <option value="contrats">Contrats d'entretien</option>
                <option value="autre">Autre demande</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                className="form-control"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>

      {/* Google Maps */}
      <div className="contact-map animate delay-3">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.020125768846!2d-1.5953812870116357!3d47.19661861607702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eb844e5e460d%3A0x685d1070062ac7b9!2s3%20Rue%20R%C3%A9aumur%2C%2044100%20Nantes!5e0!3m2!1sfr!2sfr!4v1744179531460!5m2!1sfr!2sfr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
