$(document).ready(function(){
   /* slow scroll several elements*/

    var $page = $('html, body');
    $('a.page-scroll[href*="#"]').click(function() {
        event.preventDefault();
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1500);
        return false;
    });

    /* add and remote classes for scroll*/
    var $menu = $(".block-scroll");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 900 && $menu.hasClass("default") ){
            $menu.removeClass("default").addClass("fixed");
        } else if($(this).scrollTop() <= 900 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
        }
    });

    var $menuConnect = $(".block-scroll-connect");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 500 && $menuConnect.hasClass("default") ){
            $menuConnect.removeClass("default").addClass("fixed");
        } else if($(this).scrollTop() <= 900 && $menuConnect.hasClass("fixed")) {
            $menuConnect.removeClass("fixed").addClass("default");
        }
    });

});

