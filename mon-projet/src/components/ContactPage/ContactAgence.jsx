import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import "../../styles/ContactPage/ContactAgence.css";

const ContactAgence = () => {
  const agencies = [
    {
      city: "Paris",
      region: "Île-de-France",
      address: "1 Rue du bois des carreaux, 92290 Chantenay-Malabry",
      phone: "02 40 73 64 89",
      email: "contact@neptune-arrosage.fr",
      hours: "Lun-Ven: 9h-18h / Sam: 9h-12h",
    },
    {
      city: "Nantes",
      region: "Pays de la Loire",
      address: "3 rue réaumur, 44100 Nantes",
      phone: "02 40 73 64 89",
      email: "contact@neptune-arrosage.fr",
      hours: "Lun-Ven: 8h30-17h30 / Sam: fermé",
    },
  ];

  return (
    <section className="agencies-section">
      <div className="container">
        <h2 className="section-title">Nos agences</h2>

        <div className="intro-text">
          <p>
            Chez Neptune Arrosage, la proximité est au cœur de notre engagement.
            Grâce à nos deux agences situées à Paris et à Nantes, nous
            accompagnons efficacement vos projets d'arrosage automatique,
            partout en Île-de-France et dans les Pays de la Loire.
          </p>
          <p>
            Nos équipes locales vous conseillent avec réactivité et expertise,
            que vous soyez un professionnel, une collectivité ou un particulier.
            Contactez l'agence la plus proche de chez vous : nous sommes à votre
            écoute.
          </p>
        </div>

        <div className="agencies-grid">
          {agencies.map((agency, index) => (
            <div key={index} className="agency-card">
              <div className="city-badge">
                <FaMapMarkerAlt className="icon" />
                <span>{agency.city}</span>
              </div>

              <div className="agency-details">
                <h3>{agency.region}</h3>

                <div className="contact-info">
                  <div className="info-item">
                    <FaMapMarkerAlt className="icon" />
                    <span>{agency.address}</span>
                  </div>

                  <div className="info-item">
                    <FaPhone className="icon" />
                    <a href={`tel:${agency.phone.replace(/\s/g, "")}`}>
                      {agency.phone}
                    </a>
                  </div>

                  <div className="info-item">
                    <FaEnvelope className="icon" />
                    <a href={`mailto:${agency.email}`}>{agency.email}</a>
                  </div>

                  <div className="info-item">
                    <FaClock className="icon" />
                    <span>{agency.hours}</span>
                  </div>
                </div>

                <div className="map-embed">
                  <iframe
                    title={`map-${agency.city}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      agency.address
                    )}&output=embed`}
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactAgence;
