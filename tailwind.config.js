/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slate:{
          850: 'rgb(18, 27, 48)',
        },
        wtOrange: {
          800: 'rgb(173, 69, 0)',
          700: 'rgb(195, 82, 7)',
        }
      },
    }
  },
  safelist: [
    {
      pattern:
        /bg-(rose|slate|yellow|wtOrange|red|green|blue|orange)-(100|400|300|600|500|700|800|900)/,

      variants: ["lg", "hover", "focus", "lg:hover"], // You can display all the colors that you need
    },
  ],
 
  plugins: [],
};
