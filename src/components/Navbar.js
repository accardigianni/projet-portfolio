
import React from "react";
import Download from "./DownloadPDF"


export default function Navbar() {
  return (
    <header className="opacity-70 bg-gradient-to-r from-black to-gray sticky top-0 z-10 hover:opacity-100">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" aria-label="navigation bar">
        <nav className="md:ml-auto flex font-medium flex-wrap items-center justify-center ">
        <a href="#about" className=" mr-5  border-1 py-1 px-3 rounded  bg-lightblue text-strongblue  hover:text-lightblue  hover:bg-strongblue mb-1" aria-label="pésentation button ">
            Présentation
          </a>
          <a href="#projects" className=" mr-5  border-1 py-1 px-3 rounded  bg-lightblue text-strongblue  hover:text-lightblue  hover:bg-strongblue mb-1" aria-label="réalisation en groupe button">
            Réalisations en groupe
          </a>
          
          <a
            href="#personal_projects"
            className=" mr-5 border-1 py-1 px-3 rounded  bg-lightblue text-strongblue  hover:text-lightblue  hover:bg-strongblue mb-1" aria-label="projet perso button">
            Projets personnels
          </a>
          <a href="#techno" className="mr-5  border-1 py-1 px-3 rounded  bg-lightblue text-strongblue hover:bg-strongblue  hover:text-lightblue mb-1" aria-label="techno button">
            Technologies
          </a>
          <a href="#skills" className="mr-5  border-1 py-1 px-3 rounded  bg-lightblue text-strongblue hover:bg-strongblue  hover:text-lightblue mb-1" aria-label="skills button">
            Compétences
          </a>

          <a
            href="#contact"
            className="mr-5   border-1 py-1 px-3 rounded  bg-lightblue text-strongblue  hover:text-lightblue  hover:bg-strongblue mb-1" aria-label="formulaire button">
            Formulaire de contact
          </a>
          <Download />
        </nav>
      </div>
    </header>
  );
}