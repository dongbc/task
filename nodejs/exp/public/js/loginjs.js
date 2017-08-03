$(function(){
    /*检测屏幕的宽高*/
    var w_h = $(window).height();
    var w_w = $(window).width();
    if(w_w <= 768 && w_w >= 320){
        $("#elm").css({"width":w_w,"height":w_h});
        $(".btn").css({"width":w_w-16 + "px" });
        $("#footer").css({"margin-top": w_h - 430 + "px"});
    }else if(w_w <320){
        $(".btn").css({"width":304 + "px" });
    }else if(w_w >768){
        $(".btn").css({"width":752 + "px" });
    }
    /*屏幕改变时 自动跟随变化宽高*/
    $(window).resize(function(){
        w_h = $(window).height();
        w_w = $(window).width();
        if(w_w <= 768 && w_w >= 320){
            $("#elm").css({"width":w_w,"height":w_h});
            $(".btn").css({"width":w_w-16 + "px" });
        }
    })
    
    /*手机号码空格*/
    $(".tel").keyup(function(e){
        var phoneNum = this.value.trim();
        //如果是删除按键，则什么都不做
        if (e.keyCode === 8) {
            this.value = phoneNum;
            return;
        }

        var len = phoneNum.length;
        if (len === 3 || len === 8) {
            phoneNum += ' ';
            this.value = phoneNum;
        }
    })
    /*检测输入框是否有值 有值则出现清除 X 按钮 */
    $("input[type=text]").on("input propertychange",function(){
        if($(".tel").val().length === 13){
            if($(".get").html() == "重新获取" || $(".get").html() == "获取验证码"){
                $(".get").css({"background":"#2194fe"});
                $(".get").attr("disabled",false);
            }
        }else{
            $(".get").css({"background":"#d5d4d2"});
        }
        if($(this).val()){
            $(this).siblings("div").css({"display":"block"});
        }else{
            $(this).siblings("div").css({"display":"none"});
        }
    })
    
    /*输入框获得焦点 去除另一个输入框的 清除标识*/
    $("input[type=text]").focus(function(){
        $(this).parent().siblings().children("div").css({"display":"none"});
        if($(this).val()){
            $(this).siblings("div").css({"display":"block"});
        }
    })
    /*点击 清除按钮  清楚输入框中的内容*/
    $(".pdel").click(function(){
        $(".tel").val("").focus();
        $(".pdel").css({"display":"none"});
        $(".get").css({"background":"#d5d4d2"});
        $(".get").attr("disabled","disabled");
    })
    $(".vdel").click(function(){
        $(".vcode").val("").focus();
        $(".vdel").css({"display":"none"});
    })
    /*去除手机号中的空格*/
    function Trim(str,is_global){
        var result;
        result = str.replace(/(^\s+)|(\s+$)/g,"");
        if(is_global.toLowerCase()=="g")
        {
            result = result.replace(/\s/g,"");
        }
        return result;
    }
    /*获取验证码 点击判断 手机号是否符合要求 符合发送验证码,30s超时则显示出语音验证 不符报错*/
    $(".get").click(function(){
        var tel = $(".tel").val();
        tel = Trim(tel,"g");
        var preg = /1[3|4|5|7|8][0-9]{9}/;
        function countdown(){
            var i = 30;
            var set = setInterval(function(){
                i--;
                $(".get").html("已发送("+i+"s)");
                if(i < 0){
                    $(".get").css({"background":"#2194fe"}).attr("disabled",false).html("重新获取");
                    $(".notice").css({"display":"block"});
                    clearInterval(set);
                }
            },1000);
        }
        if(preg.test(tel)){
            $(".get").css({"background":"#d5d4d2"}).attr("disabled","disabled").html("已发送(30s)");
            $(".err p").html("");
            $(".btn").attr("disabled",false);
            $(".vcode").focus();
            countdown();
        }else{
            $(".err p").html("请检查手机号码格式是否有误");
            $(".btn").attr("disabled",true);
            var e_w = $(".err").width();
            $(".err").css({"width":e_w + "px","marginLeft": - e_w/2 + "px"});
            $(".err").css({"display":"block"}).stop(true).animate({"bottom": 70 + 'px'},30);
            setTimeout(function(){
                $(".err").fadeOut();
                $(".err").animate({"bottom":60 + "px"});
            },3000)
        }
    })
    
    /*登录验证 手机号错误报错 正确就去数据库查找对比 没有就注册增加登录 存在就直接登录*/
    $(".btn").click(function(){
        var tel = $(".tel").val();
        tel = parseInt(Trim(tel,"g"));
        $.post('/login',{phone:tel},function(res){
            console.log(res);
            if(typeof(res)){
                location.href = "/mineLogin";
            }
        })
    })
    
})