import './tsddty.css';
import {LOCAL_EXP_URL} from 'api/mall_url.config.js';
import {getData} from 'api/getData';
import render from './tsddty.art';
const tsddty_field=document.querySelector('.tsddty .center');
getData(LOCAL_EXP_URL).then(data=>{
    console.log("特色当地体验");
    console.log(data);
    tsddty_field.innerHTML=render(data);
}).catch(err=>{
    console.error(err);
});
console.log("特色当地体验加载成功");