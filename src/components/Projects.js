import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import ShowProject from "./Showproject";


export default function Projects() {
    return (
        <section id="projects" className="text-lightblue bg-gradient-to-r from-gray to-strongblue body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full  mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-lightblue">
                        Mes réalisations
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-left text-lightblue">
                        Vous trouverez ci-dessous mes différents projets et réalisations.
                        Ces projets sont le résultat de travails de groupe ou personnel.
                        J'ai ainsi pu saisir les différentes notions liées entre le Front-end et le Back-end, découvrir de nouveaux langages de programmation,
                        comprendre l'enjeu de certaines méthodes agiles afin de réaliser un MVP dans des délais plus ou moins restreint.
                    </p>
                    <br />
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-left text-lightblue">Cliquez sur une image afin d'avoir accès aux dépots github et suivez les instruction du README.md

                    </p>
                </div>
                <ShowProject />
            </div>
        </section>
    );
}