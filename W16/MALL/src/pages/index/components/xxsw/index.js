import './xxsw.css';
import {XXSW_URL} from 'api/mall_url.config.js';
import {getData,getDelayedData} from 'api/getData';
import renderHd from './xxsw-hd.art';
import renderBd from './xxsw-bd.art';
const xxsw_field=document.querySelector('.fresh .center');
xxsw_field.innerHTML=renderHd();

getDelayedData(XXSW_URL).then(data=>{
console.log("新鲜甩尾获取的数据");
    // console.log(data);
    // console.log(render(data));
    const xxswBd=document.querySelector('.fresh .center .bd');
    xxswBd.innerHTML=renderBd(data);
}
).catch(err=>{
    console.error(err);
});
console.log("引入新鲜甩尾区域成功");