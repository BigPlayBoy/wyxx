const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//把CSS变成单独的文件的插件
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
module.exports = {
  mode:'development',
  // 单入口
  // entry:'./src/js/index.js',
  entry:{index:'./src/js/index.js'},
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'js/[name].js'
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        // 单个lodaer配置
        // loader:'css-loader',
        // 多个loader配置，系统先使用右边的，处理后送到左边的再处理
        // use:['style-loader','css-loader']
        use:[MiniCssExtractPlugin.loader,'css-loader']
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./index.html',
      filename:'index.html'
    }),
    new MiniCssExtractPlugin({
      filename:'css/[name].css'
    })
  ]
};