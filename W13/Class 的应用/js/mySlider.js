import BaseSlider from './base.js';
const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");
class mySlider extends BaseSlider {
    constructor(el, options) {
      super(el, options);
      this._bindEvent();
    }
    _bindEvent() {
      leftBtn.addEventListener('click', ev => {
        this.prev();
      });
      rightBtn.addEventListener('click', ev => {
        this.next();
      });
    }
  }
  export default mySlider;