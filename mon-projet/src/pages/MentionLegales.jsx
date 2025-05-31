import React from "react";
import { Helmet } from "react-helmet-async";
import BreadcrumbMentionLegale from "../components/MentionLegales/Breadcrumb";
import MentionLegaleContent from "../components/MentionLegales/MentionLegaleContent";

const MentionLegales = () => {
  return (
    <main className="mention-legales-page">
      <Helmet>
        <title>Mentions légales - Neptune Arrosage</title>
        <meta
          name="description"
          content="Consultez les mentions légales de Neptune Arrosage, spécialiste en installation et entretien de systèmes d'arrosage automatique en Loire Atlantique et Ile de France."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.neptunearrosage.com/mentions-legales"
        />
        {/* Open Graph */}
        <meta
          property="og:title"
          content="Mentions légales - Neptune Arrosage"
        />
        <meta
          property="og:description"
          content="Consultez les mentions légales de Neptune Arrosage, spécialiste en arrosage automatique."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.neptunearrosage.com/mentions-legales"
        />
      </Helmet>

      <BreadcrumbMentionLegale title="Mentions légales" />
      <MentionLegaleContent />
    </main>
  );
};

export default MentionLegales;
