const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
	entry: './src/main.ts',
	
	output: {
		filename: 'bundle.min.js',
	},
	
	resolve: {
		extensions:  ['.ts', '.tsx', '.js']
	},
	
	module: {
		rules: [{
			test:  /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node\_modules/
		}]
	},
	
	devtool: process.env.NODE_ENV === 'production' ? false  :  'inline-source-map',
	
	devServer: {
		contentBase:  './dist',
		compress:  false,
		port:  8080,
		stats:  'errors-only',
		host:  'localhost',
		open: true,
		hot: true,
	},
	
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: ['./dist']
		}),
		
		new  HtmlWebpackPlugin({
			template:'./src/index.html'
		})
	
	]
	
}
