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
      black: "rgba(var(--black), 1)",
      white: "rgba(var(--white), 1)",
      "ubc-blue": "rgba(var(--ubc-blue), 1)",
      "ubc-blue-sea": "rgba(var(--ubc-blue-sea), 1)",
      "ubc-blue-cobalt": "rgba(var(--ubc-blue-cobalt), 1)",
      "ubc-blue-neptune": "rgba(var(--ubc-blue-neptune), 1)",
      "ubc-blue-sky": "rgba(var(--ubc-blue-sky), 1)",
      "ubc-blue-cornflower": "rgba(var(--ubc-blue-cornflower), 1)",
      "ubc-blue-polar": "rgba(var(--ubc-blue-polar), 1)",
      "ubc-blue-frost": "rgba(var(--ubc-blue-frost), 1)",
      "ubc-grey-1": "rgba(var(--ubc-grey-1), 1)",
      "ubc-grey-2": "rgba(var(--ubc-grey-2), 1)",
      "ubc-grey-3": "rgba(var(--ubc-grey-3), 1)",
      "ubc-grey-4": "rgba(var(--ubc-grey-4), 1)",
      "ubc-grey-5": "rgba(var(--ubc-grey-5), 1)",
      "ubc-grey-6": "rgba(var(--ubc-grey-6), 1)",
      "unit-primary": "rgba(var(--unit-color-primary), 1)",
      "unit-secondary": "rgba(var(--unit-color-secondary), 1)",
      "unit-tertiary": "rgba(var(--unit-color-tertiary), 1)",
      "unit-accent": "rgba(var(--unit-color-accent), 1)",
      grey: {
        50: "rgba(var(--grey-50), 1)",
        100: "rgba(var(--grey-100), 1)",
        200: "rgba(var(--grey-200), 1)",
        300: "rgba(var(--grey-300), 1)",
        400: "rgba(var(--grey-400), 1)",
        500: "rgba(var(--grey-500), 1)",
        600: "rgba(var(--grey-600), 1)",
        700: "rgba(var(--grey-700), 1)",
        800: "rgba(var(--grey-800), 1)",
        900: "rgba(var(--grey-900), 1)",
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
