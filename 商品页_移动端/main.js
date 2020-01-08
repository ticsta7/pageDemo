// $(function(){
//     $(".productTitle").on("swipe",function(){
//         alert("滑动!");
//     });
// }); 


$(document).on("pagecreate","#pageone",function(){
       
    $(".productTitle").on("swipe",function(){
        alert("滑动");
      }); 

  });