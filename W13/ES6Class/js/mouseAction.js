const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");
const mouseAction = {
    bindEvent(Slider) {
        leftBtn.addEventListener('click', ev => {
            Slider.prev();
        });
        rightBtn.addEventListener('click', ev => {
            Slider.next();
        });
    }
}
export default mouseAction;
