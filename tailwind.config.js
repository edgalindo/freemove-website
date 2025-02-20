module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.{md,html,liquid,njk}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Saira SemiCondensed", "sans-serif"],
    },
    extend: {
      colors: {
        blue: "#293377",
        orange: "#EA5B0C",
        green: "#00983A",
        purple: "#662483",
      },
    },
  },
  variants: {
    extend: {
      scale: ["active"],
      translate: ["active"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
