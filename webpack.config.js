const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [new TerserPlugin({})]
  },
  entry: ['./src/index.js', './src/header.js'],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  }

};
