import React from "react";
import "../styles/ContactPage/Contact.css";
import Breadcrumb from "../components/ContactPage/Breadcrumb";
import ContactAgence from "../components/ContactPage/ContactAgence";

const Contact = () => {
  return (
    <main className="contact-page">
      <Breadcrumb title="Contactez-nous" />
      <ContactAgence />
    </main>
  );
};

export default Contact;
