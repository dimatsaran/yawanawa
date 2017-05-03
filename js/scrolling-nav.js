$(document).ready(function(){
    // $('a.page-scroll[href^="#"]').click(function(){
    //     var speed = 2000;
    //     var el = $(this).attr('href');
    //     var top = $(el).offset().top;
    //     $('html, body').animate({scrollTop: top}, speed);
    //     return false;
    // });
    /* add and remote classes for scroll*/
    // var $menu = $(".block-scroll");
    // $(window).scroll(function(){
    //     if ( $(this).scrollTop() > 900 && $menu.hasClass("default") ){
    //         $menu.removeClass("default").addClass("fixed");
    //     } else if($(this).scrollTop() <= 900 && $menu.hasClass("fixed")) {
    //         $menu.removeClass("fixed").addClass("default");
    //     }
    // });
//   var $page = $('html, body');
// $('a.page-scroll[href*="#"]').click(function() {
//     event.preventDefault();
//     $page.animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 1500);
//     return false;
// });

  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});
});

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
//     $('html, body').stop().animate({
//         scrollTop: $($anchor.attr('href')).offset().top
//     }, 1500, 'easeInOutExpo');
//     event.preventDefault();
// });
// $(document).ready(function() {
//     $("a.page-scroll").click(function () {
//         var elementClick = $(this).attr("href")
//         var destination = $(elementClick).offset().top;
//         jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
//         return false;
//     });
// });