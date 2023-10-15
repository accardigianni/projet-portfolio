import React from "react";
import { FolderDownloadIcon } from "@heroicons/react/solid";
import CV from "../assets/pdf/Gianni-Accardi.pdf"


export default function Download() {
    return (
        <a
            href={CV}
            target="#blank"
            className="inline-flex items-center mr-5   border-1 py-1 px-3 rounded  bg-lightblue text-strongblue  hover:text-lightblue  hover:bg-strongblue mb-1" aria-label="téléchargement button">
            Télécharger mon CV
            <FolderDownloadIcon className=" w-4 h-4 ml-1" />
        </a>
    )
}