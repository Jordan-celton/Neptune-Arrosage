import fontaine from "../../assets/photos/Services/Fontaine Rueil Imp 1.webp";
import terrains from "../../assets/photos/Home/article_réalisation.webp";
import jardins from "../../assets/photos/Home/services_jardins_parcs.webp";
import materiel from "../../assets/photos/Home/sprinkler-498514_1920.webp";
import contrats from "../../assets/photos/Home/DSC_0767.webp";
import recuperation from "../../assets/photos/Home/water-1544808_1280.webp";

import iconFontaine from "../../assets/icons/picto_fontainerie.svg";
import iconSport from "../../assets/icons/picto_terrains_sportifs.svg";
import iconJardin from "../../assets/icons/picto_parc_jardins.svg";
import iconMateriel from "../../assets/icons/picto_materiel_arrosage.svg";
import iconContrat from "../../assets/icons/picto_contrats_entretien.svg";
import iconEau from "../../assets/icons/picto_recup_EP.svg";

export const servicesData = [
  {
    id: "fontaines",
    name: "Fontainerie",
    description:
      "Neptune Arrosage possède une solide expertise dans la conception et la réalisation de fontaines et d'aménagements hydrauliques, alliant génie civil, stations de pompage, traitement et filtration de l'eau.",
    image: fontaine,
    icon: iconFontaine,
  },
  {
    id: "sports",
    name: "Terrains sportifs",
    description:
      "Neptune Arrosage est spécialisée dans l'arrosage des terrains sportifs, qu'il s'agisse de gazon naturel ou synthétique. Nous concevons des systèmes d'arrosage adaptés à chaque type de terrain.",
    image: terrains,
    icon: iconSport,
  },
  {
    id: "jardins",
    name: "Jardins et parcs",
    description:
      "Nous proposons des solutions d'arrosage adaptées aux jardins et parcs, garantissant une irrigation efficace et respectueuse de l'environnement.",
    image: jardins,
    icon: iconJardin,
  },
  {
    id: "materiel",
    name: "Matériel d'arrosage",
    description:
      "Nous fournissons du matériel d'arrosage de haute qualité, adapté à tous les types de projets. Notre équipe vous conseille sur le choix du matériel le plus adapté à vos besoins.",
    image: materiel,
    icon: iconMateriel,
  },
  {
    id: "contrats",
    name: "Contrats d'entretien",
    description:
      "Nous proposons des contrats d'entretien pour garantir le bon fonctionnement de vos systèmes d'arrosage tout au long de l'année.",
    image: contrats,
    icon: iconContrat,
  },
  {
    id: "recuperation",
    name: "Récupération des eaux pluviales",
    description:
      "Nous vous aidons à mettre en place des systèmes de récupération des eaux pluviales pour une gestion durable de l'eau.",
    image: recuperation,
    icon: iconEau,
  },
];
