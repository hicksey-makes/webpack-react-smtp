const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  devServer: {
    static: './public',
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },

};
