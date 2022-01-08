$(document).ready(function(){
  $("img#img-des").click(function(){
    $("p#wht-text0").toggle();
    $("img#img-des").toggle();
  });
  $("img#img-dev").click(function(){
    $("p#wht-text1").toggle();
    $("img#img-dev").toggle();
  });
  $("img#img-product").click(function(){
    $("p#wht-text2").toggle();
    $("img#img-product").toggle();
  });

});