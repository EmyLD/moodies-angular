import withMT from "@material-tailwind/html/utils/withMT";
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{html,ts, scss}"],
  theme: {
    extend: {
      colors: {
        "light-pink": "#FADADD",
        "darker-pink": "#E7B9C5",
        "soft-green": "#A7C7A7",
        "dark-green": "#01796F",
        gray: "#3B3B3B",
        gold: "#F5B300",
        success: colors.emerald,
        error: colors.rose,
      },
    },
  },
  plugins: [],
});
