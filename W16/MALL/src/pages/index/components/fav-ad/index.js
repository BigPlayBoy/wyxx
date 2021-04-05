import './fav-ad.css';

import {AD_URL,JJZYX_URL} from 'api/mall_url.config.js';
import {getData} from 'api/getData';
import render from './fav-ad.art';
const ad_field=document.querySelector('.hot-ads .center');
getData(AD_URL).then(data=>{
    // console.log(data);
    // console.log(render(data));
    ad_field.innerHTML=render(data);
}).catch(err=>{
    console.error(err);
});
console.log("引入fav ad 成功")