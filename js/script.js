$(document).ready(function() {
  $('#toggle-btn').click(function() {
    $('.nav-links').slideToggle(2000);
  });


  $(window).scroll(function() {

    let scroll = $(window).scrollTop();
    if(scroll>=70) {
      $('#nav').addClass("new-nav");
    }
    else {
      $('#nav').removeClass("new-nav");
    }
  });




  $('nav a').click(function(link){
    link.preventDefault();

    let target = $(this).attribute('href');

    $('html, body').animate({
      scrollTop : $(target).offset().top
    },"slow");
  });



  // accordion
  $( "#accordion" ).accordion({
    animate:1000
  });



  // progress-bars
  $( "#p-bar-1" ).progressbar({
    value: 72
  });
  $( "#p-bar-2" ).progressbar({
    value: 12
  });
  $( "#p-bar-3" ).progressbar({
    value: 66
  });
  $( "#p-bar-4" ).progressbar({
    value: 25
  });





});
