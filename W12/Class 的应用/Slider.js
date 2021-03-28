import BaseSlider from './base.js'
class Slider extends BaseSlider {
    constructor(el, options) {
      super(el, options);
      this._bindEvent();
    }
    _bindEvent() {
      document.addEventListener('keyup', ev => {
        console.log(ev.keyCode);
        if (ev.keyCode === 37 || ev.keyCode === 38) {
          //  左键和上键
          this.prev();
        }
        else if (ev.keyCode === 39 | ev.keyCode === 40) {
          this.next();
        }
      });

    }
  }

  export default Slider;