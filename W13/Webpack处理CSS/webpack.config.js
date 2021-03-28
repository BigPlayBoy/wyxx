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
        test:/\.css$/
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