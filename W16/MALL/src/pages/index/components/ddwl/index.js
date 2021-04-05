import './ddwl.css';
import {DDWL_URL} from 'api/mall_url.config.js';
import {getData,getDelayedData} from 'api/getData';
import renderHd from './ddwl_hd.art';
import renderBd from './ddwl_bd.art';
const ddwl_field=document.querySelector('.ddwl .center');
ddwl_field.innerHTML=renderHd();
getDelayedData(DDWL_URL).then(data=>{
    console.log(data);
    const ddwl_bd=ddwl_field.querySelector('.bd');
    ddwl_bd.innerHTML=renderBd(data);
}).catch(err=>{
    console.error(err);
});