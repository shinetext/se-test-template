var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var loaders = [
  {
    test: /\.js?$/,
    exclude: /node_modules/,
    loader: 'babel',
    query: {
      presets: ['es2015', 'react', 'stage-0'],
      plugins: [],
    },
  },
];

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve('client', 'main.js'),
  output: {
    path: path.resolve('build'),
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('client', 'index.tpl.html'),
      inject: 'body',
      filename: 'index.html',
    }),
  ],
  module: {
    loaders: loaders,
  },
};
