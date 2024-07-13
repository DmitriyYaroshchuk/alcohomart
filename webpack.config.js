const config = {
	mode: 'production',
	entry: {
		index: './src/js/index.js',
		card: './src/js/card.js',
		basket: './src/js/basket.js',
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

module.exports = config;
