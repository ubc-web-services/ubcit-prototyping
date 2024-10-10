module.exports = {
  blocklist: ["collapse"],
  content: [
    "./components/**/*.{twig,js}",
    "./src/**/*.{twig,html}",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
    "./kraken.theme",
    "./safelist.txt",
  ],
  separator: "--",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      "ubc-blue": "#002145",
      "ubc-blue-sea": "#003A79",
      "ubc-blue-cobalt": "#0055b7",
      "ubc-blue-neptune": "#40b4e5",
      "ubc-blue-sky": "#61c1e9",
      "ubc-blue-cornflower": "#97d4e9",
      "ubc-blue-polar": "#def1f8",
      "ubc-blue-frost": "#f6fbfd",
      "ubc-grey-1": "#2f5d7c",
      "ubc-grey-2": "#5e869f",
      "ubc-grey-3": "#98b2c3",
      "ubc-grey-4": "#c3d0db",
      "ubc-grey-5": "#d5dee4",
      "ubc-grey-6": "#eaeef1",
      "ubc-black": "#222",
      "unit-primary": "var(--color-primary)",
      "unit-secondary": "var(--color-secondary)",
      "unit-tertiary": "var(--color-tertiary)",
      "unit-accent": "var(--color-accent)",
      "accessible-grey": "#757575",
      "disabled-grey-1": "#acacac",
      "disabled-grey-2": "#e3e3e3",
      grey: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "980px",
      lg: "1200px",
      xl: "1720px",
      xxl: "2400px",
    },
    fontFamily: {
      sans: "var(--text-font-stack)",
      serif: "var(--alternate-font-stack)",
      mono: "var(--code-font-stack)",
    },
    fontSize: {
      xs: ".75rem", //12px
      sm: ".875rem", //14px
      base: "1rem", //16px
      lg: "1.125rem", //18px
      xl: "1.25rem", //20px
      "2xl": "1.5rem", //24px
      "3xl": "1.75rem", //28px
      "4xl": "2rem", // 32px
      "5xl": "2.25rem", //36px
      "6xl": "2.75rem", //44px
      "7xl": "3.375rem", //54px
      "8xl": "4rem", // 64px
      "9xl": "5rem", //80px
      "10xl": "7.625rem", //122px
    },
    extend: {
      margin: {
        leading: "calc(var(--leading) * var(--base-font-size))",
      },
      padding: {
        leading: "calc(var(--leading) * var(--base-font-size))",
      },
      width: {
        half: "50%",
        "one-third": "33.33333%",
        "two-thirds": "66.66667%",
        "one-quarter": "25%",
        "three-quarters": "75%",
        "one-fifth": "20%",
        "two-fifths": "40%",
        "three-fifths": "60%",
        "four-fifths": "80%",
        "one-sixth": "16.66667%",
        "five-sixths": "83.33333%",
        "one-twelfth": "8.33333%",
        "five-twelfths": "41.66666%",
        "seven-twelfths": "58.33333%",
        "eleven-twelfths": "91.66666%",
      },
    },
  },
  plugins: [],
};
