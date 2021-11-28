const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightgreen: "#6CC471",
        darkgreen: "#509154"
      },
      fontFamily: {
        normal: ["Varela"],
        round: ["Varela Round"],
        styled: ["Pacifico"],
      },
      backgroundImage: {
        loginpattern: "url('/src/Assets/login_background.svg')",
      },
      minHeight: {
        '600': '600px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
