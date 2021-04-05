import './ddwl.css';
import {DDWL_URL} from 'api/mall_url.config.js';
import {getData} from 'api/getData';
import render from './ddwl.art';
const ddwl_field=document.querySelector('.ddwl .center');
getData(DDWL_URL).then(data=>{
    console.log(data);
    ddwl_field.innerHTML=render(data);
}).catch(err=>{
    console.error(err);
});