// webpack v4
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//var HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
module.exports = {
  entry: { app: './src/app.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    //filename: '[name].[chunkhash].js'
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "pug-loader", 
        query: { pretty: true }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        } 
      },
      {
        test: /\.scss$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [ 
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
     // filename: 'style.[contenthash].css',
     filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      filename: 'index.html',
      template: './src/templates/index.pug'
    }),
    //new HtmlWebpackPugPlugin(),
    //new WebpackMd5Hash()
  ]
};