import Ajax from './Ajax.js';
// import {getXHR} from './Ajax.js';
const ajax=(url,options)=>{
   return new Ajax(url,options).getXHR();
}
const get=(url,options)=>{
    return new ajax(url,{...options,method:"GET"}).getXHR;
 }
 const getJSON=(url,options)=>{
    return new ajax(url,{...options,method:"GET",responseType:"JSON"}).getXHR;
 }
 const post=(url,options)=>{
    return new ajax(url,{...options,method:"POST"}).getXHR;
 }
export {ajax,get,getJSON,post}