import BaseSlider from './base.js';
import Keyboard from './keyboard.js';
import mouseAction from './mouseAction.js'
class Slider extends BaseSlider {
    constructor(el, options) {
      super(el, options);
      this._bindEvent();
    }
    _bindEvent(){
        Keyboard.bindEvent(this);
        mouseAction.bindEvent(this);
    }
  }

  export default Slider;