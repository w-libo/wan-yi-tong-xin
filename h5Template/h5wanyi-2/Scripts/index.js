/**
 * Created by Administrator on 2017/6/26 0026.
 */
//动画效果代码
var swiper = new Swiper('.swiper-container',{
    direction : 'vertical',
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
});

//滑屏效果

//var swiper = new Swiper('.swiper-container', {
//    pagination: '.swiper-pagination',
//    //paginationClickable: true,
//    direction: 'vertical'
//});

//背景音乐

$(".yinyue").click(
    function(){
        $(this).toggleClass("yilei");

        if($("#audio").get(0).pause()){
            $("#audio").get(0).play();
        }
        else{$("#audio").get(0).pause();}


    }
);
