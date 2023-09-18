module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      melon: '#FFA69E',
      salmon: '#FF7E6B',
      taupe: '#8C5E58',
      aquamarine: '#A9F0D1',
      snow: '#FFF7F8',
      gray: '#3B3B3B',
      rosy: '#C99DA3',
      eggplant: '#996888',
      quartz: '#C0A9B0',
      strongblue: '#0E2239',
      lightblue: '#B9D0E9',

      extend: {},
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

