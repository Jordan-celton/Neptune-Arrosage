import React from "react";
import "../../styles/MentionPage/MentionLegaleContent.css";

const MentionLegaleContent = () => {
  return (
    <section className="mentionlegale-section">
      <div className="mentionlegale-container">
        <h2>Éditeur du site :</h2>
        <p>
          Le présent site est la propriété de la société Neptune Arrosage, SAS
          au capital social variable, immatriculée au Registre du Commerce et
          des Sociétés sous le numéro 870 800 711 00059, dont le siège social
          est situé :
        </p>
        <p>
          3 rue Réaumur, 44100 Nantes, France
          <br />
          Adresse e-mail :{" "}
          <a href="mailto:contact@neptunearrosage.com">
            contact@neptunearrosage.com
          </a>
          <br />
          Directeur de la publication : <strong>Nicolas de SALINS</strong>
        </p>

        <h2>Conception et développement :</h2>
        <p>
          Le site a été conçu graphiquement par{" "}
          <strong>Dark Side Productions</strong>
          <br />
          Contact :{" "}
          <a href="mailto:damien@darksideprod.fr">damien@darksideprod.fr</a>
          <br />
          Téléphone : <a href="tel:0646460157">06 46 46 01 57</a>
        </p>
        <p>
          Le développement du site a été réalisé par{" "}
          <strong>Jordan Celton El</strong>
          <br />
          Technologies utilisées : React.js et Vite
          <br />
          Contact :{" "}
          <a href="mailto:celton.jordan@outlook.fr">celton.jordan@outlook.fr</a>
          <br />
          Téléphone : <a href="tel:0688767318">06 88 76 73 18</a>
        </p>

        <h2>Hébergement :</h2>
        <p>
          Le site est hébergé par : <strong>SFR</strong>
          <br />
          Adresse : 16 rue du Général Alain de Boissieu, 75015 Paris
          <br />
          Site web :{" "}
          <a href="https://www.sfr.fr" target="_blank" rel="noreferrer">
            www.sfr.fr
          </a>
        </p>

        <h2>Activité du site :</h2>
        <p>
          Le site www.neptunearrosage.com est un site vitrine destiné à
          présenter les services et réalisations de la société Neptune Arrosage
          dans le domaine de l’arrosage automatique.
        </p>

        <h2>Données personnelles :</h2>
        <p>
          Les informations recueillies via les formulaires du site sont
          destinées exclusivement à Neptune Arrosage à des fins de contact ou de
          traitement de demandes. Conformément à la loi « Informatique et
          Libertés » du 6 janvier 1978 modifiée et au Règlement général sur la
          protection des données (RGPD), vous disposez d’un droit d’accès, de
          rectification, de suppression et d’opposition concernant vos données
          personnelles.
        </p>

        <h2>Cookies :</h2>
        <p>
          Le site peut utiliser des cookies à des fins statistiques et de
          navigation. Vous pouvez configurer votre navigateur pour les refuser
          ou être informé de leur utilisation.
        </p>
      </div>
    </section>
  );
};

export default MentionLegaleContent;
