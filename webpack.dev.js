const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.js',
    },
    extensions: ['.js', '.jsx', '.vue']
  },
});
