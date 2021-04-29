const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const loader = require('sass-loader')
const HtmlWebPackPlugin = require("html-webpack-plugin")

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
    entry: './src/client/index.js',
    output: {
        libraryTarget:'var',
        library:'Client'
    },
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            },
            ]},
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
      
        new MiniCssExtractPlugin({filename:"[name].css"}),
        new WorkboxPlugin.GenerateSW()
    ]
}