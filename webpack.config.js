'use strict';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const copy = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {

  entry: {
    app: [APP_DIR + '/index.jsx'],
    vendor: ['react', 'react-dom', 'react-router', 'react-router-dom', 'semantic-ui-react']
  },

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  resolve: {
    alias: {
      semantic: path.resolve(__dirname, 'node_modules/semantic-ui-react/src/'),
      icons: path.resolve(__dirname, 'node_modules/semantic-ui-css/themes/default/assets/fonts')
    }
  },

  context: path.join(__dirname, 'src'),

  module : {
    loaders : [
      {
        test : /\.jsx?/,
        exclude : [/node_modules/, /bower_components/],
        include : APP_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?-url', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?-url', 'postcss-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader'
      }
    ]
  },

  plugins: [
    new copy([
      {from: APP_DIR + '/html/', to: BUILD_DIR},
      {from: APP_DIR + '/assets/', to: BUILD_DIR + '/assets/'}
    ], {
      copyUnmodified: false,
      debug: 'debug'
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    })
  ]

};

module.exports = config;
