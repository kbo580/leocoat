$(function(){

  $('#show').on('click', function(){
    $(this).toggleClass('active');
    $('.header__bottom').toggleClass('active');
    // $('body').toggleClass('active');
  });
  
  $('.nav-menu li a').on('click', function () {
    $('#show').removeClass('active');
    $('#nav').removeClass('active');
    // $('body').removeClass('active');
  });

  $('.doukonhin-btn').on('click', function () {
    $(this).next('.doukonhin').slideToggle();
    $(this).toggleClass("active");

    return false;
  });

  $('.qaa__wrap').on('click', function () {
    var answer = $(this).find(".answer__wrap");
    answer.slideToggle(200);
    if($(this).children('.question__wrap').hasClass('active')){
      $(this).children('.question__wrap').removeClass('active');
    }
    else{
      $(this).children('.question__wrap').addClass('active');
    }
  });



});