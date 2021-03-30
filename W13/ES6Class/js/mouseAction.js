const leftBtn = document.querySelector(".prev");
const rightBtn = document.querySelector(".next");

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
