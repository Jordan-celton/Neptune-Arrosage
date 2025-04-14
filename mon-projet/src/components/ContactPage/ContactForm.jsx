import React, { useState } from "react";
import "../../styles/ContactPage/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    societe: "",
    telephone: "",
    email: "",
    adresse: "",
    codePostal: "",
    ville: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nom) newErrors.nom = "Ce champ est obligatoire";
    if (!formData.prenom) newErrors.prenom = "Ce champ est obligatoire";
    if (!formData.telephone) newErrors.telephone = "Ce champ est obligatoire";
    if (!formData.email) {
      newErrors.email = "Ce champ est obligatoire";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }
    if (!formData.codePostal) newErrors.codePostal = "Ce champ est obligatoire";
    if (!formData.ville) newErrors.ville = "Ce champ est obligatoire";
    if (!formData.message) newErrors.message = "Ce champ est obligatoire";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const subject = `Contact de ${formData.prenom} ${formData.nom}`;
    const body = `
      Prénom: ${formData.prenom}
      Nom: ${formData.nom}
      Société: ${formData.societe || "Non renseignée"}
      Téléphone: ${formData.telephone}
      Email: ${formData.email}
      Adresse: ${formData.adresse || "Non renseignée"}
      Code Postal: ${formData.codePostal}
      Ville: ${formData.ville}
      
      Message:
      ${formData.message}
    `;

    const mailtoLink = `mailto:contact@neptunearrosage.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="contact-form-section">
      <div className="container">
        <h2 className="section-title">Formulaire de contact</h2>
        <p className="required-fields-note">*Champs obligatoires</p>

        <form onSubmit={handleSubmit} className="contact-form">
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
            <label htmlFor="adresse">Adresse</label>
            <input
              type="text"
              id="adresse"
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
            />
          </div>

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

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {Object.keys(errors).map((key) => (
            <p key={key} className="error-message">
              {errors[key]}
            </p>
          ))}

          <div className="form-checkbox-group">
            <input
              type="checkbox"
              id="acceptation"
              name="acceptation"
              required
            />
            <label htmlFor="acceptation">
              J'accepte que mes données saisies soient utilisées pour me
              contacter dans le cadre de ma demande.
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Envoyer ma demande
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
