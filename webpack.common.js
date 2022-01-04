// This library allows us to combine paths easily
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: {
    bootstrap: ["./src/js/bootstrap.js"],
    "kraken.dismiss": ["./src/js/kraken.dismiss.js"],
    "kraken.misc": ["./src/js/kraken.misc.js"],
    "kraken.scroll": ["./src/js/kraken.scroll.js"],
    "kraken.sticky": ["./src/js/kraken.sticky.js"],
    prism: ["./src/js/prism.js"],
    "tiny.slider": ["./src/js/tiny.slider.js"],
    vue: ["./src/js/vue.js"],
  },
  optimization: {
    splitChunks: {
      hidePathInfo: true,
      cacheGroups: {
        defaultVendors: {
          idHint: "vendors",
        },
        vendorvue: {
          test: /[\\/]node_modules[\\/](vue|vue-scrollto|vue-tiny-slider|vue-slide-up-down|clickout-event)[\\/]/,
          name: "vendors~vue",
          chunks: "all",
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
        test: /\.vue$/,
        loader: "vue-loader",
      },
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
          "vue-style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
