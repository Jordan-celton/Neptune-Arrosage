// Définir le type d'un service
export interface Service {
  id: number;
  nom: string;
  description: string;
  image: string;
  categorie: string;
}

// Définir les données des services avec le type Service[]
const servicesData: Service[] = [
  {
    id: 1,
    nom: "Espace Public",
    description:
      "Transformez les espaces publics en lieux accueillants et fonctionnels grâce à nos solutions innovantes d'ilots de fraicheur et de canopées brumisation.",
    image: "/images/20200512_155618.webp",
    categorie: "Public",
  },
  {
    id: 2,
    nom: "Fontaines et Bassins",
    description:
      "Créez des ambiances uniques et rafraichissantes avec nos fontaines et bassins d'agrément, idéales pour les jardins et les espaces de détente.",
    image: "/images/Fontaine Rueil Imp 1.webp",
    categorie: "Décoratif",
  },
  {
    id: 3,
    nom: "Terrains sportifs",
    description:
      "Améliorez les performances de vos terrains sportifs avec nos solutions de brumisation et de rafraichissement, idéales pour les clubs et les collectivités.",
    image: "/images/sprinkler-498514_1920.webp",
    categorie: "Sport",
  },
  {
    id: 4,
    nom: "Terres agricoles",
    description:
      "Optimisez la production de vos terres agricoles avec nos solutions de brumisation et d'irrigation, idéales pour les exploitations et les coopératives.",
    image: "/images/irrigation-7262563_1920 - Copie.webp",
    categorie: "Agriculture",
  },
];

export default servicesData;
