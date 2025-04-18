// src/data/servicesData.js
// ================================================
// Import des images principales
// ================================================
import HeroImage from "../assets/photos/Services/AdobeStock_12235825.webp";
import IconBubble from "../assets/icons/picto_bulles.svg";

// ================================================
// Import des icônes de services
// ================================================
import ContractIcon from "../assets/icons/picto_contrats_entretien.svg";
import GardenIcon from "../assets/icons/picto_parc_jardins.svg";
import FountainIcon from "../assets/icons/picto_fontainerie.svg";
import SportsIcon from "../assets/icons/picto_terrains_sportifs.svg";
import EquipmentIcon from "../assets/icons/picto_materiel_arrosage.svg";

// ================================================
// Import des images illustratives des services
// ================================================
import Service1Img from "../assets/photos/Home/DSC_0767.webp";
import Service2Img from "../assets/photos/Home/20200512_155618.webp";
import Service3Img from "../assets/photos/Home/Fontaine 2.webp";
import Service4Img from "../assets/photos/Home/article_réalisation.webp";
import Service5Img from "../assets/photos/Home/sprinkler-498514_1920.webp";

// ================================================
// Données de la section Hero
// ================================================
export const servicesHero = {
  image: HeroImage,
  icon: IconBubble,
  title: "Nos services",
  title2: "Des services adaptés",
  subtitle: "à vos besoins",
  altText: "Installation d'arrosage automatique dans un jardin paysager",
};

// ================================================
// Liste complète des services
// ================================================
export const servicesList = [
  {
    id: 1,
    title: "Contrats d'entretien",
    description:
      "Entretien et maintenance de vos installations d'arrosage automatique",
    icon: ContractIcon,
    image: Service1Img,
    anchor: "contrats",
    imageAlt: "Technicien effectuant la maintenance d'un système d'arrosage",
  },
  {
    id: 2,
    title: "Jardins & espaces publics",
    description: "Réalisation de jardins et d'espaces publics d'exception",
    icon: GardenIcon,
    image: Service2Img,
    anchor: "jardins",
    imageAlt:
      "Jardin paysager avec massifs floraux et système d'arrosage intégré",
  },
  {
    id: 3,
    title: "Fontainerie",
    description:
      "Conception et réalisation de fontaines et d'aménagements hydrauliques",
    icon: FountainIcon,
    image: Service3Img,
    anchor: "fontaines",
    imageAlt: "Fontaine contemporaine avec jets d'eau illuminés",
  },
  {
    id: 4,
    title: "Terrains Sportifs",
    description:
      "Arrosage et maintenance des terrains sportifs pour la rénovation ou la création",
    icon: SportsIcon,
    image: Service4Img,
    anchor: "sports",
    imageAlt:
      "Terrain de football avec système d'arrosage automatique en fonctionnement",
  },
  {
    id: 5,
    title: "Matériel d'arrosage",
    description: "Vente de matériel d'arrosage et de jardinage",
    icon: EquipmentIcon,
    image: Service5Img,
    anchor: "materiel",
    imageAlt: "Détail d'un sprinkler professionnel pour terrain de sport",
  },
];

// ================================================
// Métadonnées pour le SEO
// ================================================
export const servicesMetadata = {
  title: "Nos Services d'Arrosage Professionnel",
  description:
    "Découvrez nos solutions complètes pour l'arrosage automatique, l'entretien paysager et la fontainerie.",
  keywords: [
    "arrosage automatique",
    "entretien paysager",
    "fontaines",
    "terrains sportifs",
  ],
};
