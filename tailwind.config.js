/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-gradient-mask-image")],
  darkMode: "class",
  theme: {
    screens: {
      "phone-screen": "500px",
      "small-screen": "960px",
      "normal-screen": "1919px",
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        bgPrimary: "var(--color-bg-primary)",
        bgLight: "var(--color-bg-light)",
        bgDark: "var(--color-bg-dark)",
        tBase: "var(--color-text-base)",
        blackMode: "hsl(0, 0%, 100%)",
        orangeMode: "hsl(25, 100%, 50%)",
        purpleMode: "hsl(270, 100%, 50%)",
        greenMode: "hsl(120, 100%, 35%)",
        redMode: "hsl(0, 100%, 50%)",
        blueMode: "hsl(220, 100%, 50%)",
      },
    },
  },
};
