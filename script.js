$(document).ready(function(){
    $('.your-class').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        nextArrow: ('.next'),
        prevArrow: ('.prev'),
      });
  });


  $(document).ready(function(){
    $('.your-class-1').slick({
        slidesToShow: 2.5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: false,
        nextArrow: ('.next-1'),
        prevArrow: ('.prev-1'),
        // centerMode: true,
      });
  });