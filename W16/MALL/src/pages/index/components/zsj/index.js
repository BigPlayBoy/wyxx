import './zsj.css';
import {ZSJ_URL} from 'api/mall_url.config.js';
import {getData} from 'api/getData';
import render from './zsj.art';
const zsj_field=document.querySelector('.zsj .center');
getData(ZSJ_URL).then(data=>{
    console.log(data);
    zsj_field.innerHTML=render(data);
}).catch(err=>{
    console.error(err);
});
console.log("最世界模块引入成功");