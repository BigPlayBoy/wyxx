//默认参数
import { DEFAULTS } from './defaults.js'
// 常量
import { ELEMENT_NODE, SLIDER_ANIMATION_CLASSNAME } from './constants.js';

class BaseSlider {
    constructor(el, options) {
        // console.log(options)
        if (el.nodeType !== ELEMENT_NODE)
            throw new Error('实例化的时候，请传入 DOM 元素！');

        // 实际参数
        this.options = {
            ...DEFAULTS,
            ...options
        };

        const slider = el;
        const sliderContent = slider.querySelector('.slider-content');
        const sliderItems = sliderContent.querySelectorAll('.slider-item');
        // 处理小圆点的切换
        const sliderDots = slider.querySelectorAll('.pagination span');
        console.log('获取到的小圆点列表');
        console.log(sliderDots);
        // 添加到 this 上，为了在方法中使用
        this.slider = slider;
        this.sliderContent = sliderContent;
        this.sliderItems = sliderItems;
        this.sliderDots = sliderDots;

        this.minIndex = 0;
        this.maxIndex = sliderItems.length - 1;
        this.currIndex = this.getCorrectedIndex(this.options.initialIndex);

        // 每个 slider-item 的宽度（每次移动的距离）
        this.itemWidth = sliderItems[0].offsetWidth;

        this.init();
    }

    // 获取修正后的索引值
    // 随心所欲，不逾矩
    getCorrectedIndex(index) {
        // console.log(`index=${index},minIndex=${this.minIndex},maxIndex=${this.maxIndex}`)
        if (index < this.minIndex) return this.maxIndex;
        if (index > this.maxIndex) return this.minIndex;
        return index;
    }

    // 初始化
    init() {
        console.log("输出用户的配置参数");
        console.log(this.options);
        // 切换到初始索引 initialIndex
        this.show(this.currIndex);

        // 开启动画
        if (this.options.animation) {
            this.changeWithAnimation();
            this.openAnimation();
        }
        // 设置是否自动播放
        if (this.options.autoplay) {
            // 要在这里设置自动播放
            // console.log("设置自动播放");
            this.autoplay();
            // console.log("设置自动播放成功");
        }
        // 如果有左右按钮，则增加按钮的事件
        if (this.options.arrow) {
            // 
            console.log("配置了左右箭头，需要增加事件监听");
            this.addArrowClick();
        }
    }

    // 设置要显示第几张
    show(index) {
        // console.log("at show----当前输入的要显示的图片序号为:"+index);
        this.currIndex = this.getCorrectedIndex(index);
        // console.log("at show----当前显示的图片序号应该为:"+this.currIndex);
        // index这一张要显示出来，其他的要隐藏起来
        // console.log(this.sliderItems);
        // console.log(this.sliderItems.length,this.sliderDots.length);
        // this.sliderContent.style.transitionProperty='opacity';
        for (var i = 0; i < this.sliderItems.length; i++) {
            // console.log(this.sliderDots[i],i);
            if (i == this.currIndex) {
                // console.log("找到了指定的图片和小圆点", this.sliderDots);
                this.sliderItems[i].style.opacity = 1;
                this.sliderDots[i].className = 'active';
                continue;
            }
            this.sliderItems[i].style.opacity = 0;
            this.sliderDots[i].className = 'a';
        }

    }
    // 自动播放
    // timer;
    autoplay() {
        
        var self = this;
        clearInterval(self.timer);
        // console.log(this.options.speed);
        // 自动播放
        self.timer = setInterval(function () {
            // 获取到元素
            // console.log("设置自动播放");
            // console.log(self.currIndex); 
            // 当前的index+1
            self.currIndex++;
            // 获取正确的index,过大或者过小都会被修正
            self.currIndex = self.getCorrectedIndex(self.currIndex);
            self.show(self.currIndex);
        }, this.options.speed);

    }

    // 监听左右箭头
    addArrowClick() {
        // 设置左右箭头事件监听
        const left = this.slider.querySelector(".slider .arrow .prev");
        const right = this.slider.querySelector(".slider .arrow .next");
        const self = this;
        left.onclick = function () {
            self.prev();
        }
        right.onclick = function () {
            self.next();
        }
    }


    // 带动画的切换
    changeWithAnimation() {
        this.setAnimationSpeed(this.options.speed);
    }
    // 设置切换动画速度
    setAnimationSpeed(speed) {
        console.log(`${speed/1200}s`);
        for(var i=0;i<this.sliderItems.length;i++){
            this.sliderItems[i].style.transitionDuration = `${speed/1000}s`;
        }
    }

    // 获取要移动的距离
    getDistance(index = this.currIndex) {
        return -this.itemWidth * index;
    }

    // 开启动画
    openAnimation() {
        for(var i=0;i<this.sliderItems.length;i++){
            this.sliderItems[i].classList.add(SLIDER_ANIMATION_CLASSNAME);
        }
    }

    // 关闭动画
    closeAnimation() {
        this.setAnimationSpeed(0);
    }

    // 切换到 index 索引对应的幻灯片
    to(index) {
        index = this.getCorrectedIndex(index);
        if (this.currIndex === index) return;

        this.currIndex = index;
        const distance = this.getDistance();

        if (this.options.animation) {
            return this.changeWithAnimation();
        } else {
            return this.move(distance);
        }
    }

    // 切换上一张
    prev() {
        // console.log("at prev----点击了prev,当前显示的图片序号为:"+this.currIndex);
        // console.log(`at prev----所以应该显示的图片序号为${this.currIndex-1}`);
        this.show(this.currIndex - 1);
    }

    // 切换下一张
    next() {
        this.show(this.currIndex + 1);
    }

    // 获取当前索引
    getCurrIndex() {
        return this.currIndex;
    }
}

export default BaseSlider;