var WebpackStripLoader = require('strip-loader');
var devConfig = require('./webpack.config.js'); //the original webpack.config file

var stripLoader = {
  test: [/\.js$/, /\.es6$/],
  exclude: /node_modules/,
  loader: WebpackStripLoader.loader('console.log') //stripLoader removes console.log files
}

devConfig.module.loaders.push(stripLoader); //stripLoader object is pushed into the original config

module.exports = devConfig; //export the new config object