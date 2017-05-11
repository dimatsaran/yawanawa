$(document).ready(function(){
  /* end change code */
  /*svg sprites cross-browser compatibility */
  svg4everybody({});
  /* end change code */

  var $menuBlockScroll = $(".block-scroll");
  var $anchorBlockScroll = $(".block-scroll").offset().top;
  $(document).scroll(function() {
    if ($(this).scrollTop() > $anchorBlockScroll && $menuBlockScroll.hasClass("default")) {
      $menuBlockScroll.removeClass("default").addClass("fixed");
    } else if($(this).scrollTop() <= $anchorBlockScroll && $menuBlockScroll.hasClass("fixed")) {
      $menuBlockScroll.removeClass("fixed").addClass("default");
    }
  });

});
$(window).load(function() {
  $('img.responsify').responsify();
});
$(window).resize(function(){
  $('img.responsify').responsify();
});
