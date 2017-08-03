$(function(){
    $(".pubmode").click(function(){
        var i = $(this).index();
        $(".pubmode").eq(i).children().css({"color":"#0094ff"});
        $(".pubmode").eq(i).siblings().children().css({"color":"#818181"});
        
        if(i == 0){
            location.href = "/";
        }else if(i == 1){
            location.href = "/discover";
        }else if(i == 2){
            location.href = "/order";
        }else{
            location.href = "/mine";
        }
    })
})