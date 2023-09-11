
import React from "react";
import Download from "./DownloadPDF"
// as={href} to="/#about"
export default function Navbar() {
  return (
    <header className="bg-eggplant md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium hover:text-aquamarine mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl  bg-aquamarine text-s border-1 py-1 px-3  hover:bg-gray hover:text-snow rounded">
            Présentation
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-snow	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 inline-flex items-center bg-aquamarine border-1 py-1 px-3  hover:bg-gray hover:text-snow rounded text-base mt-4 md:mt-0">
            Projets
          </a>
          <a href="#techno" className="mr-5 inline-flex items-center bg-aquamarine border-1 py-1 px-3 hover:bg-gray hover:text-snow rounded text-base mt-4 md:mt-0">
            Technologies
          </a>
          <a href="#skills" className="mr-5 inline-flex items-center bg-aquamarine border-1 py-1 px-3  hover:bg-gray hover:text-snow rounded text-base mt-4 md:mt-0">
            Soft Skills
          </a>
        </nav>
        <Download />
      </div>
    </header>
  );
}