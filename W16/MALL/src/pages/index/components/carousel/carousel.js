// 设置IIFE防止里面的变量污染全局变量
(function () {
    var carousel_list = document.getElementById("carousel_list");
    var leftbtn = document.getElementById("leftbtn");
    var rightbtn = document.getElementById("rightbtn");
    var circles = document.getElementById("circles");
    var circles_list = circles.getElementsByTagName("li");
    // 克隆第一张li
    var cloneLi = carousel_list.firstElementChild.cloneNode(true);
    carousel_list.appendChild(cloneLi);

    var index = 0;
    // 函数节流
    var lock = true;

    // 给左按钮设置监听
    leftbtn.onclick = function () {
        if (!lock) return;
        lock = false;
        carousel_list.style.transition = "transform 0.5s linear 0s";
        //左按钮很特殊，要先写if
        if (index == 0) {
            index = 5;
            carousel_list.style.transition = "none";
            // console.log("暂时关闭转换特效");
            carousel_list.style.transform = "translateX(" + (-16.666 * index) + "%)";
            // 这里要延迟0ms,就是在上面关了特效之后，图片瞬间移动到第六张“假图"上之后,再开启转换特效，从第六张图拉到第五张图（这时候就要有特效了）
            index--;
            setTimeout(function () {
                // console.log("开启转换特效");
                carousel_list.style.transition = "transform 0.5s linear 0s";
                // console.log(index);

                carousel_list.style.transform = "translateX(" + (-16.666 * index) + "%)";
            }, 0);
            console.log(index);

        } else {
            index--;
            carousel_list.style.transform = "translateX(" + (-16.666 * index) + "%)";
        }
        setCircles();
        setTimeout(function () {
            lock = true;
        }, 500);

    }
    // 给右按钮设置监听
    rightbtn.onclick = function () {
        if (!lock) return;
        lock = false;

        // 加上过渡
        carousel_list.style.transition = "transform 0.5s linear 0s";
        // 图片序号+1
        index++;
        // console.log(index);
        // 拉动轮播图
        carousel_list.style.transform = "translateX(" + (-16.666 * index) + "%)";
        // 如果到达第六张图片，要瞬间拉回到第一张，拉之前要删除掉转换特效
        if (index == 5) {
            carousel_list.style.transform = "translateX(" + (-16.666 * index) + "%)";
            index = 0;
            // console.log("index被改为0");
            setTimeout(function () {
                carousel_list.style.transition = "none";
                carousel_list.style.transform = "none";
                // carousel_list.style.transform = "translateX(" + (-16.666 * index) + "%)";
                // console.log("暂时关闭转换特效");
            }, 500);
        }
        setCircles();
        setTimeout(function () {
            lock = true;
        }, 500);
    }

    // 设置小圆点
    function setCircles() {
        for (var i = 0; i <= 4; i++) {
            circles_list[i].className = "";
            if (i == index % 5) {
                circles_list[i].className = "current";
            }

        }
    }

    // 事件委托
    circles.onclick = function (e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            // 得到点击的第几个元素，
            var n = Number(e.target.getAttribute('data-n'));
            index = n;
            carousel_list.style.transform = "translateX(" + (-16.666 * index) + "%)";
            setCircles();

        }
    }

    // 当鼠标移动到banner区域时，应暂停自动播放。离开banner区域时，要开启自动播放
    // 自动换图
    var banner = document.getElementById("banner");
    var timer;
    function autoPlay() {
        // 设表先关
        clearInterval(timer);

        timer = setInterval(function () {
            rightbtn.onclick();

        }, 3000);
    }
    function stopPlay() {
        clearInterval(timer);
    }
    banner.onmouseenter = function () {
        // console.log("进入banner区域，暂停自动播放");

        stopPlay();
    }
    banner.onmouseleave = function () {

        // console.log("离开banner区域，开启自动播放");
        autoPlay();
    }
    autoPlay();
})();
(function () {
    // 菜单事件监听
    var banner_nav_ul = document.getElementById("banner_nav_ul");
    var menus_box = document.getElementById("menus-box").children;
    var banner_nav = document.getElementById("banner-nav");
    // 这里必须使用onmouseover事件监听 因为onmouseenter 不冒泡
    banner_nav_ul.onmouseover = function (e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            var t = e.target.getAttribute("data-t");
            //当前碰到的这个li，要加上current类 
            var lis = document.querySelectorAll("#banner_nav_ul li");
            // console.log(lis);
            for (var i = 0; i < lis.length; i++) {
                // if(lis[i].getAttribute("data-t") == t){
                //     lis[i].className = lis[i].className+' current';
                // }else{
                //     lis[i].className = lis[i].className.replace('current', ' ');
                // }
                lis[i].className=lis[i].getAttribute('data-t');
            }
            e.target.className +=" current";
            // console.log(t);
            for (var i = 0; i < menus_box.length; i++) {
                if (menus_box[i].getAttribute("data-t") == t) {
                    menus_box[i].className = "menu current";
                } else {
                    menus_box[i].className = "menu";

                }
            }
        }
    }
    // 当鼠标移出菜单区域的时候，要清除掉所有的current类
    banner_nav.onmouseleave = function () {
        var current = document.querySelectorAll(".banner-nav .current");
        // console.log(current.length);
        for (var i = 0; i < current.length; i++) {
            current[i].className = current[i].className.replace("current", '');

        }
    };
})();