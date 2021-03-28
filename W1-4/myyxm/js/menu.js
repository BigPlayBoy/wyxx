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
            console.log(lis);
            for (var i = 0; i < lis.length; i++) {
                // if(lis[i].getAttribute("data-t") == t){
                //     lis[i].className = lis[i].className+' current';
                // }else{
                //     lis[i].className = lis[i].className.replace('current', ' ');
                // }
                lis[i].className=lis[i].getAttribute('data-t');
            }
            e.target.className +=" current";
            console.log(t);
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
        console.log(current.length);
        for (var i = 0; i < current.length; i++) {
            current[i].className = current[i].className.replace("current", '');

        }
    };
})();