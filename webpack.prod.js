const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
	devtool: 'source-map',
	output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: '[name].min.js'
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.min.js',
    },
    extensions: ['.js', '.jsx', '.vue']
  },
});
