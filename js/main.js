$(document).ready(function(){
  /* end change code */
  /*svg sprites cross-browser compatibility */
  svg4everybody({});
  /* end change code */
});
$(window).load(function() {
  $('img.responsify').responsify();
});
$(window).resize(function(){
  $('img.responsify').responsify();
})