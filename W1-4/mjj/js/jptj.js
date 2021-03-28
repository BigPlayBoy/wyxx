(function(){
    var jptjlbt=document.getElementById("jptjlbt");
    var jptj_leftbtn=document.getElementById("jptj_leftbtn");
    var jptj_rightbtn=document.getElementById("jptj_rightbtn");
    var jptj_ul=document.getElementById("jptj_ul");

    var index=0;

    jptj_rightbtn.onclick = function () {
        index++;
        console.log("给精品推荐的小圆点移动到", index+1);
        if (index >= 4) {
            index=3;
            return;
        }else{
            jptj_ul.style.left = -367 * index + "px";
        }

    }
    jptj_leftbtn.onclick = function () {
        index--;
        console.log("给精品推荐的小圆点移动到", index+1);
        if (index < 0) {
            index=0;
            return;
        }else{
            jptj_ul.style.left = -367 * index + "px";
        }
    }
})();