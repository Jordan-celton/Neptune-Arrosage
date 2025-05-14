import "../../styles/ContactPage/MentionsLegales.css";

const MentionsLegales = () => {
  return (
    <div className="mentions-container">
      <h1 className="mentions-title">Mentions Légales</h1>
      <section className="mentions-section">
        <h2>Éditeur du Site</h2>
        <p>Nom de l'entreprise : Neptune Arrosage</p>
        <p>Adresse : 3 rue Réaumur, 44100 Nantes, France</p>
        <p>Téléphone : 02 40 73 64 89</p>
        <p>Email : contact@neptunearrosage.com</p>
      </section>
      <section className="mentions-section">
        <h2>Hébergement</h2>
        <p>Fournisseur : Your Hosting Provider</p>
        <p>Adresse : 456 Hosting Ave, 75002 Paris, France</p>
        <p>Site web : www.yourhostingprovider.com</p>
      </section>
      <section className="mentions-section">
        <h2>Propriété Intellectuelle</h2>
        <p>
          Tout le contenu présent sur ce site est protégé par les droits
          d'auteur et les lois sur la propriété intellectuelle.
        </p>
      </section>
      <section className="mentions-section">
        <h2>Données Personnelles</h2>
        <p>
          Les informations collectées sont utilisées uniquement pour répondre à
          vos demandes et ne seront jamais partagées sans votre consentement.
        </p>
      </section>
      <section className="mentions-section">
        <h2>Contact</h2>
        <p>
          Pour toute question, vous pouvez nous contacter à :
          contact@neptunearrosage.com
        </p>
      </section>
    </div>
  );
};

export default MentionsLegales;
