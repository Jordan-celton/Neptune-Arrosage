import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../../styles/ContactPage/ContactAgence.css";

const AgencyCard = ({
  title,
  title2,
  title3,
  address,
  phone,
  email,
  clock,
}) => (
  <article className="agency-card">
    <div className="agency-sections">
      <section className="agency-info">
        <h3 className="agency-title">{title}</h3>
        <h4 className="agency-subtitle">{title2}</h4>
        <p className="info-item">{address}</p>
        <p className="info-item">
          <FaPhone className="icon" />
          {phone}
        </p>
        <p className="info-item">
          <FaEnvelope className="icon" />
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </section>

      <section className="agency-hours">
        <h3 className="agency-title">{title3}</h3>
        <div className="info-item-clock">
          <p className="highlight-clock">{clock[0]}</p>
          <p className="clock">{clock[1]}</p>
        </div>

        <p className="info-date">Samedi et dimanche :</p>
        <p className="agency-clock">Fermé</p>
      </section>
    </div>

    <div className="map-embed">
      <iframe
        title={`Carte de l'agence située à ${address}`}
        aria-label={`Carte de l'agence à ${address}`}
        src={`https://www.google.com/maps?q=${encodeURIComponent(
          address
        )}&output=embed`}
        width="100%"
        height="415"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </article>
);

const ContactAgence = () => {
  const agencies = [
    {
      title: "Nous trouver",
      title2: "Neptune Arrosage",
      title3: "Horaires d'ouverture",
      address: "3 rue réaumur, 44100 Nantes",
      phone: "02 40 73 64 89",
      email: "contact@neptune-arrosage.fr",
      clock: ["Du lundi au vendredi :", "8h30-12h00 - 13h30-17h30"],
    },
  ];

  return (
    <section className="agencies-section">
      <header className="section-headerAgence">
        <h2 className="section-titleAgence">Notre agence</h2>
        <p className="section-descriptionAgence">
          Chez Neptune Arrosage, la proximité est au cœur de notre engagement.
          Grâce à notre agence située à Nantes, nous accompagnons efficacement
          vos projets d'arrosage automatique, partout en Île-de-France et dans
          les Pays de la Loire. Nos équipes locales vous conseillent avec
          réactivité et expertise, que vous soyez un professionnel, une
          collectivité ou un particulier. Contactez l'agence la plus proche de
          chez vous : nous sommes à votre écoute.
        </p>
      </header>

      <div className="agencies-grid">
        {agencies.map((agency, index) => (
          <AgencyCard key={index} {...agency} />
        ))}
      </div>
    </section>
  );
};

export default ContactAgence;
