import '../css/index.css';

//js引入img图片
import imgsrc from  '../images/logo.png'
console.log(imgsrc);
console.log('index.js加载成功');
const imgEl=document.createElement('img');
imgEl.src=imgsrc;
document.body.appendChild(imgEl);
let name = 'Alex';
const age = 18;

const add = (x, y) => x + y;

new Promise((resolve, reject) => {
    resolve("成功");

}).then(value => {
    console.log(value);
});

console.log(Array.from([1, 2]));
class Person {
    constructor(name, age) {
        Object.assign(this, { name, age });
    }
}
const p=new Person('alex', 18);
console.log(p)