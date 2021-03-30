import Slider from './Slider.js';
import bannerSlider from './bannerSlider.js';
import tabSlider from './tabSlider.js';

const bannerDemo = document.querySelector(".banner");
const tabDemo = document.querySelector(".tab");
const paginationArrowDemo = document.querySelector(".pagination-arrow");
const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");
console.log(bannerDemo,tabDemo,paginationArrowDemo);
const bannerOptions = {
    speed: 1000,
    autoplay:true
}
const tabOptions = {
    speed: 2000,
    autoplay:false,
    // 这个要给自动播放加个锁，一旦设为true，就永远不能开启自动播放，各个banner在初始化的时候，要检查这个参数
    autoplayblock:true
}
const paginationArrowOptions = {
    initialIndex:1,
    speed: 1000,
    autoplay:false,
    arrow:true
}
// paginationArrowDemo.addEventListener('mouseover', () => {
//     leftBtn.style.opacity = "1";
//     rightBtn.style.opacity = "1";
//     leftBtn.style.display = "block";
//     rightBtn.style.display = "block";
// }, false);
// paginationArrowDemo.addEventListener('mouseout', () => {
//     leftBtn.style.opacity = "0";
//     rightBtn.style.opacity = "0";
//     setTimeout(() => {
//         leftBtn.style.display = "none";
//         rightBtn.style.display = "none";
//     }, 1500);
// }, false);
new bannerSlider(bannerDemo, bannerOptions);
new bannerSlider(tabDemo, tabOptions);
new bannerSlider(paginationArrowDemo, paginationArrowOptions);
// new mySlider(slider, myOptions);