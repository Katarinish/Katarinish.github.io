$(document).ready(function(){

  $('.popup-btn').on('click', function(event) {
    event.preventDefault();
    $('.popup').fadeIn();
  });

  $('.popup-close').on('click', function(event) {
    event.preventDefault();
    $('.popup').fadeOut();
  });

  $('.features-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
   
       {
         breakpoint: 992,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           prevArrow:'<button class="l-arrow arrow"></button>',
           nextArrow:'<button class="r-arrow arrow"></button>',
         }
       },

       {
         breakpoint: 767,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           prevArrow:'<button class="l-arrow arrow"></button>',
           nextArrow:'<button class="r-arrow arrow"></button>',
         }
       }
       // You can unslick at a given breakpoint now by adding:
       // settings: "unslick"
       // instead of a settings object
     ]

  });
});