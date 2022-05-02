const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
    },
  
  module: {
    rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
      },
      {
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      'less-loader',
    ]
  }
    ]
  },
   plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html'),
    }),
  ],
  devtool: "eval-cheap-module-source-map",
  devServer: {
      static: {
      directory: path.join(__dirname, 'build'),
    },
    compress: true,
    port: 9000,
  },
};