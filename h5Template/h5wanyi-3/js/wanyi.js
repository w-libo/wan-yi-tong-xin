/*音乐暂停播放*/
$(".yinyue").click(
    function(){
        $(this).toggleClass("yilei");

        if($("#audio").get(0).paused){
            $("#audio").get(0).play();
        }
        else{$("#audio").get(0).pause();}


    }
);