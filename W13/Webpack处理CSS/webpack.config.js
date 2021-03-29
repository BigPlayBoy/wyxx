const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode:'development',
  entry:'./src/js/index.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].js'
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        // 单个lodaer配置
        // loader:'css-loader',
        // 多个loader配置，系统先使用右边的，处理后送到左边的再处理
        use:['style-loader','css-loader']
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./index.html',
      filename:'index.html'
    })
  ]
};