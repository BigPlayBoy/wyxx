var backTop = document.getElementById("backTop");
var timer;
backTop.onclick = function () {
    clearInterval(timer);
    timer = setInterval(function () {
        document.documentElement.scrollTop -= 10;
        if (document.documentElement.scrollTop <= 0) {
            clearInterval(timer);
        }
    }, 20);
}
// 获得卷动值
window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || window.scrollY;
    if (scrollTop == 0) {
        backTop.style.display = 'none';
    } else {
        backTop.style.display = 'block';

    }
}