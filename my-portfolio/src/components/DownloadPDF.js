import React from "react";
import { FolderDownloadIcon } from "@heroicons/react/solid";
import CV from "../assets/Gianni-Accardi.pdf"


export default function Download() {
    return (
        <a
            href={CV}
            download={CV}
            className="inline-flex items-center bg-lightblue border-0 py-1 px-3 focus:outline-none hover:bg-strongblue hover:text-lightblue rounded text-base mt-4 md:mt-0">
            Télécharger mon CV
            <FolderDownloadIcon className="w-5 h-5 ml-2" />
        </a>
    )
}