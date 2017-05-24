$(document).ready(function(){
  $('.new-products-slider').slick({
    arrows: true,
    appendArrows: '.new-products',
    autoplay: true,
    prevArrow: '<button class="slider-arrow prev-arrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class="slider-arrow next-arrow"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>'
  });
});