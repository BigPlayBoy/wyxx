// 这个里面，要获取小圆点的位置，然后跳转到相应的图片
// 小圆点的父元素
const bannerPagination = document.getElementById("banner-pagination");
// const Pagination = document.querySelector(".slider .pagination");
const sliderLayout = document.querySelector(".banner .banner-slider");
// const arrow_div=document.querySelectorAll('.slider .arrow div');
// console.log(`找到两个箭头了${arrow_div.length}`);
const action = {
    bindEvent(Slider) {
        console.log(Slider);
        const Pagination = Slider.slider.querySelector(".slider .pagination");
        const prev_next = Slider.slider.querySelectorAll(".slider .arrow div");
        const sliderDiv=Slider.slider.querySelector(".slider");

        console.log("sliderDiv");
        console.log(sliderDiv);
        Pagination.onclick = function (ev) {
            if (ev.target.tagName.toLowerCase() == 'span') {
                // console.log("点到小圆点了", ev.target);
                let n = ev.target.getAttribute('data-n');
                //   console.log(n);
                Slider.show(n);
            }
        };
        Slider.slider.addEventListener('mouseenter',function(){
            console.log("鼠标移入事件触发，方向键显示出来");
            // 移入鼠标，要显示两个方向键
            for(const arrow of prev_next){
                // console.log(arrow);
                arrow.style.opacity=1;
            }
        },true);
        Slider.slider.addEventListener('mouseout',function(){
            console.log("鼠标移出事件触发，方向键消失");
            // 移入鼠标，要显示两个方向键
            for(const arrow of prev_next){
                // console.log(arrow);
                arrow.style.opacity=0;
            }
        },true);
        // Slider.slider.onmouseenter=function(){
        //     console.log("鼠标移入事件触发");
        //     // 移入鼠标，要显示两个方向键
        //     for(const arrow of prev_next){
        //         // console.log(arrow);
        //         arrow.style.opacity=1;
        //     }
        // }
        // Slider.slider.onmouseout=function(){
        //     console.log("鼠标移出事件触发");
        //     // 移入鼠标，要显示两个方向键
        //     for(const arrow of prev_next){
        //         // console.log(arrow);
        //         arrow.style.opacity=0;
        //     }
        // }
        // 不知道哪里写的有问题，这两个函数无法执行
        sliderDiv.addEventListener ('mouseenter', function () {
            // 增加鼠标监听事件
            console.log("鼠标移入，暂停自动播放");
            console.log(Slider.timer);
            console.log(Slider.options.autoplayblock);
            if(Slider.options.autoplayblock){
                //如果自动播放锁为true，则不能开启自动播放
            }else{

                clearInterval(Slider.timer);
            }
        }, true );
        sliderDiv.addEventListener ('mouseout', function () {
            if(Slider.options.autoplayblock){
                //如果自动播放锁为true，则不能开启自动播放
                console.log("有锁，不能开启自动播放");
            }else{
                Slider.autoplay();
                console.log('鼠标移出，启动自动播放');
            }
            
        }, true);
        
    }
}
export { action }
// const leftBtn = document.querySelector(".prev");
// const rightBtn = document.querySelector(".next");
// const mouseAction = {
//     bindEvent(Slider) {
//         leftBtn.addEventListener('click', ev => {
//             Slider.prev();
//         });
//         rightBtn.addEventListener('click', ev => {
//             Slider.next();
//         });
//     }
// }
// export default mouseAction;
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
