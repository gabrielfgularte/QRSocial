'use strict'

const path = require('path')
const webpack = require('webpack')
const validator = require('webpack-validator');

module.exports = validator({
  devtool: 'source-map',

  entry: [
    path.join(__dirname, 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
    publicPath: '/public/dist/'
  },

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'standard'
    }],

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }]
  }
})
