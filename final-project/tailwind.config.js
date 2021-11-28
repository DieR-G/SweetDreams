module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "lightgreen": "#6CC471",
        "orange": "#E9721A",
      },
      fontFamily: {
        normal: ['Varela'],
        round: ["Varela Round"],
        styled: ["Pacifico"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
