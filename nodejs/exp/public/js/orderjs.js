$(function(){
    /*检测屏幕的宽高*/
    var w_h = $(window).height();
    var w_w = $(window).width();
    if(w_w <= 768 && w_w >= 320){
        $("#elm").css({"width":w_w,"height":w_h});
        $("#toper").css({"width":w_w});
    }
    /*屏幕改变时 自动跟随变化宽高*/
    $(window).resize(function(){
        w_h = $(window).height();
        w_w = $(window).width();
        if(w_w <= 768 && w_w >= 320){
            $("#elm").css({"width":w_w,"height":w_h});
            $("#toper").css({"width":w_w});
        }
    })
})