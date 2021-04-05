import './gt.css';
import {GROUP_TOUR_URL} from 'api/mall_url.config.js';
import {getData} from 'api/getData';
import render from './gt.art';
const gt_field=document.querySelector('.gtbzz .center');
getData(GROUP_TOUR_URL).then(data=>{
    console.log("跟团游");
    console.log(data);
    gt_field.innerHTML=render(data);
}).catch(err=>{
    console.error(err);
});