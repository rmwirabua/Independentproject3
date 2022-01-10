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

  $("img#img-work1").hover(function(){

  });
  $("#submit").click(function(){
    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();
    var textInput = $("input#text").val();
    alert("Hi "+ nameInput + ", we have received your message. Thank you fro reaching out to us.").val();
  });


});
