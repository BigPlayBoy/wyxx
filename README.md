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
