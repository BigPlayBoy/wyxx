import BaseSlider from './base.js';
import {action} from './actions.js';
// bannerSlider
// 1、图片不管有几张，当打开页面或者刷新页面时，默认显示的图片均是第一张。
// 2、切换到哪一张图片，该图片所对应的小圆点的样式也跟随改变。
// 3、点击小圆点时，它所对应的图片显示。
// 4、鼠标移入图片区域，停止轮播。
// 5、鼠标移出图片区域，恢复自动轮播。
// 6、图片每隔1s切换一次。

class bannerSlider extends BaseSlider {
    constructor(el, options) {
      super(el, options);
      this._bindEvent();
    }
    _bindEvent(){
        // 这个地方要使用事件委托
        console.log("at ---bannerSlider.js --- _bindEvent");
        // this.show(0);
        action.bindEvent(this);
        // 还要添加鼠标移入移出的监听事件
        
    }
  }


  export default bannerSlider;