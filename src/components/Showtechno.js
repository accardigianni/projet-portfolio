import React from "react";
import { techno } from "../Data";
import { BadgeCheckIcon, } from "@heroicons/react/solid";

export default function Showtechnos() {
    return (
        <section id="show techno">
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                {techno.map((technologies) => (
                    <a
                        href={technologies.link}
                        key={technologies.link}
                        target="#blank"
                        className="p-2 sm:w-1/4 w-full">
                        <div>
                            <div className="bg-strongblue rounded flex p-4 h-full items-center hover:bg-lightblue  text-lightblue hover:text-strongblue ">
                                <BadgeCheckIcon className="text-green w-6 h-6 flex-shrink-0 mr-4" />
                                <div className="title-font font-medium  ">
                                    {technologies.name}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}
