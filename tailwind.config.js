/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        red : '#bf1f2f',
        orange: '#df824e',
        brown_dark : '#3f2a1a',
        brown_light : '#79582d',
        white: '#ffffff'
      },
    },
    fontFamily: {
     'Plein-Variable' : ['Plein-Variable'],
     'Poppins-Bold': ['Poppins-Bold'],
     'AvantGardeLT-Bold': ['AvantGardeLT-Bold']
    }
  },
  plugins: [],
}

