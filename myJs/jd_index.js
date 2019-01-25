window.onload = function () {
    //顶部透明
    headerEffect();
    //倒计时
    timeBack();
    //初始化swiper
    initSwiper();
}

//顶部透明
function headerEffect() {
    //轮播图高度
    var slideH = document.querySelector("#slide").offsetHeight;
    //获取头部
    var header = document.querySelector("#header");
    window.onscroll = function () {
        //计算方式：opacity = 滚动出去的距离 / 轮播图高度
        var scrollOut = document.body.scrollTop + document.documentElement.scrollTop;
        var opacity = scrollOut / slideH;
        if (opacity >= 1) {
            opacity = 1;
        }
        //设置透明度
        //反引号：1.创建多行 2.解析变量
        header.style.backgroundColor = `rgba(233,35,34,${opacity})`;
    }
}

//倒计时
function timeBack() {
    //以秒做单位 拿到剩余时间赋值给span
    var total = 5;
    //获取展示时间的所有span
    var allSpan = document.querySelectorAll(".seckill-downtime>span");
    //定义定时器
    var timeId = setInterval(function () {
        //时间减少
        total--;
        //计算剩余时间中的时分秒
        var hour = Math.floor(total / 3600);
        var min = Math.floor(total % 3600 / 60);
        var second = total % 60;
        console.log(hour, min, second);
        //为span赋值
        allSpan[0].innerHTML = Math.floor(hour / 10);
        allSpan[1].innerHTML = Math.floor(hour % 10);
        allSpan[3].innerHTML = Math.floor(min / 10);
        allSpan[4].innerHTML = Math.floor(min % 10);
        allSpan[6].innerHTML = Math.floor(second / 10);
        allSpan[7].innerHTML = Math.floor(second % 10);
        //判断倒计时是否结束
        if(total == 0){
            clearInterval(timeId);
        }
        
    }, 1000);




}

// 初始化swiper轮播插件
function initSwiper() {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项  水平
        loop: true, // 循环模式选项
        autoplay: true, //可选选项，自动滑动
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        }
    })
}