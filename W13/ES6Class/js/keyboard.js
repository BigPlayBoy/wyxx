const LEFT_KEYCODE = 37;
const UP_KEYCODE = 38;
const RIGHT_KEYCODE = 39;
const DOWN_KEYCODE = 40;

const keyboard = {
    bindEvent(Slider) {
        document.addEventListener('keyup', ev => {
            console.log(ev.keyCode);
            if (ev.keyCode === LEFT_KEYCODE || ev.keyCode === UP_KEYCODE) {
                //  左键和上键
                Slider.prev();
            }
            else if (ev.keyCode === RIGHT_KEYCODE | ev.keyCode === DOWN_KEYCODE) {
                Slider.next();
            }
        });
    }
}
export default keyboard;