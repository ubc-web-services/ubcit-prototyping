// This library allows us to combine paths easily
module.exports = {
  entry: {
    bootstrap: ["./src/js/bootstrap.js"],
    "kraken.accordion": ["./src/js/kraken.accordion.js"],
    "kraken.dismiss": ["./src/js/kraken.dismiss.js"],
    "kraken.misc": ["./src/js/kraken.misc.js"],
    "kraken.scroll": ["./src/js/kraken.scroll.js"],
    "kraken.sticky": ["./src/js/kraken.sticky.js"],
    "kraken.video": ["./src/js/kraken.video.js"],
    "tiny.slider": ["./src/js/tiny.slider.js"]
  },
  optimization: {
    splitChunks: {
      hidePathInfo: true,
      cacheGroups: {
        defaultVendors: {
          idHint: "vendors",
        },
        vendorbootstrap: {
          test: /[\\/]node_modules[\\/](bootstrap|@popperjs)[\\/]/,
          name: "vendors~bootstrap",
          chunks: "all",
        },
        vendortinyslider: {
          test: /[\\/]node_modules[\\/](tiny-slider)[\\/]/,
          name: "vendors~tiny.slider",
          chunks: "all",
        },
      },
    },
    chunkIds: "named",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    esmodules: true,
                  },
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [ ],
};
