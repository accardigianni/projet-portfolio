import React from "react";
import photoHello from "../assets/png/hello.png";
import photoSmile from "../assets/png/clin-doeil.png";
import PhotoMe from "../assets/jpg/me2.jpg";
import PhotoMewebp from "../assets/webp/me2.webp"

export default function About() {
    return (
        <section id="about" className="bg-lightblue hover:opacity-100">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div className="flex items-center">
                        <div className="title-font sm:text-4xl text-3xl mb-4 font-medium text-strongblue flex items-center justify-center">
                            <img src={photoHello} alt="hello" className="self-start mt-2 mr-1" />
                            <h1>
                                Salut, Moi c'est Gianni et je suis étudiant en conception et développement web.
                            </h1>
                        </div>
                    </div>
                    <div className="text-gray">
                        <br id="1" className="lg:inline-block title-font " />
                        Je suis issu d'une formation comptable et commerciale. Après plusieurs années d'expériences
                        sédentaires et itinérantes, j'entreprends une reconversion dans les métiers liés à la programmation informatique.
                        Je suis en formation au sein d'
                        <a href="https://adatechschool.fr/" className="text-strongblue font-bold lg:inline-block title-font">
                            Ada tech school
                        </a>
                        &nbsp;
                        qui applique les principes de la méthode Montessori consistant à apprendre par la réalisation de projet.
                        <br id="2" />
                        <br />
                        Je suis à la recherche d'un <span className="font-bold text-strongblue">contrat d'alternance</span> à partir d'<span className="font-bold text-strongblue">octobre 2023</span> afin de pouvoir valider un <span className="font-bold text-strongblue">Titre RNCP
                            de niveau 6</span> et ainsi réintégrer le monde du travail.
                        <br id="3" />
                        Fort de mes expériences dans le milieu professionnel, j'ai l'habitude de
                        collaborer avec une équipe et de m'adapter aux situations pouvant se présenter.
                        <br id="4" />
                        <br />
                        Ce portfolio est évolutif. Il a pour but de présenter mes projets, de pouvoir mettre en avant mon travail et mes avancées dans le monde
                        de la programmation. N'hésitez pas à me faire des retours via mon formulaire sur des axes d'améliorations possibles.
                    </div>
                    <div className="mb-8 mt-8 leading-relaxed flex items-center justify-center text-gray">
                        Bonne navigation !!!
                        <img src={photoSmile} alt="smile" className="mb-8 leading-relaxed self-start ml-4 mt-5" />
                    </div>
                    {/* <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-lightblue bg-strongblue border-0 py-2 px-6 focus:outline-none hover:bg-gray hover:text-snow rounded text-lg">
                            Formulaire de contact
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-lightblue bg-strongblue border-0 py-2 px-6 focus:outline-none hover:bg-gray hover:text-snow rounded text-lg">
                            Présentation des projets
                        </a>
                    </div> */}
                </div>
                <div className="lg:max-w-lg lg:w-2/5 md:w-1/2 w-5/6">
                    <picture>
                        <source srcSet={PhotoMewebp} type="image/webp" />
                        <source srcSet={PhotoMe} type="image/png" />
                        <img
                            className="object-cover object-center rounded-full "
                            alt="me"
                            src={PhotoMe}
                        />
                    </picture>
                </div>
            </div>
        </section >
    );
}