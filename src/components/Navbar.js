
import React from "react";
import Download from "./DownloadPDF"


export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-lightblue to-strongblue md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" aria-label="navigation bar">
        <div className="title-font font-medium  bg-lightblue text-strongblue  hover:text-lightblue  hover:bg-strongblue rounded  mb-4 md:mb-0">
          <a href="#about" className="ml-1 text-xl  text-s border-1 py-1 px-3 ">
            Présentation
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-snow	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 inline-flex items-center  border-1 py-1 px-3 rounded  bg-lightblue text-strongblue  hover:text-lightblue  hover:bg-strongblue text-base mt-4 md:mt-0" aria-label="présentation button">
            Projets
          </a>
          <a href="#techno" className="mr-5 inline-flex items-center border-1 py-1 px-3 rounded  bg-lightblue text-strongblue hover:bg-strongblue  hover:text-lightblue text-base mt-4 md:mt-0" aria-label="projets button">
            Technologies
          </a>
          <a href="#skills" className="mr-5 inline-flex items-center border-1 py-1 px-3 rounded  bg-lightblue text-strongblue hover:bg-strongblue  hover:text-lightblue text-base mt-4 md:mt-0" aria-label="compétences button">
            Compétences
          </a>
        </nav>
        <Download />
      </div>
    </header>
  );
}