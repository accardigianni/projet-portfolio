import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import PersonalProject from "./components/PersonalProject";
import Skills from "./components/Skills";
import Techno from "./components/Techno"



export default function App() {

  return (
    <main className="text-gray-400 body-font">
      <Navbar />
      <About />
      <div className="separator-bar h-2 bg-gradient-to-r from-lightblue to-gray"></div>
      <Projects />
      <div className="separator-bar h-2 bg-gradient-to-r from-lightblue to-gray"></div>
      <PersonalProject/>
      <div className="separator-bar h-2 bg-gradient-to-r from-white to-lightblue"></div>
      <Techno />
      <Skills />
      <div className="separator-bar h-2 bg-gradient-to-r from-white to-lightblue"></div>
      <Contact />
    </main>
  );
}
