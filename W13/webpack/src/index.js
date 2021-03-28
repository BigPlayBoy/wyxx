import 'core-js/stable';
// import age from './module.js';
// console.log("index.js", age);

let name = 'Alex';
const age = 18;
console.log("输出"+name,age);
const add = (x, y) => x + y;

new Promise((resolve, reject) => {
    resolve("成功");

}).then(value => {
    console.log(value);
});

Array.from([1, 2]);
class Person {
    constructor(name, age) {
        Object.assign(this, { name, age });
    }
}
new Person('alex', 18);