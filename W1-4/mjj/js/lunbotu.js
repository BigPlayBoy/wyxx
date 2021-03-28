(function () {
    var lunbotu_ul = document.getElementById("lunbotu_ul");
    var lunbotu_left_btn = document.getElementById("lunbotu_left_btn");
    var lunbotu_right_btn = document.getElementById("lunbotu_right_btn");

    // 点击右按钮时，轮播图向左一个图片宽度
    // 需要调整left值
    var index = 0;
    lunbotu_right_btn.onclick = function () {
        index++;
        console.log("小圆点移动到", index+1);
        if (index >= 5) {
            index=4;
            return;
        }else{

            lunbotu_ul.style.left = -221 * index + "px";
        }

    }
    lunbotu_left_btn.onclick = function () {
        index--;
        console.log("小圆点移动到", index+1);
        if (index < 0) {
            index=0;
            return;
        }else{

            lunbotu_ul.style.left = -221 * index + "px";
        }
    }
})();