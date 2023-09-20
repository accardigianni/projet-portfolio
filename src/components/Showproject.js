import React from "react";
import { projects } from "../Data";


export default function ShowProject() {
    return (
        <section id="show project">
            <div className="flex flex-wrap -m-4">
                {projects.map((project) => (
                    <a
                        href={project.link}
                        key={project.id}
                        target="#blank"
                        className="sm:w-1/2 w-full h-full p-4">
                        <div className="flex relative ">
                            <picture>
                                <source srcSet={project.webp} type="image/webp"/>
                                <source srcSet={project.image} type="image/gif"/>
                            <img
                                alt={project.alt}
                                className="absolute w-full h-full  object-cover object-center"
                                src={project.image}
                            />
                            </picture>
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-aquamarine bg-gray opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium  mb-1">
                                    {project.subtitle}
                                </h2>
                                <h1 className="title-font text-lg font-medium  mb-3">
                                    {project.title}
                                </h1>
                                <p className="leading-relaxed ">{project.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}