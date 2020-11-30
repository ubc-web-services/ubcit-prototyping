// This library allows us to combine paths easily
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: {
		vue: ['./src/js/vue.js'],
		'kraken.scroll': ['./src/js/kraken.scroll.js'],
		'kraken.dismiss': ['./src/js/kraken.dismiss.js'],
		'kraken.misc': ['./src/js/kraken.misc.js'],
  },
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	module: {
		rules: [
			{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									targets: {
										esmodules: true
									}
								}
							]
						]
					}
				},
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					{
						loader: 'css-loader',
						options: { importLoaders: 1 }
					},
					'postcss-loader'
				]
			}
		]
	},
	plugins: [
    new VueLoaderPlugin()
  ]
};
