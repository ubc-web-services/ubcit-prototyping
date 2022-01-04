module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-simple-vars"),
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [require("cssnano")] : [])
  ]
};
