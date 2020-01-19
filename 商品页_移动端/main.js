$(function(){
    //顶栏
    var seleTop = function (e) {
        $(".topbar .menu a").each(function () {
            $(this).removeClass("actived");
          });
      }
 
    $(".menu-good").click(function(){
        seleTop()
        $(this).addClass("actived");
    });

    $(".menu-comment").click(function(){
        seleTop()
        $(this).addClass("actived");
    });

    $(".menu-detail").click(function(){
        seleTop()
        $(this).addClass("actived");
    });

    $(".menu-tuijian").click(function(){
        seleTop()
        $(this).addClass("actived");
    });

    //顶栏滚动

    

    // $(window).scroll(function(){
    //     var scoY = $(window).scrollTop();
    //     if (scoY >=933){
    //     }
    // });
    

    //浮窗
    $(".productDetail .service").click(function () {
        $(".servicePage").css("display","block");
        
        $(".servicePage .btn").click(function(){
            $(".servicePage").css("display","none");
        });
    })

    $(".productDetail .select").click(function () {
        $(".selectPage").css("display","block");
        
        $(".selectPage .btns").click(function(){
            $(".selectPage").css("display","none");
        });
    })

    $(".productDetail .parameter").click(function () {
        $(".parameterPage").css("display","block");
        
        $(".parameterPage .btn").click(function(){
            $(".parameterPage").css("display","none");
        });
    })

    //加购物车


 });



