// src/data/realisationsData.js
import image1 from "../assets/photos/Home/20200512_155618.webp";
import image2 from "../assets/photos/Home/Capture.webp";
import image3 from "../assets/photos/Home/DSC_0779.webp";
import image4 from "../assets/photos/Home/20180614_160716.webp";

const realisationsData = [
  {
    icons: "MapPin",
    ville: "SAINT-DENIS (93)",
    date: "27 MARS 2025",
    titre: "Rénovation du système d'arrosage du stade de france",
    lien: "Lire la suite",
    backgroundImage: `url(${image1})`,
    category: "ESPACES VERTS",
  },
  {
    icons: "lucide:home",
    ville: "ANGERS (49)",
    date: "27 MARS 2025",
    titre: "Rénovation du système d'arrosage du tramway d'Angers",
    lien: "Lire la suite",
    backgroundImage: `url(${image2})`,
    category: "TRANSPORT",
  },
  {
    icons: "lucide:home",
    ville: "PARIS (75)",
    date: "27 MARS 2025",
    titre: "Rénovation du système d'arrosage du jardin des Tuileries",
    lien: "Lire la suite",
    backgroundImage: `url(${image3})`,
    category: "ESPACES VERTS",
  },
  {
    icons: "lucide:home",
    ville: "LYON (69)",
    date: "27 MARS 2025",
    titre: "Mise en place d'une fontaine à Lyon",
    lien: "Lire la suite",
    backgroundImage: `url(${image4})`,
    category: "FONTAINES",
  },
];

export default realisationsData;
