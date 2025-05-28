import React, { useState } from "react";
import "../../styles/RecrutementPage/CandidatureSpontanee.css";

const CandidatureSpontanee = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    message: "",
    fichier: "Merci de joindre votre CV et lettre de motivation.",
    consentement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nom, prenom, telephone, email, message, consentement } = formData;

    if (!consentement) {
      alert("Veuillez accepter l'utilisation de vos données pour continuer.");
      return;
    }

    const subject = `Candidature spontanée - ${prenom} ${nom}`;
    const body = `
Nom : ${nom}
Prénom : ${prenom}
Téléphone : ${telephone}
Email : ${email}
Fichier : ${formData.fichier}

Message :
${message}
    `.trim();

    const mailtoLink = `mailto:recrutement@tonentreprise.fr?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="candidature-section">
      <h2>Candidature spontanée</h2>
      <p className="form-subtitle">*Champs obligatoires</p>
      <form onSubmit={handleSubmit} className="candidature-form">
        <div className="form-row">
          <input
            type="text"
            name="nom"
            placeholder="Nom *"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="prenom"
            placeholder="Prénom *"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <input
            type="tel"
            name="telephone"
            placeholder="Téléphone *"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-message">
          <textarea
            name="message"
            placeholder="Votre message *"
            required
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-consent">
          <label>
            <input
              type="checkbox"
              name="consentement"
              onChange={handleChange}
            />
            J’accepte que mes données saisies soient utilisées pour me contacter
            dans le cadre de ma demande. Je peux rectifier mes données à tout
            moment en suivant{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              ce lien
            </a>
            .
          </label>
        </div>

        <button type="submit" className="form-submit">
          Envoyer ma demande
        </button>
      </form>
    </section>
  );
};

export default CandidatureSpontanee;
