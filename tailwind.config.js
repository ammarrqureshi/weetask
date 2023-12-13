/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern:
        /bg-(rose|slate|yellow|red|green|blue|orange)-(100|400|300|600|500|700|800|900)/,

      variants: ["lg", "hover", "focus", "lg:hover"], // You can display all the colors that you need
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
