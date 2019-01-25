window.onload = function(){
    //初始化swiper
    initSwiper();
}

 //初始化swiper
function initSwiper(){
    var mySwiper = new Swiper('.left .swiper-container', {
        direction: 'vertical', // 垂直切换
        slidesPerView: 'auto',//计算高度值
        freeMode:true//为避免松开手指之后还原到默认值
    })

    var mySwiper = new Swiper('.right .swiper-container', {
        direction: 'vertical', // 垂直切换
        slidesPerView: 'auto',//计算高度值
        freeMode:true//为避免松开手指之后还原到默认值
    })
}

//获取每个li标签
var allLi = document.querySelectorAll(".left li");
//获取li的高度
var liH = allLi[0].offsetHeight;
//滑动的结构块
var swiper_wrap = document.querySelector(".swiper-wrapper");
var left_ul = document.querySelector(".left ul");
allLi.forEach(function(value,index){
    value.onclick = function(){
        for(var i = 0;i<allLi.length;i++){
            allLi[i].classList.remove('active');
        }
        this.classList.add('active');
        //偏移位置
        var positionY = -(liH * index);
        //最大偏移位置
        var maxY = swiper_wrap.offsetHeight - left_ul.offsetHeight;
        if(positionY < maxY){
            positionY = maxY;
        }
        swiper_wrap.style.transition = "transform 1s";
        swiper_wrap.style.transform = `translateY(${positionY}px)`;

    }
});