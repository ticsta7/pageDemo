$(function(){

    var test = 1;

    var imgOrder = $(".imgOrder span").text();

    $(".recommend .right").on("click",function(){
        $(".productImg ul").animate({left:"+=-600px"});
      }); 

      $(".recommend .left").on("click",function(){
        $(".productImg ul").animate({left:"+=600px"});
      }); 
      
}); 


// $(document).on("pageload","#pageone",function(){
    
//     // var imgOrder = $(".imgOrder span").text();

//     $(".recommend .right").on("click",function(){
//         $(".productImg ul").animate({left:"+=-600px"});
//       }); 

//       $(".recommend .left").on("click",function(){
//         $(".productImg ul").animate({left:"+=600px"});
//       }); 
//   });
