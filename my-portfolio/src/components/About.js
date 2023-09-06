import React from "react";
import photoUk from "../assets/uk.png"
import photoFr from "../assets/fr.png"
import photoSmile from "../assets/clin-doeil.png"
import PhotoMe from "../assets/me.jpg"





export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div className="flex items-center">
                        <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            <h1>
                                Bonjour je m'appel Gianni et je suis étudiant développeur.
                            </h1>
                        </p>
                    </div>
                    <br className="hidden lg:inline-block" />
                    Je suis commercial de formation, je souhaites me reconvertir
                    en tant que développeur. Ce site à pour but de vous montrez les projets
                    auquel j'ai participé et vous donnez envie de travailler avec moi.
                    <p className="mb-8 mt-8 leading-relaxed">
                        Vous êtes en train de parcourir mon portfolio, bonne navigation !!!
                        <img src={photoSmile} alt="smile" className="mb-8 leading-relaxed" />
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Travaillons ensemble
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 hover:text-white rounded text-lg">
                            Presentation des projets
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-2/5 md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded-full "
                        alt="photo de moi"
                        src={PhotoMe}
                    />
                </div>
            </div>
        </section >
    );
}