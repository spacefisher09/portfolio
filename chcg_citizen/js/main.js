$(function () {
    /*首頁腳色選取*/
    $(".cha_area").find('a').click(function(){
            $(this).addClass('clicked');     
            $(this).parent().siblings().children().removeClass('clicked');
        }); 
    /*無障礙調整*/
    $(':radio , :checkbox').css({'display':'none'});
    /*手機按鈕menu*/
     //dropdown menu
        var mblToggle = $('#menu-fold'),
            mblmenuTop = $('#dropdown1'),
            mblmenuBtm = $('#dropdown2');
    mblToggle.on('click',function(){
        var getMenuBtm = document.getElementById('dropdown2');
        if(getMenuBtm === null){
            mblmenuTop.slideToggle('fast');
        }else{
            if (mblToggle.attr('value') == 1) {
                mblToggle.attr('value', 0);
                mblmenuBtm.slideUp(100, 'linear', function () {
                    mblmenuTop.slideUp(60, 'linear');
                });
            } else {
                mblToggle.attr('value', 1);
                mblmenuTop.slideDown(60, 'linear', function () {
                    mblmenuBtm.slideDown(100, 'linear');
                });
            }
        }
    });
});