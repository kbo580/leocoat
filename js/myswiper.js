jQuery(function($){


  $(function(){
    
    
  });
  
  
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
  // loopAdditionalSlides: 1,
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