const path = require('path')
const webpack = require('webpack')
const dirVars = require('../base/dirVars.config.js')
const entryArr = require('../base/entryArr.config.js')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pluginsConfig = [
	new ExtractTextPlugin('[name]/styles.[contenthash:8].css'),
	new webpack.ProvidePlugin({
		Swiper: 'jsDir/swiper.min.js',
		$: 'jsDir/jquery.min.js',
		jQuery: 'jsDir/jquery.min.js',
	}),
]

entryArr.forEach(entry => {
	const htmlPlugin = new HtmlWebpackPlugin({
		filename: `${entry}/index.html`,
		template: path.resolve(dirVars.htmlDir, `${entry}/index.art`),
		chunks: ['runtime','vendor', entry],
	})

	pluginsConfig.push(htmlPlugin)
})

pluginsConfig.push(new HtmlWebpackPlugin({
	filename: 'index.html',
	template: path.resolve(dirVars.htmlDir, 'index/index.art'),
	chunks: ['runtime', 'vendor', 'index'],
}))

module.exports = pluginsConfig
