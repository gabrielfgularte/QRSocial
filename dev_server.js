'use strict'

const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const Config = require('./webpack.config')

new WebpackDevServer(Webpack(Config), {
  publicPath: Config.output.publicPath,
  hot: false,
  historyApiFallback: true,
  stats: {colors: true},
  proxy: {
    '*': 'http://localhost:5000'
  },
}).listen(8000, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('Listening on http://localhost:8000');
})
