import Breadcrumb from "../components/ContactPage/Breadcrumb";
import ContactAgence from "../components/ContactPage/ContactAgence";
import ContactForm from "../components/ContactPage/ContactForm";
import MentionsLegales from "../components/ContactPage/MentionsLegales";

const Contact = () => {
  return (
    <main className="contact-page">
      <Breadcrumb title="Contactez-nous" />
      <ContactAgence />
      <ContactForm />
      <div id="mentions">
        <MentionsLegales />
      </div>
    </main>
  );
};

export default Contact;
