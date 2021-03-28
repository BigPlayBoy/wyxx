import Slider from './Slider.js';
// import mySlider from './mySlider.js';

const slider = document.querySelector(".slider");
const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");

const myOptions = {
    speed: 2000
}
slider.addEventListener('mouseover', () => {
    leftBtn.style.opacity = "1";
    rightBtn.style.opacity = "1";
    leftBtn.style.display = "block";
    rightBtn.style.display = "block";
}, false);
slider.addEventListener('mouseout', () => {
    leftBtn.style.opacity = "0";
    rightBtn.style.opacity = "0";
    setTimeout(() => {
        leftBtn.style.display = "none";
        rightBtn.style.display = "none";
    }, 1500);
}, false);
new Slider(slider, myOptions);
// new mySlider(slider, myOptions);