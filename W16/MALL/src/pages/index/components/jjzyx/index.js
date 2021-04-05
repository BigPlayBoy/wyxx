import './jjzyx.css';

import { getData, getDelayedData } from 'api/getData';
// import { JJZYX_URL } from './config';
import { JJZYX_URL } from 'api/mall_url.config.js';

import render from './items.art';
const layoutEl=document.querySelector('.jjzyx .bd');
getDelayedData(JJZYX_URL).then(data => {
    console.log(data);
    // console.log(render(data));
    layoutEl.innerHTML=render(data);
}).catch(err => {
    console.log(err);
});
console.log("引入机酒自由行组件成功");