require('dotenv').config()
const scriptElement = document.createElement('script');
scriptElement.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
document.body.insertAdjacentElement('beforeend', scriptElement);

const inlineScript = '(function() { emailjs.init("${process.env.Public_key}"); })();';
document.body.insertAdjacentHTML('beforeend', `<script type="text/javascript">${inlineScript}</script>`);
