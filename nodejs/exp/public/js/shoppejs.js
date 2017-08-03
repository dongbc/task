$(function(){
    /*检测屏幕的宽高*/
    var w_h = $(window).height();
    var w_w = $(window).width();
    var i_w = $(window).innerWidth();
    
//    $(".category ul").css({"width":i_w});
    
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
    
    /*横拉条*/
    $(".category").mousedown(function(e){
        var status = 0;
        var x = e.pageX;
        $(".category ul").mousemove(function(g){
            if(status == 0){
                $(this).css({"left": g.pageX - e.pageX +64});
            }
        })
        $(".category ul").mouseup(function(g){
            status = 1;
        })
        $("li").click(function(){
            if(status = 1){
                $(this).css({"color":"blue"});
                status = 2;
            }
        })
        $(".category ul").mouseleave(function(){
            if(status == 1){
                $(this).css({"left": 64});
            }
        })
    })
    
    /*综合排序 筛选*/
    var to = 0;
    $(".sel").toggle(function(){
        if(to == 0){
            to = 1;
            $("#mask").fadeIn();
            $(".cover").slideDown();
        }
    },function(){
        if(to == 1){
            to = 0;
            $("#mask").fadeOut();
            $(".cover").slideUp();
        }
    })
    
    /*活动*/
    
})