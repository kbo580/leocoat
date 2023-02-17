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


});