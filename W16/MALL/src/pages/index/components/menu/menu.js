(function () {
    // 菜单事件监听
    var banner_nav_ul = document.getElementById("banner_nav_ul");

    const menu_content_ele = document.querySelector(".banner .center .menu-content")
    var ele = document.querySelector(".banner .center");
    // 这里必须使用onmouseover事件监听 因为onmouseenter 不冒泡
    banner_nav_ul.addEventListener('mouseenter', (e) => {
        console.log("鼠标移入事件");
        if (e.target.tagName.toLowerCase() == 'li') {
            var t = e.target.getAttribute("data-key");
            //当前碰到的这个li，要加上current类 
            const menu_item_ele = banner_nav_ul.querySelectorAll('.menu-item');
            console.log("menu_item_ele的内容是");
            console.log(menu_item_ele);
            for (var i = 0; i < menu_item_ele.length; i++) {
                menu_item_ele[i].classList.add(menu_item_ele[i].getAttribute('data-key'));
                // lis[i].classList.remove("current");
            }
            // e.target.classList.add("current");
            console.log(t);
            menu_content_ele.style.display = "block";
            const menu_content_lis = menu_content_ele.querySelectorAll('li');
            console.log(menu_content_lis);
            for (var i = 0; i < menu_content_lis.length; i++) {
                if (menu_content_lis[i].getAttribute("data-key") == t) {
                    menu_content_lis[i].classList.add('current');
                } else {
                    menu_content_lis[i].classList.remove('current');
                }
            }
            console.log(menu_content_lis);
        }
    }, true);
    banner_nav_ul.onmouseover = function (e) {

    }
    // 当鼠标移出菜单区域的时候，要清除掉所有的current类
    ele.onmouseleave = function () {
        var current = document.querySelectorAll(".banner-nav .current");
        console.log(current.length);
        for (var i = 0; i < current.length; i++) {
            current[i].className = current[i].className.replace("current", '');

        }
        menu_content_ele.style.display = "none";
    };
})();