$(document).ready(function() {
  
  //Burger menu
  $('.burger-wrap').click(function(){
    $(this).children().toggleClass('active');
    $('.nav ul').toggleClass('active');
    return false;
  });
  
  //Fancybox
  $('.fancybox').fancybox({
    padding: 0
  })
  
});





