/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-01-22 20:35:26
 * @version $Id$
 */
// $(function(){
//   $("ul.aboutTable>li").each(function(){
//     var index=$(this).index();
//     $("ul.aboutTable>li").eq(0).addClass("table");
//     $(this).click(function() {
//         $(this).addClass("table").siblings().removeClass("table");
//         $("#container>div").eq(index).stop(true).show().siblings().stop(true).hide();

//     })
//   })
// })
// $(function(){
//   $("ul.ht-nav-box li ol li").each(function(){
//     var index=$(this).index();
//     $(this).click(function() { 
//         $("ul.aboutTable>li").eq(index).addClass("table").siblings().removeClass("table");   
//         $("#container>div").eq(index).stop(true).show().siblings().stop(true).hide();

//     })
//   })
// })

// $(function(){
//   $(".menu_list li").each(function(){
//     var index=$(this).index();
//     // $(".menu_list li").eq(0).addClass("table");
//     $(this).mouseover(function() {
//         // $(this).addClass("table").siblings().removeClass("table");
//         $(".produce_list li").eq(index).stop(false).show().siblings().stop(false).hide()
//     })
//   })
// })

$(document).ready(function () {
  $("#zc").click(function () {
      $("#zcfm").show();
  });
  $("#dl").click(function () {
      $("#zcfm").hide();
  });
});



$(function(){
  $(".tab-nav li").each(function(){
    var index=$(this).index();
    $(".tab-nav li").eq(0).addClass("table");
    $(this).click(function() {
        $(this).addClass("table").siblings().removeClass("table");
        $(".tab-main li").eq(index).stop(true).show().siblings().stop(true).hide();
    })
  })
})

$(function(){
  $(".rom-navA li").each(function(){
    var index=$(this).index();
    $(".rom-navA li").eq(0).addClass("table");
    $(this).hover(function() {
        $(this).addClass("table").siblings().removeClass("table");
        $(".rom-txtA li").eq(index).stop(true).show().siblings().stop(true).hide();
    })
  })
})
// setTimeout("function get()",2000);

$(function(){
  $(".rom-navB li").each(function(){
    var index=$(this).index();
    $(".rom-navB li").eq(0).addClass("table");
    $(this).hover(function() {
        $(this).addClass("table").siblings().removeClass("table");
        $(".rom-txtB li").eq(index).stop(true).show().siblings().stop(true).hide();
    })
  })
})

$(function(){
  $(".rom-navC li").each(function(){
    var index=$(this).index();
    $(".rom-navC li").eq(0).addClass("table");
    $(this).hover(function() {
        $(this).addClass("table").siblings().removeClass("table");
        $(".rom-txtC li").eq(index).stop(true).show().siblings().stop(true).hide();
    })
  })
})

$(function(){
  $(".news-box1-nav li").each(function(){
    var index=$(this).index();
    $(".news-box1-nav li").eq(0).addClass("table");
    $(this).hover(function() {
        $(this).addClass("table").siblings().removeClass("table");
        $(".news-content1 .news-txt").eq(index).stop(true).show().siblings().stop(true).hide();
    })
  })
})

$(function(){
  $(".news-box2-nav li").each(function(){
    var index=$(this).index();
    $(".news-box2-nav li").eq(0).addClass("table");
    $(this).hover(function() {
        $(this).addClass("table").siblings().removeClass("table");
        $(".news-content2 .news-txt").eq(index).stop(true).show().siblings().stop(true).hide();
    })
  })
})

$(function(){
  $(".news-box3-nav li").each(function(){
    var index=$(this).index();
    $(".news-box3-nav li").eq(0).addClass("table");
    $(this).hover(function() {
        $(this).addClass("table").siblings().removeClass("table");
        $(".news-content3 .news-txt").eq(index).stop(true).show().siblings().stop(true).hide();
    })
  })
}) 

$(function () {
  $("ul.aboutTable>li").each(function () {
    var index = $(this).index();
    $("ul.aboutTable>li").eq(1).addClass("table");
    $(this).click(function () {
      $(this).addClass("table").siblings().removeClass("table");
      $("#container>div").eq(index).stop(true).show().siblings().stop(true).hide();
    })
  })
})

