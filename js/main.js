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

  var instaSwiper=  new Swiper('.instaSwiper', {
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    loop: true,
    loopAdditionalSlides: 1,
    autoplay: {
      delay: 4000,
      waitForTransition: true,
      disableOnInteraction: false,
    },
    speed: 1000,
    effect: 'slide',
    fadeEffect: {
      crossFade: true
    },
  });

  $('.tab-title').on('click', function(){
    var index = $('.tab-title').index(this);
    $('.tab-title').removeClass('selected'); 
    $(this).addClass('selected');
    $('.tab-contents .tab-list').removeClass('show').eq(index).addClass('show');
  });
  



});
// ではお送りします
// 「納品の完了」と今回は評価をお願いいたします！