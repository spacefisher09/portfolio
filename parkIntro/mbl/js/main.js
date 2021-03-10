$(function(){
    var callURL = 'include/part.html ',
     callNav = $('#nav'),
    callFooter = $('#footer');

    /*footer*/
    callFooter.load(callURL + 'footer',function(){
        var pgurl = window.location.href.substr(window.location.href
            .lastIndexOf("/") + 1).replace(".html",""),
            pg_title = $("h1"),
            pg_left =$(".js-pg_left"),pg_right =$(".js-pg_right");
            pgurl == "stage" ?
            ( pg_title.html('前言'),
              pg_left.hide(),
              pg_right.attr("href","stage1.html"))
          : pgurl == "stage1" ?
            (  pg_title.addClass('step1').html('入口前'),
               pg_left.attr("href","stage.html"),
               pg_right.attr("href","stage2.html") )
          : pgurl == "stage2" ?
             ( pg_title.addClass('step2').html('入口'),
               pg_left.attr("href","stage1.html"),
               pg_right.attr("href","stage3.html")  )
          : pgurl == "stage3" ?
             ( pg_title.addClass('step3').html('告示欄' ),
               pg_left.attr("href","stage2.html"),
               pg_right.attr("href","stage4.html")  )
          : pgurl == "stage4" ?
             ( pg_title.addClass('step4').html('通道' ),
               pg_left.attr("href","stage3.html"),
               pg_right.attr("href","stage5.html")  )
          : pgurl == "stage5" ?
             ( pg_title.addClass('step5').html('坡道' ),
               pg_left.attr("href","stage4.html"),
               pg_right.attr("href","stage6.html")  )
          : pgurl == "stage6" ?
             ( pg_title.addClass('step6').html('緩衝平台'),
               pg_left.attr("href","stage5.html"),
               pg_right.hide()  )
          : null;
    });
   

});