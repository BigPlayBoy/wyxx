# wyxx
学习资料
这里存放的有一些学习资料，方便练习git的使用
https://babeljs.io/  babel 官网
安装Babel npm install --save-dev @babel/core @babel/cli
设置 npm的镜像源  npm config set registry https://reistry.npm.taobao.org
只需要执行一次就行了

 "build": "babel src -d lib"
 用babel把src目录里面的文件编译一下，放到lib文件夹中
安装webpack需要的包
 npm install --save-dev webpack-cli@3.3.12  webpack@4.44.1
 webpack 官网 https://www.webpackjs.com/

 在webpack中安装babel-loader相关依赖
 npm install --save-dev babel-loader@8.1.0 @babel/core@7.11.0 @babel/preset-env@7.11.0

 安装 core-js
 npm install --save-dev core-js@3.6.5

 安装html-webpack-plugin
 npm install --save-dev html-webpack-plugin@4.3.0
安装 css-loader  这样可以识别到css文件
npm install --save-dev css-loader@4.1.1
#安装style-loader   把识别到的css文件，加载到网页的内联样式表中
npm install --save-dev style-loader@1.2.1
安装mini-css-extract-plugin  把处理后的参数苏文件以文件形式引入到网页中
npm install --save-dev mini-css-extract-plugin@0.9.0
安装file-loader  方便处理图片文件
npm install --save-dev  file-loader@6.0.0
安装html-withimg-loader  处理html里面的图片
npm install --save-dev html-withimg-loader@0.1.16
安装url-loader
npm install --save-dev url-loader@4.1.0
安装 webpack-dev-sercer
npm install --save-dev webpack-dev-server@3.11.0
    "scripts": {
       "webpack": "webpack --config webpack.config.js",
       开发时使用下面的命令，运行一次就好了，有修改会自动运行
       "dev":"webpack-dev-server --open chrome"
     },

引入模板art-template
<script src='https://unpkg.com/art-template@4.13.2/lib/template-web.js'>
#官方文档http://aui.github.io/art-template/zh-cn/docs/

在webpack中使用art-template 
npm install art-template@4.13.2

npm install art-template-loader@1.4.3 --save-dev