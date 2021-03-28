const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  // entry: './src/index.js',
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    // 单入口
    // new HtmlWebpackPlugin({
    //   template:'./index.html'
    // })
    // 多入口，有几个入口就实例化几个
    new HtmlWebpackPlugin({
      template: './index.html',
      filename:'index.html',
      // 指定引入的js，index指向的上面的入口里面的index
      chunks:'index'
    }),
    new HtmlWebpackPlugin({
      template: './search.html',
      filename:'search.html',
      // 指定引入的js，search指向上面的入口里的search
      chunks:'search'
    })
  ]
};