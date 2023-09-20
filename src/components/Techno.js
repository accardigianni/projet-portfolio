import { ChipIcon, } from "@heroicons/react/solid";
import React from "react";
import Showtechnos from "./Showtechno"

export default function Skills() {
    return (
        <section id="techno" className="bg-gradient-to-r from-lightblue to-gray">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4 text-strongblue" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-strongblue mb-4">
                        Les outils techniques
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-strongblue">
                        Voici un aperçu des technologies dont j'ai eu besoin afin de réaliser ces différents projets.
                    </p>
                </div>
                <Showtechnos />
            </div>
        </section>
    );
}