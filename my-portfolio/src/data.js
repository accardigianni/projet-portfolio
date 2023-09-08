import pico8 from "./assets/pico8.gif"
import datavis from "./assets/dataVis.gif"

import adapt from "./assets/adaptation.png"
import collab from "./assets/collaboration.png"
import curieux from "./assets/curieux.png"
import engage from "./assets/engagement.png"
import social from "./assets/sociable.png"

export const projects = [
  {
    title: "Jeux video rétro",
    subtitle: "Pico-8 et LUA",
    description:
      "Un petit jeu d'aventure",
    image: pico8,
    link: "https://github.com/accardigianni/projet-collectif---pico8-les-mousquetaires",
  },
  {
    title: "Antikea",
    subtitle: "MongoDB, Node.js, Javascript, React et Bootstrap",
    description:
      "Site de vente de meuble de seconde main ",
    image: datavis,
    link: "https://github.com/accardigianni/back-endProjetAntikea",
  },
  {
    title: "Game4Ever",
    subtitle: "MAMP, mySQL, PHP, HTML et CSS",
    description:
      "Site réseau social type \"Facebook\"",
    image: pico8,
    link: "https://reactbootcamp.com",
  },
  {
    title: "Morpion",
    subtitle: "Typescript et angular",
    description:
      "Petit jeu de morpion qui vous",
    image: pico8,
    link: "https://reactbootcamp.com",
  }
];

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Jesse Hicks",
    company: "Zoozle",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    name: "Ruben Alvarez",
    company: "Dooble.io",
  },
];

export const skills = [
  {
    name: "Travail d'équipe",
    icon: collab
  },
  {
    name: "Adaptabilité",
    icon: adapt
  },
  // {
  //   name: "Partage",
  //   icon: collab
  // },
  {
    name: "Curiosité",
    icon: curieux
  },
  {
    name: "Engagement",
    icon: engage
  },
  {
    name: "Sociabilité",
    icon: social
  }
];

export const techno = [
  "JavaScript",
  "Typescript",
  "PHP",
  "React",
  "Angular",
  "Node",
  "MongoDB",
  "Mysql",
  "Insomnia",
  "Github",
];
