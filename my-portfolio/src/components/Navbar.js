import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
// as={href} to="/#about"
export default function Navbar() {
  return (
    <header className="bg-eggplant md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-aquamarine mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Présentation
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-snow	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-snow hover:text-aquamarine font-medium">
            Projets
          </a>
          <a href="#techno" className="mr-5 text-snow hover:text-aquamarine font-medium">
            Technologies
          </a>
          <a href="#skills" className="mr-5 text-snow hover:text-aquamarine font-medium">
            Soft Skills
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-aquamarine border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Contact
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}