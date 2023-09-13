import React from "react";
import { techno } from "../Data";
import { BadgeCheckIcon, } from "@heroicons/react/solid";

export default function Showtechnos() {
    return (
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {techno.map((technologies) => (
                <div key={technologies} className="p-2 sm:w-1/4 w-full">
                    <div className="bg-strongblue rounded flex p-4 h-full items-center">
                        <BadgeCheckIcon className="text-aquamarine w-6 h-6 flex-shrink-0 mr-4" />
                        <span className="title-font font-medium text-lightblue">
                            {technologies}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}