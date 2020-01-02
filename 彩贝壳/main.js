// // 页面渲染完之后 加载
 $(function(){
 
    $(".left").click(function(){
        // 替换主图
        $("#mainImg").attr("src","./oraCardBig.png")
        //小图边框
        $(".right img").removeClass("selected");
        $(".left img").addClass("selected");
        //图标切换
        $(".right ").removeClass("icon");
        $(".left ").addClass("icon");
        //priv 内容替换
        $(".cardShow .priv span").text("会员权益");
        $(".cardShow .priv a").text("查看398项会员特权 >");
        //decr内容替换
        $(".decr").text("-全国通用，终身有效-");
    });

    $(".right").click(function(){
        // 替换主图
        $("#mainImg").attr("src","./blueCardBig.png");
        //小图边框
        $(".left img").removeClass("selected");
        $(".right img").addClass("selected");
        //图标切换       
        $(".left ").removeClass("icon");
        $(".right ").addClass("icon");
        //priv 内容替换
        $(".cardShow .priv span").text("持卡人权益");
        $(".cardShow .priv a").text("查看详情 >");
        $(".decr").text("-亲子酒店，一卡通用-");
    })



    
 });



