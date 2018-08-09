const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const uglify = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new uglify(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
};