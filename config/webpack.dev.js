const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devServer: {
    historyApiFallback: {
      index: 'src/index.html'
    },
    watchOptions: {
      // if you're using Docker you may need this
      // aggregateTimeout: 300,
      // poll: 1000,
      ignored: /node_modules/
    }
  }
});
