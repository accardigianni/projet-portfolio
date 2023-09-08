import React from "react";
import { UsersIcon } from "@heroicons/react/solid";
import { skills } from "../Data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Mes softs skills
        </h1>
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skill) => (
              <div key={skill.name} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <img
                    className="mr-4"
                    alt="icon"
                    src={skill.icon}
                  />
                  <span className="title-font font-medium text-white">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}