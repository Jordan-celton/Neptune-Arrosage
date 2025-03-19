import React from "react";

const ContactForm = () => {
  return (
    <section className="contact-form">
      <h2>Envoyez-nous un message</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Téléphone (optionnel)</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Sujet</label>
          <select id="subject" name="subject" required>
            <option value="Demande de devis">Demande de devis</option>
            <option value="Support technique">Support technique</option>
            <option value="Question générale">Question générale</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="button primary">
          Envoyer le message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
