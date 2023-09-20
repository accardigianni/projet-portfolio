module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: '#3B3B3B',
      strongblue: '#0E2239',
      lightblue: '#B9D0E9',
      green: '#31ED47',
      extend: {},
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

