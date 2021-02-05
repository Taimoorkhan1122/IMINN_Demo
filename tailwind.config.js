module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      baseColor: "#FAFAFA",
    }),
    fontFamily: {
      sans: ["Nunito Sans", "sans - serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
