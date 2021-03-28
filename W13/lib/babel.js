"use strict";

require("./index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var name = 'Alex';
var age = 18;

var add = function add(x, y) {
  return x + y;
};

new Promise(function (resolve, reject) {
  resolve("成功");
}).then(function (value) {
  console.log(value);
});
Array.from([1, 2]);

var Person = function Person(name, age) {
  _classCallCheck(this, Person);

  Object.assign(this, {
    name: name,
    age: age
  });
};

new Person('alex', 18);