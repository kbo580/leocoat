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

  //----- instaのスライド -----
  var instaSwiper=  new Swiper('.instaSwiper', {
    slidesPerView: '1',
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      }
    },
    grabCursor: true,
    centeredSlides: true,
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
    // autoplay: {
    //   delay: 4000,
    //   waitForTransition: true,
    //   disableOnInteraction: false,
    // },
    speed: 1000,
    effect: 'slide',
    fadeEffect: {
      crossFade: true
    },
  });

  //---- モーダル -----
  $(function(){
    var open = $('.modal-open');
    var close = $('.modal-close');
    var container = $('#modal-container');

    $(open).on('click', function(){
      var src = $(this).children('img').attr('src');
      var alt = $(this).children('img').attr('alt');
      $('#modalImage').attr('src', src).attr('alt', alt);
      $(container).addClass('active');
      return false;
    });
    
    $(close).on('click', function(){
      $(container).removeClass('active');
    });

    $(container).on('click', function(){
      $(container).removeClass('active');
    });
  });

  //----- タブメニュー-----
  $('.tab-title').on('click', function(){
    var index = $('.tab-title').index(this);
    $('.tab-title').removeClass('selected'); 
    $(this).addClass('selected');
    $('.tab-contents .tab-list').removeClass('show').eq(index).addClass('show');
  });
  
});