module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'u-sm': '320px',
      },
      colors: {
        "lightgreen": "#6CC471",
        "lightergreen": "#91D394"
      },
      fontFamily: {
        normal: ['Varela'],
        round: ["Varela Round"],
        styled: ["Pacifico"],
      },
      backgroundImage: {
        filler: 'url("/src/Assets/img/city-sky.jpg")'
      },
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
      backdropBlur: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
};
