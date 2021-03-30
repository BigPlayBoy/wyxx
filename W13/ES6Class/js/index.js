import 'babel-polyfill';
import {bannerSlider} from './bannerSlider.js';
import '../css/base.css';
import '../css/index.css';
const bannerDemo = document.querySelector(".banner");
const tabDemo = document.querySelector(".tab");
const paginationArrowDemo = document.querySelector(".pagination-arrow");
const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");
console.log(bannerDemo,tabDemo,paginationArrowDemo);
const bannerOptions = {
    speed: 1000,
    autoplay:true,
    transitionDuration:500
}
const tabOptions = {
    speed: 2000,
    autoplay:false,
    // 这个要给自动播放加个锁，一旦设为true，就永远不能开启自动播放，各个banner在初始化的时候，要检查这个参数
    autoplayblock:true,
    transitionDuration:1000

}
const paginationArrowOptions = {
    initialIndex:1,
    speed: 1000,
    autoplay:false,
    arrow:true,
    transitionDuration:800

}

new bannerSlider(bannerDemo, bannerOptions);
new bannerSlider(tabDemo, tabOptions);
new bannerSlider(paginationArrowDemo, paginationArrowOptions);
