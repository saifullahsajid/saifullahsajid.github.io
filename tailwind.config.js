module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // "background-color": "#F3F3F3",F7F2F2
        "background-color": "#F0F0F0",
        "light-gray-color": "#E0E0E0",
        "light-gray-color-hover": "#D9D9D9",
        "nav-menu-background-color": "#EDE9E9",
        "nav-menu-selected-item-color": "#7F8184",
        "cream-color": "#FFFBF5",
        "teal-color": "#0D6353",
        cream: "#FFFBF5",
      },
      fontFamily: {
        poppins: ["Poppins"],
        smooch: ["Smooch"],
        oxygen: ["Oxygen"],
        moranga: ["Moranga"],
        nunito: ["Nunito"],
        sans: ["Helvetica Neue", "sans-serif"],
        serif: ["DM Serif Display", "serif"],
      },
      borderRadius: {
        2: "2rem",
      },
      height: {
        standardHeight: "17rem",
        twoColHeight: "35.32rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
