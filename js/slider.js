//main

$(document).ready(function(){
  $('.slider-items').slick({
    slidesToShow:1,
    sldesToScroll:1,
    arrows:false,
    dots:false,
    autoplay:true
  });
});

$(document).ready(function(){
  $('.blog-slider').slick({
    slidesToShow:3,
    sldesToScroll:1,
    arrows:true,
    dots:false,
    autoplay:true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }        
    }
    ]
  });
});

$(document).ready(function(){
  $('.brand-slider').slick({
    slidesToShow:6,
    sldesToScroll:1,
    arrows:true,
    dots:false,
    autoplay:true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }        
    }
    ]
  });
});

$(document).ready(function(){
  $('.slider-for-you').slick({
    slidesToShow:4,
    sldesToScroll:1,
    vertical:false,
    arrows:true,
    autoplay:true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }        
    }
    ]
  });
});
//product

$(document).ready(function(){
    $('.product-slider').slick({
      slidesToShow:1,
      sldesToScroll:1,
      arrows:true,
      dots:false,
      autoplay:true,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='icon-left-arrow'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='icon-right-arrow'></i></button>",
      responsive: [
        {
          breakpoint: 480,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }        
      }
      ]
    });
  });


$(document).ready(function(){
    $('.vertical-slider').slick({
      slidesToShow:6,
      sldesToScroll:1,
      arrows:true,
      dots:false,
      vertical:true,
      autoplay:false,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='icon-up-open'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='icon-down-open'></i></button>"
    });
});

$(document).ready(function(){
  $('.slider-accessories').slick({
    slidesToShow:2,
    sldesToScroll:1,
    arrows:true,
    dots:false,
    vertical:false,
    autoplay:false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='icon-left-arrow'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='icon-right-arrow'></i></button>",
    responsive: [
      {
        breakpoint: 480,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false
      }        
    }
    ]
  });
});