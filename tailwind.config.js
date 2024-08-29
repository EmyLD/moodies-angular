/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts, scss}"],
  theme: {
    extend: {
      colors: {
        "light-pink": "#FADADD",
        "darker-pink": "#E7B9C5",
        "soft-green": "#A7C7A7",
        "dark-green": "#3B3B3B",
        gray: "#3B3B3B",
        gold: "#F5B300",
      },
    },
  },
  plugins: [],
};
