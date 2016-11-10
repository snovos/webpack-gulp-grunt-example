var autoprefixer = require('autoprefixer');
var path = require('path');
var webpack = require('webpack');
var styleChunk=false;

var isProduction = process.env.NODE_ENV === 'production';
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var plugins = [], outputFile;
var sassLoaders = [
	'style-loader',
	'css-loader',
	'sass-loader'
];

if (isProduction) {
	plugins.push(new UglifyJsPlugin({ minimize: true }));
	outputFile = 'app' + '.min.js';

} else {
	outputFile = 'app' + '.js';
}
if (styleChunk) {
	plugins.push(
		new ExtractTextPlugin("./css/chunk.css", {
			allChunk: true
		})
	);
}

var config = {
	devtool: 'source-map',
	entry: {
		app: './js/index'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'stage-0']
				}
			},
			{
				test: /\.scss$/,
				loader: styleChunk ?
					ExtractTextPlugin.extract('css!sass') :
					sassLoaders.join('!')
			},
			{ test: /\.json$/, loader: 'json' }
		]
	},
	plugins: plugins,
	output: {
		filename: outputFile,
		path: path.join(__dirname, './build')
	},
	resolve: {
		extensions: ['', '.js', '.sass']
	}
};

module.exports = config;