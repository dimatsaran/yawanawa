$(document).ready(function(){
    $('a.page-scroll[href^="#"]').click(function(){
        // скорость скролла
        var speed = 2000;
        var el = $(this).attr('href');
        var top = $(el).offset().top;
        $('html, body').animate({scrollTop: top}, speed);

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
});
// $(document).ready(function(){
   /* slow scroll several elements*/

    // var $page = $('html, body');
    // $('a.page-scroll[href*="#"]').click(function() {
    //     event.preventDefault();
    //     $page.animate({
    //         scrollTop: $($.attr(this, 'href')).offset().top
    //     }, 1500);
    //     return false;
    // });
    // $(document).ready(function() {
    //     $("a.scrollto").click(function () {
    //         var elementClick = $(this).attr("href")
    //         var destination = $(elementClick).offset().top;
    //         jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    //         return false;
    //     });
    // });
    // $('a.page-scroll').bind('click', function(event) {
    //     var $anchor = $(this);
    //
    //     $('html, body').stop().animate({
    //         scrollTop: $($anchor.attr('href')).offset().top
    //     }, 1500, 'easeInOutExpo');
    //     event.preventDefault();
    // });

    /* add and remote classes for scroll*/
    // var $menu = $(".block-scroll");
    // $(window).scroll(function(){
    //     if ( $(this).scrollTop() > 100vh && $menu.hasClass("default") ){
    //         $menu.removeClass("default").addClass("fixed");
    //     } else if($(this).scrollTop() <= 900 && $menu.hasClass("fixed")) {
    //         $menu.removeClass("fixed").addClass("default");
    //     }
    // });


    // var $menuConnect = $(".block-scroll-connect");
    // $(window).scroll(function(){
    //     if ( $(this).scrollTop() > 500 && $menuConnect.hasClass("default") ){
    //         $menuConnect.removeClass("default").addClass("fixed");
    //     } else if($(this).scrollTop() <= 900 && $menuConnect.hasClass("fixed")) {
    //         $menuConnect.removeClass("fixed").addClass("default");
    //     }
    // });

// });

// $(document).ready(function(){
//     $('a[href*=#]').bind("click", function(e){
//         var anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $(anchor.attr('href')).offset().top
//         }, 1000);
//         e.preventDefault();
//     });
//     return false;
// });

// $(document).ready(function() {
//     $('a[href^="#"]').click(function(){
//         var el = $(this).attr('href');
//         $('body').animate({
//             scrollTop: $(el).offset().top}, 2000);
//         return false;
//     });
// });
