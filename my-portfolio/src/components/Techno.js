import { ChipIcon, } from "@heroicons/react/solid";
import React from "react";
import Showtechnos from "./Showtechno"

export default function Skills() {
    return (
        <section id="techno" className="bg-gray">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-snow mb-4">
                        Les Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-snow">
                        Voici un aperçu des technologies dont j'ai eu besoins afin de réaliser ces différent projet.
                    </p>
                </div>
                <Showtechnos />
            </div>
        </section>
    );
}