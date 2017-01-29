
//
//Bootstrap slider
//
// var $item = $('.carousel .item');
// var $wHeight = $(window).height();
// $item.eq(0).addClass('active');
// $item.height($wHeight);
// $item.addClass('full-screen');
//
// $('.carousel img').each(function() {
//   var $src = $(this).attr('src');
//   var $color = $(this).attr('data-color');
//   $(this).parent().css({
//     'background-image' : 'url(' + $src + ')',
//     'background-color' : $color
//   });
//   $(this).remove();
// });
//
// $(window).on('resize', function (){
//   $wHeight = $(window).height();
//   $item.height($wHeight);
// });
//
// $('.carousel').carousel({
//   interval: 6000,
//   pause: "false"
// });













// secondary nav

$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 30) {
            $('.second-nav').css('visibility','visible');
            $('.second-nav').fadeIn('slow');
        }
        else {
            $('.second-nav').fadeOut('fast');
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


$(window).scroll(function () {
   $('.slow').css({
      'top' : +($(this).scrollTop()/2)+"px"
   });

});




$(document).ready(function(){

$('.slider-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   fade: true,
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
   responsive: [
   {
     breakpoint: 1024,
     settings: {
       slidesToShow: 3,
       slidesToScroll: 3,
       infinite: true,
       dots: true
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
       slidesToShow: 1,
       slidesToScroll: 1
     }
   }
 ]
});
});
