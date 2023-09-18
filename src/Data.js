import pico8 from "./assets/pico8.gif";
import datavis from "./assets/dataVis.gif";
import game4ever from "./assets/game4ever.gif";
import antikea from "./assets/antikea.gif";
import morpion from "./assets/morpion.gif";
import adapt from "./assets/adaptation.png";
import collab from "./assets/collaboration.png";
import curieux from "./assets/curieux.png";
import engage from "./assets/engagement.png";
import social from "./assets/sociable.png";
import mentorat from "./assets/mentorat.png";

export const projects = [
  // {
  //   title: "Street fighter",
  //   subtitle: "angular, typecsript",
  //   description:
  //     "Site de présentation de personnages ",
  //   image: antikea,
  //   link: "https://github.com/accardigianni/back-endProjetAntikea",
  // },
  {
    title: "Antikea",
    subtitle: "MongoDB, Node.js, Javascript, React et Bootstrap",
    description:
      "Site de vente de meuble de seconde main ",
    image: antikea,
    link: "https://github.com/accardigianni/back-endProjetAntikea",
    id: 1,
    alt: "projet back end / front end "
  },
  {
    title: "Game4Ever",
    subtitle: "MAMP, mySQL, PHP, HTML et CSS",
    description:
      "Site réseau social type \"Facebook\"",
    image: game4ever,
    link: "https://github.com/accardigianni/projet-collectif---reseau-social-php-game4ever",
    id: 2,
    alt: "projet backend"
  },
  {
    title: "Dataviz",
    subtitle: "Javascript",
    description:
      "Visualisation des données API de la TAN",
    image: datavis,
    link: "https://github.com/accardigianni/projet-collectif---dataviz-api-il-va-faire-tout-noir",
    id: 3,
    alt: "projet découverte api"
  },
  {
    title: "Morpion",
    subtitle: "Typescript et angular",
    description:
      "Petit jeu de morpion qui vous",
    image: morpion,
    link: "https://github.com/accardigianni/projets-morpions",
    id: 4,
    alt: "projet framework angular"
  },
  {
    title: "Jeux video rétro",
    subtitle: "Pico-8 et LUA",
    description:
      "Un petit jeu d'aventure",
    image: pico8,
    link: "https://github.com/accardigianni/projet-collectif---pico8-les-mousquetaires",
    id: 5,
    alt: "projet jeux video"
  }
];


export const skills = [
  {
    name: "Travail d'équipe",
    icon: collab,
    id: 1,
    alt: "team work"
  },
  {
    name: "Adaptabilité",
    icon: adapt,
    id: 2,
    alt: "adaptability"
  },
  {
    name: "Curiosité",
    icon: curieux,
    id: 3,
    alt: "curiosity"
  },
  {
    name: "Engagement",
    icon: engage,
    id: 4,
    alt: "commitment"
  },
  {
    name: "Sociabilité",
    icon: social,
    id: 5,
    alt: "sociability"
  },
  {
    name: "Mentorat",
    icon: mentorat,
    id: 6,
    alt: "mentoring"
  }
];

export const techno = [
  {
    name: "JavaScript",
    link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
    alt: "JavaScript"
  },
  {
    name: "Typescript",
    link: "https://www.typescriptlang.org/",
    alt: "Typescript"
  },
  {
    name: "PHP",
    link: "https://www.php.net/manual/fr/intro-whatis.php",
    alt: "PHP"
  },
  {
    name: "React",
    link: "https://fr.legacy.reactjs.org/",
    alt: "React"
  },
  {
    name: "Angular",
    link: "https://angular.io/",
    alt: "Angular"
  },
  {
    name: "Node.js",
    link: "https://nodejs.org/fr",
    alt: "Node.js"
  },
  {
    name: "MongoDB",
    link: "https://www.mongodb.com/fr-fr",
    alt: "MongoDB"
  },
  {
    name: "Mysql",
    link: "https://www.mysql.com/fr/",
    alt: "Mysql"
  },
  {
    name: "Insomnia",
    link: "https://insomnia.rest/products/insomnia",
    alt: "Insomnia"
  },
  {
    name: "Git & Github",
    link: "https://git-scm.com/",
    alt: "git and github"
  },
];
