// banner轮播图动画效果
// 函数要包裹在IIFE中，防止变量污染
(function () {
    // 获取到轮播图
    var banner_list = document.getElementById("banner-list");
    var cloneLi = banner_list.firstElementChild.cloneNode(true);
    var circles_ul=document.getElementById("circles_ul");
    var circles_list=circles_ul.getElementsByTagName("li");
    // console.log(cloneLi);
    banner_list.appendChild(cloneLi);
    // 当前图片序号，从0开始
    var index = 0;
    var lock=true;
    function bannerPlay() {
        if(!lock)return;
        lock=false;
        setInterval(function () {
            banner_list.style.transition="transform 0.5s linear 0s";
            index++;
            // 如果图片到达第四张图-“假图”，我们要在动画结束之后，瞬间拉回到第一张图片上
            if (index == 3) {
                banner_list.style.transform = "translateX(" + -25 * index + "%)";
                index = 0;
                setTimeout(() => {
                    // console.log("先清除动画，再拉回第一张图片");
                    banner_list.style.transition="none";
                    banner_list.style.transform = "translateX(" + -25 * index + "%)";
                }, 500);
            }
            // console.log("图片移动" + "translateX(" + -25 * index + "%)");
            banner_list.style.transform = "translateX(" + -25 * index + "%)";
            setTimeout(() => {
                setCircleColor();
                
            }, 50);
        }, 5000);
    }
    bannerPlay();

    // 第二步，要给小圆点添加事件监听，通过事件委托，点击哪个小圆点，就显示哪个图，
    // 这个不需要考虑第四张假图了
    // 小圆点上要添加data-n属性方便获取序列
    circles_ul.onclick=function(e){
        if(e.target.tagName.toLowerCase()=='li'){
            var n=parseInt(e.target.getAttribute("data-n"));
            index=n;
            banner_list.style.transform = "translateX(" + -25 * index + "%)";
            // 要将相应的li颜色发生变化
            setCircleColor();
        }
    }

    // 要写个设置小圆点颜色的函数
    function setCircleColor(){
        // console.log("给小圆点设置颜色",index);
        for(var i=0;i<circles_list.length;i++){
            // 遍历所有的小圆点，要先去掉current样式
            // console.log("遍历所有的小圆点，要先去掉current样式",i);
            circles_list[i].className='';
        }
        circles_list[index].className="current";

    }
})();