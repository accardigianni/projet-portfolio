
const scriptElement = document.createElement('script');
scriptElement.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
document.body.insertAdjacentElement('beforeend', scriptElement);

const inlineScript = '(function() { emailjs.init("YOUR_PUBLIC_KEY"); })();';
document.body.insertAdjacentHTML('beforeend', `<script type="text/javascript">${inlineScript}</script>`);
