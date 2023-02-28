/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customDarkBlue: "#093474",
        customLightBlue: "#8CB9D7",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      screens: {
        maxW: "1090px",
        maxwd: "1430px",
        smallW: "390px",
      },
    },
  },
  plugins: [],
};
