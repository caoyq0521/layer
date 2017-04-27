$(function(){
    // 横竖屏响应
    var cWidth=document.documentElement.clientWidth;
    var cHeight=document.documentElement.clientHeight;
    var cp=document.getElementById("company-p");
    var mt=document.getElementById("maintenance");
    var vi=document.getElementById("vehicle-i");
    var ea=document.getElementById("emergency-a");
    var co=document.getElementById("contact");
    var sw=document.getElementsByClassName("swiper-container")[0];
    var vb=document.getElementsByClassName("vehicles-bot-mes")[0];
    if(cWidth<=750){
        cp.style.height=cHeight+'px';
        mt.style.height=cHeight+'px';
        vi.style.height=cHeight+'px';
        ea.style.height=cHeight+'px';
        co.style.height=cHeight+'px';
        vb.style.height=cHeight+'px';
        sw.style.height='15.6rem';
        $(window).resize(function(){
            var cw=document.documentElement.clientWidth;
            var ch=document.documentElement.clientHeight;
            if(cw<=750){
                if(cw>ch){
                    cp.style.height=ch+'px';
                    mt.style.height=ch+'px';
                    vi.style.height=ch+'px';
                    ea.style.height=ch+'px';
                    co.style.height=ch+'px';
                    vb.style.height=ch+'px';
                    sw.style.height=(ch-50)+'px';
                }else{
                    cp.style.height = ch + 'px';
                    mt.style.height = ch + 'px';
                    vi.style.height = ch + 'px';
                    ea.style.height = ch + 'px';
                    co.style.height = ch + 'px';
                    vb.style.height = ch + 'px';
                    sw.style.height = '15.6rem';
                }
            }
        });
    }
    $(".navigation-menu").click(function(){
        $(".navigation-menu-mes").css("display","block");
        $(".mask").css("display","block");
    });
    $(".navigation-menu-mes>li").click(function(){
        $(".navigation-menu-mes").css("display","none");
    });
    $('.mask').click(function(){
        $(".navigation-menu-mes").css("display","none");
        $(this).css("display","none");
    })
    function move(){
        $(".maintenance-bot-main-mes ul").animate({marginLeft:"-372px"},1000,function(){
            $(".maintenance-bot-main-mes ul>li").eq(0).appendTo($(".maintenance-bot-main-mes ul"));
            $(".maintenance-bot-main-mes ul").css("marginLeft","0");
        })
    }
    var t=setInterval(move,6000);
    $(".right-btn").click(function(){
        move();
    });
    $(".left-btn").click(function(){
        $(".maintenance-bot-main-mes ul").css("marginLeft","-372px");
        $(".maintenance-bot-main-mes ul>li").eq(4).prependTo($(".maintenance-bot-main-mes ul"));
        $(".maintenance-bot-main-mes ul").animate({marginLeft:"0px"},1000);
    });
    $(".maintenance-bot-main-mes").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,8000);
    });
    $(".left-btn").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,8000);
    });
    $(".right-btn").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,3000);
    });
    $(".return-img").click(function(){
        var sc=$(window).scrollTop();
        $('body,html').animate({scrollTop:0},1000);
    })
});