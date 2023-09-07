// C:\Users\giann\Desktop\ADA\Projets\projet-portfolio\my-portfolio\public\project-1.gif
// C:\Users\giann\Desktop\ADA\Projets\projet-portfolio\my-portfolio\src\assets\Pico8.gif
import pico8 from "./assets/pico8.gif"
import datavis from "./assets/dataVis.gif"

export const projects = [
  {
    title: "Jeux video rétro",
    subtitle: "Pico-8 et LUA",
    description:
      "Un petit jeu d'aventure qui ressemble étrangement à style d'une oeuvre réalisé par un certain Shigeru Miyamoto ",
    image: pico8,
    link: "https://github.com/accardigianni/projet-collectif---pico8-les-mousquetaires",
  },
  {
    title: "Antikea",
    subtitle: "MongoDB, Node.js, Express, Javascript, React et Bootstrap",
    description:
      "Site de vente de meuble de seconde main",
    image: datavis,
    link: "https://github.com/accardigianni/back-endProjetAntikea",
  },
  {
    title: "Game4Ever",
    subtitle: "MAMP, mySQL, PHP, HTML et CSS",
    description:
      "Site réseau social type \"Facebook\" customiser pour les gamers",
    image: "./project-3.gif",
    link: "https://reactbootcamp.com",
  },
  {
    title: "Morpion",
    subtitle: "Typescript et angular",
    description:
      "Petit jeu de morpion",
    image: "./project-4.gif",
    link: "https://reactbootcamp.com",
  },
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
  "JavaScript",
  "Typescript",
  "PHP",
  "React",
  "Angular",
  "Node",
  "MongoDB",
  "mysql",
  "Insomnia",
  "Github",
];
