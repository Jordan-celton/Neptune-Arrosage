import Breadcrumb from "../components/ContactPage/Breadcrumb";
import ContactAgence from "../components/ContactPage/ContactAgence";
import ContactForm from "../components/ContactPage/ContactForm";
import MentionsLegales from "../components/ContactPage/MentionsLegales";

const Contact = () => {
  return (
    <main className="contact-page">
      <div data-aos="fade-down">
        <Breadcrumb title="Contactez-nous" />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <ContactAgence />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <ContactForm />
      </div>
    </main>
  );
};

export default Contact;
