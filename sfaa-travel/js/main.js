$(function(){

    //global variables
    var tabBtn = $('.js-tabBtn');
     //-------主要區塊功能      
     tabBtn.click(function (e) {
        var tabCntnt = $(this).attr('href');
        $(this).addClass('active');
        $(this).siblings('.js-tabBtn').removeClass('active');
        $('form')[0].reset();
        e.preventDefault();
      });
      //無障礙--摺疊頁籤
      tabBtn.keydown(function (e) {
        if(e.keyCode == 9){
          var tabCntnt = $(this).attr('href');
          //tab 區塊
          $(this).addClass('active');
          $(this).siblings('.js-tabBtn').removeClass('active');
          $('form')[0].reset();
        } 
      });

      /*checkbox 條件反選*/
      var chk_val_all = $('.js-chk-all'),
          nor_chk = $('.form-check:not(.js-chk-all)');
        chk_val_all.click(function(){
          $(this).siblings().find('input').prop('checked',false);
        });
        nor_chk.click(function(){
          $(this).siblings('.js-chk-all').find('input').prop('checked',false);
        });


      /* 內頁內容折疊*/
      var text_fold = $('#js-text-fold'),
         card_text = $('.card-body + .d-md-flex');
      text_fold.click(function(){
        $(this).toggleClass('fa-navicon').toggleClass('fa-close');
          card_text.toggleClass('d-none');
      });

      /*圖片scroll.縮放*/
      var img_row = $('.js-img-scale'),
          img_prev = $('.js-img-prev'),
          img_next = $('.js-img-next');
      img_row.each(function(){
        $(this).width($(this).find('.img-item').length*156);
        $(this).find('.img-item').click(function(){
          $(this).siblings('.btn-arrow').toggleClass('d-none');
          $(this).toggleClass('large');
        });
      });
      img_prev.click(function(){
        if($('.img-item.large').eq(0).prev().is("div")){
          $('.img-item.large').eq(0).prev().addClass("large"); 
          $('.img-item.large').eq(1).removeClass('large');
        }
      });
      img_next.click(function(){
        if($('.img-item.large').eq(0).next().is("div")){
          $('.img-item.large').eq(0).next().addClass("large"); 
          $('.img-item.large').eq(0).removeClass('large');
        }
      });

    

    /*slick -- banner plugin*/
    $('#js-banner').slick({
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      })

});