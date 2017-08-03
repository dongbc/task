$(function(){
    /*检测屏幕的宽高*/
    var w_h = $(window).height();
    var w_w = $(window).width();
    if(w_w <= 768 && w_w >= 320){
        $("#elm").css({"width":w_w,"height":w_h});
        $("#toper").css({"width":w_w});
        $("#pubbtm").css({"width":w_w});
    }
    /*屏幕改变时 自动跟随变化宽高*/
    $(window).resize(function(){
        w_h = $(window).height();
        w_w = $(window).width();
        if(w_w <= 768 && w_w >= 320){
            $("#elm").css({"width":w_w,"height":w_h});
            $("#toper").css({"width":w_w});
            $("#pubbtm").css({"width":w_w});
        }
        
        var chp = $(".cheep").height();
        var at = $(".at").height();
        var ats = $(".ats").height();
        
        $("#adv").css({"height": chp+at+ats+40 + "px"});
    })
    
    /*中间图片高度变化导致的高度变化*/
    $(window).load(function(){
        var chp = $(".cheep").height();
        var at = $(".at").height();
        var ats = $(".ats").height();
        
        $("#adv").css({"height": chp+at+ats+40 + "px"});
    })
    
    /*swiper*/
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        autoplayDisableOnInteraction: false,
    });
    
    /*pubbtm点击切换页面*/
})