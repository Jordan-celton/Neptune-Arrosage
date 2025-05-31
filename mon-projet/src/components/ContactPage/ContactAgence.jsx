import React, { memo } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../../styles/ContactPage/ContactAgence.css";

const AgencyCard = memo(
  ({ title, title2, title3, address, phone, email, clock }) => {
    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
      address
    )}&output=embed`;
    const mapLink = `https://maps.google.com/?q=${encodeURIComponent(address)}`;

    return (
      <article
        className="agency-card"
        aria-label={`Informations sur l'agence ${title2}`}
      >
        <div className="agency-sections">
          <section
            className="agency-info"
            aria-labelledby={`agency-title-${title2}`}
          >
            <h3 id={`agency-title-${title2}`} className="agency-title">
              {title}
            </h3>
            <h4 className="agency-subtitle">{title2}</h4>
            <address className="info-item" style={{ fontStyle: "normal" }}>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ouvrir la localisation de ${title2} dans Google Maps`}
              >
                {address}
              </a>
            </address>
            <p className="info-item">
              <FaPhone className="icon" aria-hidden="true" />
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                aria-label={`Téléphoner à ${title2}`}
              >
                {phone}
              </a>
            </p>
            <p className="info-item">
              <FaEnvelope className="icon" aria-hidden="true" />
              <a
                href={`mailto:${email}`}
                aria-label={`Envoyer un email à ${title2}`}
              >
                {email}
              </a>
            </p>
          </section>

          <section
            className="agency-hours"
            aria-labelledby={`agency-hours-title-${title2}`}
          >
            <h3 id={`agency-hours-title-${title2}`} className="agency-title">
              {title3}
            </h3>
            <div className="info-item-clock">
              <p className="highlight-clock">{clock[0]}</p>
              <p className="clock">
                <time dateTime={formatTimeRange(clock[1])}>{clock[1]}</time>
              </p>
            </div>

            <p className="info-date">Samedi et dimanche :</p>
            <p
              className="agency-clock"
              aria-label="Horaires du samedi et dimanche"
            >
              Fermé
            </p>
          </section>
        </div>

        <div className="map-embed">
          <iframe
            title={`Carte de l'agence située à ${address}`}
            aria-label={`Carte de l'agence à ${address}`}
            src={mapUrl}
            width="100%"
            height="415"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </article>
    );
  }
);

// Helper to format time range for dateTime attribute
// Ex : "8h30-12h00 - 13h30-17h30" => "08:30-12:00 13:30-17:30"
function formatTimeRange(timeRange) {
  // Simplistic conversion for demonstration, might need improvements
  return timeRange
    .replace(/h/g, ":")
    .replace(/\s*-\s*/g, "-")
    .replace(/\s*-\s*/g, " ");
}

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
    <section className="agencies-section" aria-label="Section des agences">
      <header className="section-headerAgence">
        <h1 className="section-titleAgence">Notre agence</h1>
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
