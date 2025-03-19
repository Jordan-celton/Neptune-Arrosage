import React from "react";

const ContactMap = () => {
  return (
    <section className="contact-map">
      <h2>Nous trouver</h2>
      <iframe
        title="Carte de localisation"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.123456789012!2d-1.567890123456789!3d47.21234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eeff12345678%3A0x987654321abcdef!2s3%20Rue%20R%C3%A9aumur%2C%2044100%20Nantes!5e0!3m2!1sfr!2sfr!4v1234567890123"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default ContactMap;
