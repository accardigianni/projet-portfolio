import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import Show from "./Showproject";
import ShowProject from "./Showproject";
// import { projects } from "../Data";

// creer un composant juste pour laffichage des projets 





export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full  mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Mes réalisations
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-left">
                        L'une des particularités de ma formation est la mise en oeuvre de la méthode Montessori qui conciste à apprendre par
                        la réalisation de projet de groupe ou personnel.
                        La capacité à jongler entre les technologies et la réalisation de projets sur un temps restreints permet ainsi de saisir les concepts des langages
                        de programmation utilisés et certains de leurs enjeux.
                    </p>
                    <p>Cliquez sur une image afin d'avoir accès aux dépots github.

                    </p>
                </div>
                <ShowProject />
            </div>
        </section>
    );
}