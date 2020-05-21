const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const config = {
  entry: './client/index.jsx',
  output: { path: path.resolve(__dirname, './public'), filename: 'bundle.js' },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
};

module.exports = config;
