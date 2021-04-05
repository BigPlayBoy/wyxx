import './zsj.css';
import {ZSJ_URL} from 'api/mall_url.config.js';
import {getData,getDelayedData} from 'api/getData';
import renderHd from './zsj_hd.art';
import renderBd from './zsj_bd.art';
const zsj_field=document.querySelector('.zsj .center');
zsj_field.innerHTML=renderHd();
const zsj_bd=zsj_field.querySelector(".bd");
getDelayedData(ZSJ_URL).then(data=>{
    // console.log(data);
    zsj_bd.innerHTML=renderBd(data);
}).catch(err=>{
    console.error(err);
});
console.log("最世界模块引入成功");