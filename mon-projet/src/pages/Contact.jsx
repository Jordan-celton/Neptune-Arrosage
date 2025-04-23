import React from "react";
import Breadcrumb from "../components/ContactPage/Breadcrumb";
import ContactAgence from "../components/ContactPage/ContactAgence";
import ContactForm from "../components/ContactPage/ContactForm";

const Contact = () => {
  return (
    <main className="contact-page">
      <Breadcrumb title="Contactez-nous" />
      <ContactAgence />
      <ContactForm />
    </main>
  );
};

export default Contact;
