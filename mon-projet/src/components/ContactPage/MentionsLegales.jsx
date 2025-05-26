import "../../styles/ContactPage/MentionsLegales.css";

const MentionsLegales = () => {
  return (
    <main className="mentions-container" aria-label="Mentions légales">
      <h1 className="mentions-title">Mentions Légales</h1>

      <section className="mentions-section" aria-labelledby="editor-heading">
        <h2 id="editor-heading">Éditeur du Site</h2>
        <address>
          <p>Nom de l'entreprise : Jordan Celton EI</p>
          <p>Développé avec React.js et Vite </p>
          <p>
            Email :{" "}
            <a href="mailto:celton.jordan@outlook.fr">
              celton.jordan@outlook.fr
            </a>
          </p>
          <p>
            Téléphone : <a href="tel:+0240736489">06 88 76 73 18</a>
          </p>
          <p>Design réalisé par darksideprod</p>
          <p>
            Email :{" "}
            <a href="mailto:damien@darksideprod.fr">damien@darksideprod.fr</a>
          </p>
        </address>
      </section>

      <section className="mentions-section" aria-labelledby="hosting-heading">
        <h2 id="hosting-heading">Hébergement</h2>
        <p>Fournisseur : Your Hosting Provider</p>
        <p>Adresse : 456 Hosting Ave, 75002 Paris, France</p>
        <p>
          Site web :{" "}
          <a
            href="https://www.yourhostingprovider.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.yourhostingprovider.com
          </a>
        </p>
      </section>

      <section
        className="mentions-section"
        aria-labelledby="intellectual-property-heading"
      >
        <h2 id="intellectual-property-heading">Propriété Intellectuelle</h2>
        <p>
          Tout le contenu présent sur ce site est protégé par les droits
          d'auteur et les lois sur la propriété intellectuelle.
        </p>
      </section>

      <section
        className="mentions-section"
        aria-labelledby="personal-data-heading"
      >
        <h2 id="personal-data-heading">Données Personnelles</h2>
        <p>
          Les informations collectées sont utilisées uniquement pour répondre à
          vos demandes et ne seront jamais partagées sans votre consentement.
        </p>
      </section>

      <section className="mentions-section" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Contact</h2>
        <p>
          Pour toute question, vous pouvez nous contacter à :{" "}
          <a href="mailto:contact@neptunearrosage.com">
            contact@neptunearrosage.com
          </a>
        </p>
      </section>
    </main>
  );
};

export default MentionsLegales;
