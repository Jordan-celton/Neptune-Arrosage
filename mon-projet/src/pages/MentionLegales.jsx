import React from "react";
import BreadcrumbMentionLegale from "../components/MentionLegales/Breadcrumb";
import MentionLegaleContent from "../components/MentionLegales/MentionLegaleContent";

const MentionLegales = () => {
  return (
    <div>
      <BreadcrumbMentionLegale title="Mentions légales" />
      <MentionLegaleContent />
    </div>
  );
};

export default MentionLegales;
