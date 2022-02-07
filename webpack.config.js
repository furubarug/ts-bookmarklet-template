const pkg = require('./package.json');

module.exports = {
	mode: 'production',
	entry: `./${pkg.main}`,
	output: {
		filename: 'out.js',
		library: {
			type: 'module',
		},
	},
	module: {
		rules: [{
			test: /\.ts$/,
			use: 'ts-loader',
		}],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	experiments: {
		outputModule: true,
	},
};
