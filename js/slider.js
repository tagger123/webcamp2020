$('.big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  autoplay:true
});

$('.brand-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='icon-left-arrow'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='icon-right-arrow'></i></button>",
    responsive: [{
            breakpoint: 460,
            settings: {
                slidesToShow: 2,
                slidesToScroll:1
            }
        }]
});

$('.vertical-slider-items').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows:true,
    autoplay:false,
    vertical:true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='icon-up-open'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='icon-down-open'></i></button>",
});

$('.main-slider').slick({
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='icon-left-arrow'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='icon-right-arrow'></i></button>",
})

$('.for-you-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='icon-left-arrow'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='icon-right-arrow'></i></button>",  
    responsive: [{
        breakpoint: 460,
        settings: {
            slidesToShow: 1.15,
            slidesToScroll:1,
            arrows:false
        }
    }]
});

$('.blog-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='icon-left-arrow'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='icon-right-arrow'></i></button>",
    responsive: [{
        breakpoint: 460,
        settings: {
            slidesToShow: 1,
            slidesToScroll:1,
            arrow:false
        }
    }]
});