import '../css/index.css';

//js引入img图片
import imgsrc from  '../images/logo.png'
console.log(imgsrc);
console.log('index.js加载成功');
const imgEl=document.createElement('img');
imgEl.src=imgsrc;
document.body.appendChild(imgEl);