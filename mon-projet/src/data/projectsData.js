import IconLocation from "../assets/icons/picto_gps.svg";

import image1 from "../assets/photos/Realisations/STADE.webp";
import image2 from "../assets/photos/Realisations/HIPPO.webp";
import image3 from "../assets/photos/Realisations/GOLF.webp";
import image4 from "../assets/photos/Realisations/TRAM.webp";
import image5 from "../assets/photos/Realisations/PARC.webp";
import image6 from "../assets/photos/Realisations/FONTAINE.webp";

export const projectTypes = [
  "Tous les projets",
  "Stades",
  "Hippodromes",
  "Golfs",
  "Parcs et jardins",
  "Tramways",
  "Fontainerie",
];

export const projects = [
  {
    id: 1,
    icon: IconLocation,
    date: "ARGENTEUIL (93)",
    title: "Terrain de sport",
    link: "#",
    image: image1,
    type: "Stades",
  },
  {
    id: 2,
    icon: IconLocation,
    date: "LE LION D'ANGERS (49)",
    title: "Hippodrome",
    link: "#",
    image: image2,
    type: "Hippodromes",
  },
  {
    id: 3,
    icon: IconLocation,
    date: "BRESSUIRE (79)",
    title: "Golf",
    link: "#",
    image: image3,
    type: "Golfs",
  },
  {
    id: 4,
    icon: IconLocation,
    date: "ANGERS (49)",
    title: "Tramways d'Angers",
    link: "#",
    image: image4,
    type: "Tramways",
  },
  {
    id: 5,
    icon: IconLocation,
    date: "PARC DU PUY DU FOU (85)",
    title: "Parc et lieux culturels",
    link: "#",
    image: image5,
    type: "Parcs et jardins",
  },
  {
    id: 6,
    icon: IconLocation,
    date: "MONTGERON (91)",
    title: "Fontaines des rois grâces",
    link: "#",
    image: image6,
    type: "Fontainerie",
  },
];
