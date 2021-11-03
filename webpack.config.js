const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|png|svg|jpg)$/,
        use: {
          loader: 'url-loader'
        },
        type: 'javascript/auto'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', 'jsx']
  },
  devServer: {
    static: './public',
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },

};
