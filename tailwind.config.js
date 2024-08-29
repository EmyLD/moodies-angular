/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts, scss}"],
  theme: {
    extend: {
      colors: {
        "light-pink": "#FADADD",
        "soft-green": "#A7C7A7",
        "dark-green": "#3B3B3B",
      },
    },
  },
  plugins: [],
};
