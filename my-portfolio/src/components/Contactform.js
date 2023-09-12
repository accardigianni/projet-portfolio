import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMe() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service_nj5zbxs, template_hp9xtvs, form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form
      name="contact"
      className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-snow sm:text-4xl text-3xl mb-1 font-medium title-font">

      </h2>
      <p className="leading-relaxed mb-5 text-snow">
        Vous êtes à la recherche d'un étudiant en alternance motivé et prêt à ce mettre au service de votre structure, remplissez les champs suivants :
      </p>
      <div className="relative mb-4 text-snow">
        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
          Votre Nom et prénom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4 text-snow">
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
          Votre contact ( Email ou numéro de téléphone)
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4 text-snow">
        <label htmlFor="company" className="leading-7 text-sm text-gray-400">
          Nom de votre structure
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4 text-snow">
        <label
          htmlFor="message"
          className="leading-7 text-sm text-gray-400">
          Que recherchez vous ?
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button
        type="submit"
        className="text-taupe bg-aquamarine border-0 py-2 px-6 focus:outline-none hover:bg-gray hover:text-snow rounded text-lg">
        Envoyer
      </button>
    </form>
  )
  //

  // return (
  //   <form ref={form} onSubmit={sendEmail}>
  //     <label>Name</label>
  //     <input type="text" name="user_name" />
  //     <label>Email</label>
  //     <input type="email" name="user_email" />
  //     <label>Message</label>
  //     <textarea name="message" />
  //     <input type="submit" value="Send" />
  //   </form>
  // );
};