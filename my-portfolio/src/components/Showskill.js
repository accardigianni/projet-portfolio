import React from "react"
import { skills } from "../Data"

export default function Showskill() {
    return (
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skill) => (
                <div key={skill.name} className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray rounded flex p-4 h-full items-center">
                        <img
                            className="mr-4"
                            alt="icon"
                            src={skill.icon}
                        />
                        <span className="title-font font-medium text-snow">
                            {skill.name}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}