import React from "react";
import ShowPersonalProject from "./ShowPersonalProject";
import { PuzzleIcon } from "@heroicons/react/solid";

export default function PersonalProject(){
    return (
        
        <section id="personal_projects" className="text-lightblue bg-gradient-to-r from-strongblue to-gray body-font ">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full  mb-20">
                    <PuzzleIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-lightblue">
                        Mes projets personnels
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-left text-lightblue">
                    En tant que passionné de jeux de logique et de stratégie, j'ai décidé de consacrer mes projets personnels à ce domaine, avec pour objectif de renforcer ma logique et d'explorer des technologies inconnues. 
                    </p>
                    <br />
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-left text-lightblue">Cliquez sur une image afin d'avoir accès aux dépots github.

                    </p>
                </div>
                <ShowPersonalProject />
            </div>
            
        </section>
    );
}