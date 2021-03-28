const keyboard = {
    bindEvent(Slider) {
        document.addEventListener('keyup', ev => {
            console.log(ev.keyCode);
            if (ev.keyCode === 37 || ev.keyCode === 38) {
                //  左键和上键
                Slider.prev();
            }
            else if (ev.keyCode === 39 | ev.keyCode === 40) {
                Slider.next();
            }
        });
    }
}
export default keyboard;