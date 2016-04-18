// webpack.config.js

const webpack = require('webpack');
const path = require('path');
// const BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    path: path.join(__dirname, 'dist/static'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['babel'],
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'config'),
          path.join(__dirname, 'trivia-station-lib'),
        ],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  // plugins: [new BowerWebpackPlugin()],
};
