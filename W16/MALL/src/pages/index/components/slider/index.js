import './slider.css'
import './btn.css'

import Slider from './module';
import { getData,getDelayedData } from 'api/getData';
import {slider_URL} from 'api/mall_url.config.js'
import render from './slider.art';

const layoutEl = document.getElementById('slider-layout');

getDelayedData(slider_URL).then(data => {
    // console.log(data);
    layoutEl.innerHTML = render({
        items: data
    });
    const slider = new Slider(document.querySelector('.slider'), {
        initialIndex: 1,
        autoplay: 1000,
    });
    const bannerEl = document.getElementById("banner");
    bannerEl.addEventListener('mouseenter', () => {
        slider.pause();
    }, false);
    bannerEl.addEventListener('mouseleave', () => {
        slider.autoplay();
    }, false);
    const leftbtn = document.getElementById('leftbtn');
    const rightbtn = document.getElementById('rightbtn');
    leftbtn.addEventListener('click', () => {
        slider.prev();
    }, false);
    rightbtn.addEventListener('click', () => {
        slider.next();
    }, false);



}).catch(err => {
    console.log(err);
});


console.log("slider.js 引入成功");