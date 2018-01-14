const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpackConfig = {
  entry: './src/script.js',

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'script.js'
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
    new CopyWebpackPlugin([{
      from: 'src/index.html',
      to: 'index.html'
    }, {
      from: 'src/resources',
      to: 'resources'
    }, {
      from: 'src/favicons',
      to: 'favicons'
    }, {
      from: 'src/browserconfig.xml',
      to: 'browserconfig.xml'
    }, {
      from: 'src/favicon.ico',
      to: 'favicon.ico'
    }, {
      from: 'src/manifest.json',
      to: 'manifest.json'
    }])
  ],

  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            'postcss-loader',
            'sass-loader'
          ]
        })
      },

      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },

  stats: {
    colors: true
  },

  devtool: 'source-map'
}

module.exports = webpackConfig;
