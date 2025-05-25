import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import "../../styles/ContactPage/ContactAgence.css";

const ContactAgence = () => {
  const agencies = [
    {
      title: "Nous trouver",
      title2: "Horaires d'ouverture",
      address: "3 rue réaumur, 44100 Nantes",
      phone: "02 40 73 64 89",
      email: "contact@neptune-arrosage.fr",
      clock: "Du lundi au vendredi : 8h30-12h00 - 13h30-17h30",
    },
  ];

  return (
    <section className="agencies-section">
      <div className="container-agency">
        <div className="section-headerAgence">
          <h2 className="section-titleAgence">Notre agence</h2>
          <p>
            Chez Neptune Arrosage, la proximité est au cœur de notre engagement.
            Grâce à notre agence située à Nantes, nous accompagnons efficacement
            vos projets d'arrosage automatique, partout en Île-de-France et dans
            les Pays de la Loire. Nos équipes locales vous conseillent avec
            réactivité et expertise, que vous soyez un professionnel, une
            collectivité ou un particulier. Contactez l'agence la plus proche de
            chez vous : nous sommes à votre écoute.{" "}
          </p>
        </div>

        <div className="agencies-grid">
          {agencies.map((agency, index) => (
            <div key={index} className="agency-card">
              <div className="agency-details">
                <div className="agency-info">
                  <h3 className="agency-title">{agency.title}</h3>
                  <p className="agency-address">
                    <FaMapMarkerAlt className="icon" />
                    {agency.address}
                  </p>
                  <p className="agency-phone">
                    <FaPhone className="icon" />
                    {agency.phone}
                  </p>
                  <p className="agency-email">
                    <FaEnvelope className="icon" />
                    {agency.email}
                  </p>
                </div>
                <div className="agency-hours">
                  <h3 className="agency-title">{agency.title2}</h3>
                  <p className="agency-clock">
                    <FaClock className="icon" />
                    {agency.clock}
                  </p>
                  <p>Samedi et dimanche :</p>
                  <p className="agency-clock">Fermé</p>
                </div>

                <div className="map-embed">
                  <iframe
                    title={`map-${agency.region}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      agency.address
                    )}&output=embed`}
                    width="100%"
                    height="415"
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
