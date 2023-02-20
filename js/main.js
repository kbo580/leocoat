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

  $('.question').on('click', function () {
    var answer = $(this).next(".answer");
    answer.slideToggle(200);
    if($(this).children('.question__wrap').hasClass('active')){
      $(this).children('.question__wrap').removeClass('active');
    }
    else{
      $(this).children('.question__wrap').addClass('active');
    }
  });

  $(window).on('scroll', function(){
    var headerHight =$('.header__wrap').outerHeight(true);
    if($(this).scrollTop()>= headerHight){
      $('.site-logo__image').addClass('scroll');
      $('.header').addClass('scroll');
    }
    else{
      $('.site-logo__image').removeClass('scroll');
      $('.header').removeClass('scroll');
    }
  });



});