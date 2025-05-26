import React, { useState } from "react";
import "../../styles/ContactPage/ContactForm.css"; // Assurez-vous d'avoir un fichier CSS pour le style

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

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nom.trim()) newErrors.nom = "Nom est obligatoire";
    if (!formData.prenom.trim()) newErrors.prenom = "Prénom est obligatoire";
    if (!formData.email.trim()) {
      newErrors.email = "Email est obligatoire";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }
    if (!formData.telephone.trim())
      newErrors.telephone = "Téléphone est obligatoire";
    if (!formData.codePostal.trim())
      newErrors.codePostal = "Code postal est obligatoire";
    if (!formData.ville.trim()) newErrors.ville = "Ville est obligatoire";
    if (!formData.message.trim()) newErrors.message = "Message est obligatoire";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Ici vous pourriez ajouter la logique d'envoi au serveur
    console.log("Données du formulaire:", formData);

    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Votre message a été envoyé avec succès!");
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        societe: "",
        adresse: "",
        codePostal: "",
        ville: "",
        message: "",
        telephone: "",
      });
    }, 1000);
  };

  return (
    <div className="contact-form-container">
      <h1>Formulaire de contact</h1>
      <p className="required-fields">*Champs obligatoires</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nom">Nom *</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className={errors.nom ? "error" : ""}
            />
            {errors.nom && <span className="error-message">{errors.nom}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="prenom">Prénom *</label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className={errors.prenom ? "error" : ""}
            />
            {errors.prenom && (
              <span className="error-message">{errors.prenom}</span>
            )}
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
              className={errors.email ? "error" : ""}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Téléphone *</label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className={errors.telephone ? "error" : ""}
            />
            {errors.telephone && (
              <span className="error-message">{errors.telephone}</span>
            )}
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
              className={errors.codePostal ? "error" : ""}
            />
            {errors.codePostal && (
              <span className="error-message">{errors.codePostal}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="ville">Ville *</label>
            <input
              type="text"
              id="ville"
              name="ville"
              value={formData.ville}
              onChange={handleChange}
              className={errors.ville ? "error" : ""}
            />
            {errors.ville && (
              <span className="error-message">{errors.ville}</span>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Votre message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "error" : ""}
          />
          {errors.message && (
            <span className="error-message">{errors.message}</span>
          )}
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="consentement"
            name="consentement"
            required
          />
          <label htmlFor="consentement">
            J'accepte que mes données saisies soient utilisées pour me contacter
            dans le cadre de ma demande. Je peux rectifier mes données
            personnelles à tout moment en suivant ce lien.
          </label>
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
