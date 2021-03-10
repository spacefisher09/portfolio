$(function () {
  /*判斷手機顯示*/
  var wdw_width = $(window).innerWidth(),mbl_index="mbl/stage.html";
  if(wdw_width < 1030){
      location.href = mbl_index;
  }

    /*-無障礙顯示-*/
    $("body").addClass('BG');
    $("#container").css({'display':'block'});
    $("#container_text").css({'display':'none'});
    /*-頁面重整-*/
    $('#refresh').click(function(){
        location.reload();
    });
    /* carousel plugin setting */
    $(".imageSliderExt .main-content").jCarouselLite({
                btnNext: ".imageSliderExt .btn_right",
                btnPrev: ".imageSliderExt .btn_left",
                visible: 1,
                btnGo: [".scene-0", ".scene-1",".scene-2",
                        ".scene-3",".scene-4",".scene-5",],
                speed: 600
            }); 
    
    /*-- 背景視差滾動 --*/
    var current = 0;
    var all_scene = $("#all_scene"),WIDTH = 1500;
    var scene = all_scene.find("img");

    all_scene.width(all_scene.find("img").length * WIDTH);
    
    /*-- 菜單按鈕效果 --*/
    function btnEffect(Bpos){  
        var B0=$('.scene-0');var B1=$('.scene-1');
        var B2=$('.scene-2');var B3=$('.scene-3');
        var B4=$('.scene-4');var B5=$('.scene-5');
        
        function changePic(anyBtn){
            anyBtn.find('.tb-sign').html('<img src="images/dw-stop.png" alt="項目圖示">');
            anyBtn.parent('li').siblings().find('.tb-sign').html('<img src="images/d-stop.png" alt="項目圖示">');};
	if (Bpos==0){changePic(B0);}
        else if (Bpos==1){changePic(B1);}
        else if (Bpos==2){changePic(B2);}
        else if (Bpos==3){changePic(B3);}
        else if (Bpos==4){changePic(B4);}
        else if (Bpos==5){changePic(B5);}
        	
  };
    
    $(".scene-0,.scene-1,.scene-2,.scene-3,.scene-4,.scene-5,.scene-6").click(function(e){
        current = $(this).val();
        /*菜單按鈕效果*/
        btnEffect(current);
        /*場景置中*/
        var gap = ($(window).innerWidth() / 2) - (scene.width() / 2);
        var move = -current * scene.width();
        all_scene.animate({'left': move + gap},1000);
    }); 

    $(".btn_right").click(function (e) {
        if (current < 5) {
            current++;
           /*導航欄位效果*/
            btnEffect(current);
           /*場景置中*/
            var gap = ($(window).innerWidth() / 2) - (scene.width() / 2);
            var move = -current * scene.width();
            all_scene.animate(
                {'left': move + gap},1000
            );
        } else {
            e.preventDefault();
        }
    });
    
    $(".btn_left").click(function (e) {
        if (current > 0) {
            current--;
           /*導航欄位效果*/
            btnEffect(current);
           /*場景置中*/
            var gap = ($(window).innerWidth() / 2) - (scene.width() / 2);
            var move = -current * scene.width();
            all_scene.animate(
                {'left': move + gap},1000
            );
        } else {
            e.preventDefault();
        }
    });   
    
    $(window).resize(function () {
      /*手機頁面轉換*/
      var wdw_width = $(window).innerWidth();
      if(wdw_width < 1030){
          location.href = mbl_index;
      }
      /*內容置中設定*/
        var gap = ($(window).innerWidth() / 2) - (scene.width() / 2);
        var pos = (-current * scene.width()) + gap;
        all_scene.css(
            {'position': 'absolute','left': pos,}
        );
    });
    $(window).resize();
    
    
    /* 問題情境效果 */
    var Sne1 = $("#scene1_ob");
    var Sne2 = $("#scene2_ob");
    var Sne3 = $("#scene3_ob");
    var Sne4 = $("#scene4_ob");
    var Sne5 = $("#scene5_ob");
    
    /*雲朵按鈕變換*/
    function btn_change(btnC){
        btnC.removeClass("cld-Q");
        btnC.removeClass("cld-Q1");
        btnC.removeClass("cld-Q2");
        btnC.addClass("cld-A");
        btnC.find("h2").remove();
    };
    
    /*場景1*/
    var S1Cg = Sne1.find(".girl");
    var S1CQ = Sne1.find(".cld-Q");
    
    S1Cg.delay(3000).fadeIn("slow",function(){
        S1Cg.animate({left:'0px',top:'140px'},1200);
    });
    S1CQ.one("click",function(){
        S1CQ.html("</br>在人行道適當位置設置路緣斜坡，讓所有人方便使用。");
        Sne1.find(".ground-bk").fadeIn("slow");
        S1Cg.animate({left:'30px'},800,function(){
            S1Cg.rotate({startDeg:0,endDeg:-7,animate:{top:'115px',left:'175px'}})
            .animate({left:'330px'},1000)
            .rotate({startDeg:0,endDeg:17,animate:{top:'135px',left:'450px'}})
            .animate({left:'510px'},1000);
        }); 
        btn_change(S1CQ);
    });
    
    /*場景2*/
    var S2Cg = Sne2.find(".girl");
    var S2CQ1 = Sne2.find(".cld-Q1");
    var S2CQ2 = Sne2.find(".cld-Q2");
    
    S2CQ1.one("click",function(){
        S2CQ1.html("</br>在出入口前增設緩坡道，方便使用者輕鬆出入。");
        Sne2.find(".ladr-bk").fadeIn("slow");
        S2Cg.animate({left:'200px'},1000,function(){
            S2Cg.rotate({startDeg:0,endDeg:-15,duration:2.0,animate:{top:'-140px',left:'490px'}})
            .animate({left:'700px'},1000);
        });
        btn_change(S2CQ1);
    });
    
    S2CQ2.one("click",function(){
        S2CQ2.html("</br>適當的售票口高度，提升購票的方便性。");
        Sne2.find(".window").animate({top:'-275px',height:'175px'},800);
        Sne2.find(".window span").animate({marginTop:'150px'},800);
        btn_change(S2CQ2);
    });
    
    /*場景3*/
    var S3Cg = Sne3.find(".girl");
    var S3CQ = Sne3.find(".cld-Q");
    var S3CP = Sne3.find(".chkP");
    
    S3CQ.one("click",function(){
        S3CQ.html("</br>適當的驗票口寬度，讓使用者進出順暢。");
        Sne3.find(".chkP_hid").remove();
        S3CP.css({'left':'558px'});
        S3CP.nextAll().animate({marginLeft:'158px'});
        Sne3.find("span").removeClass('emo_S');
        Sne3.find("span").addClass('emo_H');
        S3Cg.delay(1000).animate({left:'1050px'},5000);
        btn_change(S3CQ);
    });
    
    /*場景4*/
    var S4Cg = Sne4.find(".girl");
    var S4CQ = Sne4.find(".cld-Q");
    var S4ED = Sne4.find(".door span");
    
    S4CQ.one("click",function(){
        S4CQ.html("</br>在合適的位置增設昇降設備，增加月台間通行的便利性。");
        Sne4.find(".eltr,.door").animate(
            {opacity:'1.0'},1500);
        S4ED.animate({width:'0%'},1500,function(){
            S4ED.delay(5500).animate({width:'50%'});
        });
        S4Cg.delay(3000).animate(
            {top:'-58px',left:'170px'},2000);
        btn_change(S4CQ);
    });
    
    /*場景5*/
    var S5Co = Sne5.find(".old");
    var S5CQ = Sne5.find(".cld-Q");
    var S5Em = Sne5.find("span");
    
    S5CQ.one("click",function(){
        S5CQ.html("</br>縮小列車與月台間隙與高低差，或善用活動式緩坡，提供乘客安全的乘車環境。");
        S5Em.removeClass('emo_S');
        S5Em.addClass('emo_H').delay(2000);
        S5Em.animate({opacity:'0.0'});
        Sne5.find(".stair").fadeIn(1300,function(){
         S5Co.addClass("walk").animate({left:'470px'},3500); S5Co.rotate({startDeg:0,endDeg:50,duration:5.5,animate:{top:'0px',left:'200px'}});
        });
        btn_change(S5CQ);
    });

});


