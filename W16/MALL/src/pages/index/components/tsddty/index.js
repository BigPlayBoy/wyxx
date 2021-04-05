import './tsddty.css';
import {LOCAL_EXP_URL} from 'api/mall_url.config.js';
import {getData,getDelayedData} from 'api/getData';
import renderHd from './tsddty_hd.art';
import renderBd from './tsddty_bd.art';
const tsddty_field=document.querySelector('.tsddty .center');
tsddty_field.innerHTML=renderHd();
const tsddty_bd=tsddty_field.querySelector('.bd');
getDelayedData(LOCAL_EXP_URL).then(data=>{
    console.log("特色当地体验");
    console.log(data);
    tsddty_bd.innerHTML=renderBd(data);
}).catch(err=>{
    console.error(err);
});
console.log("特色当地体验加载成功");