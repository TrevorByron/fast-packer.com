

// secondary nav
$(document).ready(function(){
$(function(){
    $(document).on('scroll',function() {
        if ($(this).scrollTop() > ($(window).height())) {
            $('.second-nav').css('visibility','visible');
            $('.second-nav').slideDown('normal');
        }
        else {
            $('.second-nav').slideUp('normal');
        }
    });
});
$(function(){
    $(document).on('touch',function() {
        if ($(this).scrollTop() > ($(window).height())) {
            $('.second-nav').css('visibility','visible');
            $('.second-nav').slideDown('normal');
        }
        else {
            $('.second-nav').slideUp('normal');
        }
    });
});





// ScrollReveal


window.sr = ScrollReveal();
sr.reveal('.foo', {duration: 1000, scale: 1, origin: 'top',distance: '10px',});
sr.reveal('.bar', {duration: 3500});


// slick slider
$(document).ready(function(){
  $('.photo-slider').slick({autoplay: true, dots: true, autoplaySpeed: 8000, mobileFirst: true, fade: true,
  cssEase: 'linear', speed: 500});

});


// Parallax

if( $(window).width() > 900) {
  $(window).scroll(function () {
    $('.slow').css({
      'top' : +($(this).scrollTop()/3.5)+"px"
    });
  });
}

// height of hero


    $('#welcome, #featured-route, #featured-review, #featured-story ').height($(window).height());

});

// Slides

$(document).ready(function(){

$('.slider-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,

   asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
   autoplay:false,
   slidesToShow: 3,
   slidesToScroll: 1,
   lazyLoad: 'ondemand',
   asNavFor: '.slider-for',
   dots: false,
   arrows: false,
   centerMode: true,
   focusOnSelect: true,
   slidesToShow: 4,
   slidesToScroll: 4,
   responsive: [
   {
     breakpoint: 1024,
     settings: {
       slidesToShow: 4,
       slidesToScroll: 4,
       infinite: true,
       dots: false
     }
   },
   {
     breakpoint: 600,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 2
     }
   },
   {
     breakpoint: 480,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 2
     }
   }
 ]
});
});
