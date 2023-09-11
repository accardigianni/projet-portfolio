import React from "react";
import { UsersIcon } from "@heroicons/react/solid";
import Showskill from "./Showskill";

export default function Skills() {
  return (
    <section id="skills" className="bg-melon">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-snow mb-12">
          Mes softs skills
        </h1>
        <div className="container px-5 py-10 mx-auto">
          <Showskill />
        </div>
      </div>
    </section>
  );
}