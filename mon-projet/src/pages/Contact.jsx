import { Helmet } from "react-helmet-async";
import Breadcrumb from "../components/ContactPage/Breadcrumb";
import ContactAgence from "../components/ContactPage/ContactAgence";
import ContactForm from "../components/ContactPage/ContactForm";

const Contact = () => {
  return (
    <main className="contact-page">
      <Helmet>
        <title>
          Contact | Neptune Arrosage - Loire Atlantique & Île-de-France
        </title>
        <meta
          name="description"
          content="Prenez contact avec Neptune Arrosage pour vos projets d’arrosage automatique. Devis gratuit, conseils personnalisés et intervention rapide en Loire Atlantique et Île-de-France."
        />
        <meta
          name="keywords"
          content="contact arrosage automatique, Neptune Arrosage, devis arrosage jardin, Loire Atlantique, Île-de-France, fontainerie, irrigation"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Neptune Arrosage" />
        <meta name="language" content="fr" />
        <link rel="canonical" href="https://www.neptunearrosage.com/contact" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contactez Neptune Arrosage - Demandez votre devis"
        />
        <meta
          property="og:description"
          content="Besoin d’un système d’arrosage automatique ? Contactez notre équipe pour un accompagnement sur mesure."
        />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:image"
          content="https://www.neptunearrosage.com/og-contact.jpg"
        /> */}
        <meta
          property="og:url"
          content="https://www.neptunearrosage.com/contact"
        />
      </Helmet>

      <div data-aos="fade-down">
        <Breadcrumb title="Contactez-nous" />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <ContactAgence />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <ContactForm />
      </div>

      {/* Contenu SEO caché */}
      <div
        className="seo-hidden"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <h1>Contacter Neptune Arrosage</h1>
        <p>
          Vous souhaitez faire installer un système d’arrosage automatique pour
          votre jardin ou espace vert ? Notre équipe intervient en Loire
          Atlantique (Nantes, Saint-Nazaire, etc.) et en Île-de-France pour
          l’installation, l’entretien ou la réparation de vos équipements.
          Obtenez un devis gratuit en ligne ou par téléphone.
        </p>
        <ul>
          <li>Demande de devis personnalisé</li>
          <li>Conseils sur l’arrosage enterré ou goutte-à-goutte</li>
          <li>Prise de rendez-vous rapide</li>
          <li>Conseils sur la consommation d’eau et l’écologie</li>
        </ul>
      </div>
    </main>
  );
};

export default Contact;
