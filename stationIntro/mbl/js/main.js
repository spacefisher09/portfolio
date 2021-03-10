$(function(){
    var callURL = 'include/part.html ',
     callNav = $('#nav'),
    callFooter = $('#footer');
    /*nav*/
    callNav.load(callURL + '#nav',function(){
        var pgurl = window.location.href.substr(window.location.href
            .lastIndexOf("/") + 1).replace(".html",""),
            pg_title = $("h1 > .img-fluid"),
            pg_left =$(".js-pg_left"),pg_right =$(".js-pg_right");
        pgurl == "stage" ?
          ( pg_title.after('既有車站首頁'),
            pg_left.css("visibility","hidden"),
            pg_right.attr("href","stage1.html"))
        : pgurl == "stage1" ?
          (  pg_title.after('前言'),
             pg_left.attr("href","stage.html"),
             pg_right.attr("href","stage2.html") )
        : pgurl == "stage2" ?
           ( pg_title.after('停車場'),
             pg_left.attr("href","stage1.html"),
             pg_right.attr("href","stage3.html")  )
        : pgurl == "stage3" ?
           ( pg_title.after('車站出入口'),
             pg_left.attr("href","stage2.html"),
             pg_right.attr("href","stage4.html")  )
        : pgurl == "stage4" ?
           ( pg_title.after('車站出入口'),
             pg_left.attr("href","stage3.html"),
             pg_right.attr("href","stage5.html")  )
        : pgurl == "stage5" ?
           ( pg_title.after('車站內'),
             pg_left.attr("href","stage4.html"),
             pg_right.attr("href","stage6.html")  )
        : pgurl == "stage6" ?
           ( pg_title.after('車站月台'),
             pg_left.attr("href","stage5.html"),
             pg_right.attr("href","stage7.html")  )
        : pgurl == "stage7" ?
           ( pg_title.after('對向月台'),
             pg_left.attr("href","stage6.html"),
             pg_right.css("visibility","hidden")  )
        : null;
        
    });
 
    /*footer*/
    callFooter.load(callURL + 'footer');
   
    /*content*/
    var bubble_info1 = $("#scene1.bubble-info"),
        bubble_info2 = $("#scene2.bubble-info"),
        bubble_info3 = $("#scene3.bubble-info"),
        bubble_info4 = $("#scene4.bubble-info"),
        bubble_info5 = $("#scene5.bubble-info"),
        bubble_info6 = $("#scene6.bubble-info"),
        bubble_info7 = $("#scene7.bubble-info");

    bubble_info1.one("click",function(){
        $(this).removeClass("text-danger fa-minus-circle").addClass("fa-star");
        $(this).find("h2").html("");
        $(this).find("h2").siblings()
        .html("在人行道適當位置設置路緣斜坡，讓所有人方便使用。");
        $(this).next().attr("src","../images/bg-stage-2_1.png");
    });
    bubble_info2.one("click",function(){
        $(this).removeClass("text-danger fa-minus-circle").addClass("fa-star");
        $(this).find("h2").html("");
        $(this).find("h2").siblings()
        .html("在出入口前增設緩坡道，方便使用者輕鬆出入。");
        $(this).next().attr("src","../images/bg-stage-3_1.png");
    });
    bubble_info3.one("click",function(){
        $(this).removeClass("text-danger fa-minus-circle").addClass("fa-star");
        $(this).find("h2").html("");
        $(this).find("h2").siblings()
        .html("適當的售票口高度，提升購票的方便性。");
        $(this).next().attr("src","../images/bg-stage-4_1.png");
    });
    bubble_info4.one("click",function(){
        $(this).removeClass("text-danger fa-minus-circle").addClass("fa-star");
        $(this).find("h2").html("");
        $(this).find("h2").siblings()
        .html("適當的驗票口寬度，讓使用者進出順暢。");
        $(this).next().attr("src","../images/bg-stage-5_1.png");
    });
    bubble_info5.one("click",function(){
        $(this).removeClass("text-danger fa-minus-circle").addClass("fa-star");
        $(this).find("h2").html("");
        $(this).find("h2").siblings()
        .html("在合適的位置增設昇降設備，增加月台間通行的便利性。");
        $(this).next().attr("src","../images/bg-stage-6_1.png");
    });
    bubble_info6.one("click",function(){
        $(this).removeClass("text-danger fa-minus-circle").addClass("fa-star");
        $(this).find("h2").html("");
        $(this).find("h2").siblings()
        .html("縮小列車與月台間隙與高低差，或善用活動式緩坡，提供乘客安全的乘車環境。");
        $(this).next().attr("src","../images/bg-stage-7_1.png");
    });
});