const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//把CSS变成单独的文件的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'development',
  // 单入口
  // entry:'./src/js/index.js',
  entry: { 
    index: './src/js/index.js' ,
    // search:'./src/js/search.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader'
      },
      {
        test: /\.css$/,
        // 单个lodaer配置
        // loader:'css-loader',
        // 多个loader配置，系统先使用右边的，处理后送到左边的再处理
        // use:['style-loader','css-loader']
        use: [{
          loader:MiniCssExtractPlugin.loader,
          options:{
            // publicPath  设置公共路径，防止css里面的图片路径不对
            publicPath:'../'
          }
        }, 'css-loader']
      },
      {
        test:/\.(jpg|png|gif)$/,
        use:{
          loader:'url-loader',
          options:{
            name:'img/[name].[ext]',
            esModule:false,
            // 小于10k的图片，会进行base64编码
            limit:2000
          }
        }
      },
      {
        // html-withimg-loader需要和file-loader配合使用
        test:/\.(htm|html)$/,
        use:{
          loader:'html-withimg-loader',
          
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks:'index',
      // minify:{
      //   // 删除index.html中的注释
      //   removeComments:true,
      //   // 删除index.html中的空格
      //   collapseWhitespace:true,
      //   // 删除各种html标签属性值得双引号
      //   removeAttributeQuotes:true
      // }
    }),
    // new HtmlWebpackPlugin({
    //   template: './src/search.html',
    //   filename: 'search.html',
    //   chunks:'search',
    // }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
};