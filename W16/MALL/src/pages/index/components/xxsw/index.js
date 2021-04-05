import './xxsw.css';
import {XXSW_URL} from 'api/mall_url.config.js';
import {getData} from 'api/getData';
import render from './xxsw.art';
const xxsw_field=document.querySelector('.fresh .center');
getData(XXSW_URL).then(data=>{

    // console.log(data);
    // console.log(render(data));
    xxsw_field.innerHTML=render(data);
}
).catch(err=>{
    console.error(err);
});
console.log("引入新鲜甩尾区域成功");