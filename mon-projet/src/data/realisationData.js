// src/data/realisationsData.js
import image1 from "../assets/photos/Realisations/GOLF.webp";
import image2 from "../assets/photos/Realisations/HIPPO.webp";
import image3 from "../assets/photos/Realisations/TRAM.webp";
import image4 from "../assets/photos/Realisations/PARC.webp";
import icon from "../assets/icons/picto_gps.svg";

const realisationsData = [
  {
    icons: icon,
    ville: "BRESSUIRE (79)",
    titre: "Système d'arrosage du golf de Bressuire",
    lien: "Lire la suite",
    backgroundImage: `url(${image1})`,
  },
  {
    icons: icon,
    ville: "LE LION D'ANGERS (49)",
    titre: "Installation d'un système d'arrosage pour l'hippodrome",
    lien: "Lire la suite",
    backgroundImage: `url(${image2})`,
  },
  {
    icons: icon,
    ville: "ANGERS (49)",
    titre: "Mise en place d'un arrosage automatique pour le tramway",
    lien: "Lire la suite",
    backgroundImage: `url(${image3})`,
  },
  {
    icons: icon,
    ville: "PUY DU FOU (85)",
    titre: "Arrosage automatique du parc du Puy du Fou",
    lien: "Lire la suite",
    backgroundImage: `url(${image4})`,
  },
];

export default realisationsData;
