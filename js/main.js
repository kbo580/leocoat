jQuery(function($){


$(function(){
  
  //----- バーガーメニュー -----
  $('#show').on('click', function(){
    $(this).toggleClass('active');
    $('.header__bottom').toggleClass('active');
  });
  
  $('.nav-menu li a').on('click', function () {
    $('#show').removeClass('active');
    $('#nav').removeClass('active');
  });

  //----- 同梱品のトグル -----
  $('.doukonhin-btn').on('click', function () {
    $(this).next('.doukonhin').slideToggle();
    $(this).toggleClass("active");

    return false;
  });

  //----- よくある質問のトグル -----
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

  //----- headerのfadein -----
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

  //----- タブメニュー-----
  $('.tab-title').on('click', function(){
    var index = $('.tab-title').index(this);
    $('.tab-title').removeClass('selected'); 
    $(this).addClass('selected');
    $('.tab-contents .tab-list').removeClass('show').eq(index).addClass('show');
  });

  //--------------- 下からフェードイン ----------------
  function fadeUpAnime(){
    $('.fadeUpTrigger').each(function(){ 
      var elemPos = $(this).offset().top; 
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUpAnime');
      }
    });
  }
  
  $(window).on('load scroll', function (){
    fadeUpAnime();
  });

  //----- 誕生物語のaccordion-----
  $(".history-accordion").hide();
  $('#accordion').on('click', function(){
    $(".history-accordion").slideToggle(600);
  });
  
  
});










});