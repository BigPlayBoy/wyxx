import './gt.css';
import {GROUP_TOUR_URL} from 'api/mall_url.config.js';
import {getData,getDelayedData} from 'api/getData';
import renderHD from './gt_hd.art';
import renderBd from './gt_bd.art';
const gt_field=document.querySelector('.gtbzz .center');
gt_field.innerHTML=renderHD();
const gt_bd=gt_field.querySelector(".bd");
getDelayedData(GROUP_TOUR_URL).then(data=>{
    // console.log("跟团游");
    // console.log(data);
    gt_bd.innerHTML=renderBd(data);
}).catch(err=>{
    console.error(err);
});