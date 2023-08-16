
 
  $('#immuno-btn').click(function(){
    $('#immuno-text').toggleClass('show none');
  });
  $('#active-btn').click(function(){
    $('#active-text').toggleClass('show none');
  });
  $('#detox-btn').click(function(){
    $('#detox-text').toggleClass('show none');
  });

  $(window).on('load', function () {
    $('.preloader').fadeOut().end().delay(400).fadeOut('slow');
  });
 
  $(function () {
    $('.header__nav').fadeIn(1000);
    $('.title-animation').fadeIn(1200);
    $('#active-buttle').fadeIn(1000);
    $('#immuno-buttle').fadeIn(1000);
    $('#mint').fadeIn(1000);
})

