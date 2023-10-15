import pico8 from "./assets/gif/pico8.gif";
import datavis from "./assets/gif/dataVis.gif";
import game4ever from "./assets/gif/game4ever.gif";
import antikea from "./assets/gif/antikea.gif";
import morpion from "./assets/gif/morpion.gif";

import pico8webp from "./assets/webp/pico8.webp";
import dataviswebp from "./assets/webp/dataVis.webp";
import game4everwebp from "./assets/webp/game4ever.webp";
import antikeawebp from "./assets/webp/antikea.webp";
import morpionwebp from "./assets/webp/morpion.webp";
import workinprog from "./assets/webp/workinprog.webp"

import adapt from "./assets/png/adaptation.png";
import collab from "./assets/png/collaboration.png";
import curieux from "./assets/png/curieux.png";
import engage from "./assets/png/engagement.png";
import social from "./assets/png/sociable.png";
import mentorat from "./assets/png/mentorat.png";


export const projects = [
  
  {
    title: "Antikea",
    subtitle: "MongoDB, Node.js, Javascript, React et Bootstrap",
    description:
      "Site de vente de meuble de seconde main ",
    image: antikea,
    webp: antikeawebp,
    link: "https://github.com/accardigianni/back-endProjetAntikea",
    id: 1,
    alt: "projet back end / front end "
  },
  {
    title: "Game4Ever",
    subtitle: "MAMP, mySQL, PHP, HTML et CSS",
    description:
      "Site réseau social type \"Facebook\" orienter jeux vidéos",
    image: game4ever,
    webp: game4everwebp,
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
    webp: dataviswebp,
    link: "https://github.com/accardigianni/projet-collectif---dataviz-api-il-va-faire-tout-noir",
    id: 3,
    alt: "projet découverte api"
  },
  
  {
    title: "Jeux video rétro",
    subtitle: "Pico-8 et LUA",
    description:
      "Un petit jeu d'aventure",
    image: pico8,
    webp: pico8webp,
    link: "https://github.com/accardigianni/projet-collectif---pico8-les-mousquetaires",
    id: 5,
    alt: "projet jeux video type zelda"
  }
];

export const personalProjects =[
  {
    title: "puissance 4 en 3D",
    subtitle: "Java, Spring",
    description:
      "jeu de logique",
    image: workinprog,
    link: "https://github.com/accardigianni/Puissance-4-3D",
    id: 6,
    alt: "projet titre RNCP"
  },
  {
    title: "Morpion",
    subtitle: "Typescript et angular",
    description:
      "Petit jeu de morpion, qui seras le plus grand stratège",
    image: morpion,
    webp: morpionwebp,
    link: "https://github.com/accardigianni/projets-morpions",
    id: 4,
    alt: "projet framework angular"
  },
]


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
    name: "Java",
    link: "https://www.java.com/fr/",
    alt: "Java"
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
    name: "Spring",
    link: "https://spring.io/",
    alt: "Spring"
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
