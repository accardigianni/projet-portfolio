import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
require('dotenv').config()


export default function ContactMe() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Récupérer les valeurs des champs
    const nameInput = form.current.querySelector('#name');
    const emailInput = form.current.querySelector('#email');
    const telephoneInput = form.current.querySelector('#telephone');

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const telephoneValue = telephoneInput.value.trim()

    if (!nameValue || !emailValue || !telephoneValue) {
      alert("Les champs ne sont pas correctement remplis. Veuillez remplir tous les champs.");
      return;
    }

    emailjs.sendForm("service_nj5zbxs", "template_hp9xtvs", form.current, process.env.REACT_APP_Public_key)
      .then((result) => {
        alert("merci votre message à bien été envoyé");
      }, (error) => {
        console.log(error.text);
      });
    form.current.reset()
  };



  return (
    <form ref={form} onSubmit={sendEmail}
      name="contact"
      className="text-lightblue lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      {/* <h2 className="text-lightblue sm:text-4xl text-3xl mb-1 font-medium title-font">

      </h2> */}
      <div className="leading-relaxed mb-5 ">
        Vous êtes à la recherche d'un étudiant en alternance motivé et prêt à se mettre au service de votre structure, remplissez les champs suivants:
        <br className='font-extralight' />
        Les champs suivis d'une * sont obligatoires
      </div>


      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm">
          Votre Nom *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm">
          Votre email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        <div className="relative mb-4">
          <label htmlFor="company" className="leading-7 text-sm">
            Votre numéro de téléphone *
          </label>
          <input
            type="tel"
            id="telephone"
            name="tel"
            pattern="[0-9]*"
            maxLength="10"
            className="w-full  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="relative mb-4">
        <label
          htmlFor="message"
          className="leading-7 text-sm">
          Que recherchez vous ?
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button
        type="submit"
        value="Send"
        className=" bg-lightblue text-strongblue border-0 py-2 px-6 focus:outline-none hover:bg-gray hover:text-snow rounded text-lg">
        Envoyer
      </button>
    </form>
  )
};