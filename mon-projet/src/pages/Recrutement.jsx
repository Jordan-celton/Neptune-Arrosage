// src/pages/Recrutement.js
import React, { useState } from "react";
import "../styles/Recrutement.css"; // Crée un fichier CSS pour le style de cette page
import { FaFileAlt, FaEnvelope, FaUserTie } from "react-icons/fa";

const Recrutement = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
  });

  // Fonction pour créer l'URL mailto
  const createMailtoLink = () => {
    const emailAddress = "contact@neptune-arrosage.fr";
    const subject = "Candidature pour un poste";
    const body = `
      Nom: ${formData.name}
      Email: ${formData.email}
      Poste souhaité: ${formData.position}
      Message: ${formData.message}
    `;
    return `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  // Mise à jour des champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="recrutement-container">
      <h1 className="recrutement-title">Rejoignez notre équipe</h1>

      <div className="recrutement-details">
        <p>
          Nous recherchons des talents passionnés pour rejoindre notre équipe
          dynamique !
        </p>

        <div className="offer-details">
          <h3>
            <FaUserTie /> Offres disponibles :
          </h3>
          <div className="offer-cards">
            <div className="offer-card">
              <h4>Chef de Chantier – Arrosage Automatique</h4>
              <strong>
                Le poste consiste à encadrer une équipe, organiser et suivre les
                chantiers, gérer les approvisionnements en matériel et les
                ressources humaines, et implanter des réseaux hydrauliques et
                électriques. Il faut également lire et interpréter des plans,
                entretenir le matériel de terrassement, assurer le respect des
                normes de sécurité et qualité, effectuer les réglages des
                installations, former les équipes sur le terrain, et rendre
                compte de l'avancement des travaux.
              </strong>
              <p>
                <strong>Profil recherché :</strong> Espaces verts, Travaux
                publics, CS Arrosage ou expérience de 3 à 5 ans
              </p>
              <p>
                <strong>Compétences :</strong> solides bases en hydraulique,
                notions en électricité, autonomie
              </p>
              <p>
                <strong>Permis :</strong> Permis B obligatoire et E serait un
                plus
              </p>
            </div>
            {/* <div className="offer-card">
              <h4>Designer UI/UX</h4>
              <p>Créatif et orienté utilisateur</p>
            </div> */}
            {/* <div className="offer-card">
              <h4>Chef de projet</h4>
              <p>Organisation et gestion des équipes</p>
            </div> */}
          </div>
        </div>

        <div className="apply-form">
          <h3>
            <FaEnvelope /> Postuler :
          </h3>
          <form>
            <label>
              Nom :
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email :
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Poste souhaité :
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message :
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>
            {/* Utilisation de mailto dans un lien */}
            <a href={createMailtoLink()} className="apply-button">
              Envoyer ma candidature
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recrutement;
