import React from "react";
import { UsersIcon } from "@heroicons/react/solid";
import Showskill from "./Showskill";

export default function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-r from-lightblue to-gray">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4 text-strongblue" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-strongblue mb-12">
          Mes softs skills
        </h1>
        <div className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-strongblue">
          Mes différents travaux m'ont appris que pour être un "bon" développeur, le savoir codé n'était pas suffisant, l'important se trouve peut être ailleurs ...
        </div>

        <div className="container px-5 py-10 mx-auto">
          <Showskill />
        </div>
      </div>
    </section>
  );
}