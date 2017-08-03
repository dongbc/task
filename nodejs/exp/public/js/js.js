$(function(){
    $(".sub").click(function(){
        var val = $(".inp").val();
        $.post("/",{"userName": val},function(res){
            if(res == 'yes'){
                alert("登陆成功！");
            }else{
                alert("用户名错误！");
            }
        })
    })
})