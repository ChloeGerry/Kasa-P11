type AdditionnalInformations = {
  size: "medium" | "large";
  title: string;
  text: string;
};

export const additionnalInformations: AdditionnalInformations[] = [
  {
    size: "large",
    title: "Fiabilité",
    text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    size: "large",
    title: "Respect",
    text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    size: "large",
    title: "Service",
    text: "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit enprunte de bienveillance et de respect.",
  },
  {
    size: "large",
    title: "Sécurité",
    text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards soient bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];