/*↓↓↓↓↓ 旋轉jquery插件 ↓↓↓↓↓*/
/*
jQuery-Rotate-Plugin v0.2 by anatol.at
http://jsfiddle.net/Anatol/T6kDR/
*/
$.fn.rotate=function(options) {
  var $this=$(this), prefixes, opts, wait4css=0;
  prefixes=['-Webkit-', '-Moz-', '-O-', '-ms-', ''];
  opts=$.extend({
    startDeg: false,
    endDeg: 360,
    duration: 1,
    count: 1,
    easing: 'linear',
    animate: {},
    forceJS: false
  }, options);

  function supports(prop) {
    var can=false, style=document.createElement('div').style;
    $.each(prefixes, function(i, prefix) {
      if (style[prefix.replace(/\-/g, '')+prop]==='') {
        can=true;
      }
    });
    return can;
  }

  function prefixed(prop, value) {
    var css={};
    if (!supports.transform) {
      return css;
    }
    $.each(prefixes, function(i, prefix) {
      css[prefix.toLowerCase()+prop]=value || '';
    });
    return css;
  }

  function generateFilter(deg) {
    var rot, cos, sin, matrix;
    if (supports.transform) {
      return '';
    }
    rot=deg>=0 ? Math.PI*deg/180 : Math.PI*(360+deg)/180;
    cos=Math.cos(rot);
    sin=Math.sin(rot);
    matrix='M11='+cos+',M12='+(-sin)+',M21='+sin+',M22='+cos+',SizingMethod="auto expand"';
    return 'progid:DXImageTransform.Microsoft.Matrix('+matrix+')';
  }

  supports.transform=supports('Transform');
  supports.transition=supports('Transition');

  opts.endDeg*=opts.count;
  opts.duration*=opts.count;

  if (supports.transition && !opts.forceJS) { // CSS-Transition
    if ((/Firefox/).test(navigator.userAgent)) {
      wait4css=(!options||!options.animate)&&(opts.startDeg===false||opts.startDeg>=0)?0:25;
    }
    $this.queue(function(next) {
      if (opts.startDeg!==false) {
        $this.css(prefixed('transform', 'rotate('+opts.startDeg+'deg)'));
      }
      setTimeout(function() {
        $this
          .css(prefixed('transition', 'all '+opts.duration+'s '+opts.easing))
          .css(prefixed('transform', 'rotate('+opts.endDeg+'deg)'))
          .css(opts.animate);
      }, wait4css);

      setTimeout(function() {
        $this.css(prefixed('transition'));
        if (!opts.persist) {
          $this.css(prefixed('transform'));
        }
        next();
      }, (opts.duration*1000)-wait4css);
    });

  } else { // JavaScript-Animation + filter
    if (opts.startDeg===false) {
      opts.startDeg=$this.data('rotated') || 0;
    }
    opts.animate.perc=100;

    $this.animate(opts.animate, {
      duration: opts.duration*1000,
      easing: $.easing[opts.easing] ? opts.easing : '',
      step: function(perc, fx) {
        var deg;
        if (fx.prop==='perc') {
          deg=opts.startDeg+(opts.endDeg-opts.startDeg)*perc/100;
          $this
            .css(prefixed('transform', 'rotate('+deg+'deg)'))
            .css('filter', generateFilter(deg));
        }
      },
      complete: function() {
        if (opts.persist) {
          while (opts.endDeg>=360) {
            opts.endDeg-=360;
          }
        } else {
          opts.endDeg=0;
          $this.css(prefixed('transform'));
        }
        $this.css('perc', 0).data('rotated', opts.endDeg);
      }
    });
  }

  return $this;
};