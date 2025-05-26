import React, { useState } from "react";
import "../../styles/ContactPage/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    societe: "",
    email: "",
    adresse: "",
    codePostal: "",
    ville: "",
    message: "",
    telephone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createMailToLink = () => {
    const {
      nom,
      prenom,
      societe,
      email,
      adresse,
      codePostal,
      ville,
      message,
      telephone,
    } = formData;

    const subject = encodeURIComponent("Demande de contact depuis le site");
    const body = encodeURIComponent(
      `Nom : ${nom}\nPrénom : ${prenom}\nSociété : ${societe}\nEmail : ${email}\nTéléphone : ${telephone}\nAdresse : ${adresse}, ${codePostal} ${ville}\n\nMessage :\n${message}`
    );

    return `mailto:contact@neptunearrosage.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-form-container">
      <h1>Formulaire de contact</h1>
      <p className="required-fields">*Champs obligatoires</p>

      <form
        action={createMailToLink()}
        method="GET"
        onSubmit={() =>
          setTimeout(() => (window.location.href = createMailToLink()), 100)
        }
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nom">Nom *</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="prenom">Prénom *</label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="societe">Société</label>
          <input
            type="text"
            id="societe"
            name="societe"
            value={formData.societe}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="telephone">Téléphone *</label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="adresse">Adresse</label>
          <input
            type="text"
            id="adresse"
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="codePostal">Code Postal *</label>
            <input
              type="text"
              id="codePostal"
              name="codePostal"
              value={formData.codePostal}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ville">Ville *</label>
            <input
              type="text"
              id="ville"
              name="ville"
              value={formData.ville}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Votre message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="checkbox-group">
          <input type="checkbox" id="consentement" required />
          <label htmlFor="consentement">
            J'accepte que mes données soient utilisées pour me contacter.
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Envoyer ma demande
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
