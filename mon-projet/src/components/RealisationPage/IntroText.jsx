import React from "react";
import "../../styles/RealisationPage/IntroText.css";

const IntroText = () => {
  return (
    <section className="intro-text">
      <div className="intro-container">
        <p className="intro-paragraph">
          Qu'il s'agisse de fontaines urbaines, de jardins historiques, de
          terrains sportifs ou d'espaces publics, chaque intervention allie
          innovation, expertise et discrétion, pour sublimer les lieux tout en
          optimisant l'usage de l'eau.
        </p>
        <p className="intro-callout">
          Découvrez ici un aperçu de nos plus belles réalisations :
        </p>
        <p className="intro-highlights">
          Fontaines en mouvement, réseaux d'arrosage intelligents, projets
          d'aménagement hydraulique intégrés avec soin... autant de preuves
          concrètes de notre engagement pour une gestion raisonnée de l'eau et
          une mise en valeur durable des territoires.
        </p>
      </div>
    </section>
  );
};

export default IntroText;
