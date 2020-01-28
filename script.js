// $(document).ready(function(){
//   $('.your-class').slick({
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         autoplay: false,
//         autoplaySpeed: 2000,
//         infinite: false,
//         nextArrow: ('.next'),
//         prevArrow: ('.prev'),
//       });
//     });


$(document).ready(function(){
  $('.your-class').slick({
    infinite: false,
    slidesToShow: 5,
    autoplaySpeed: 2000,
    nextArrow: ('.next'),
    prevArrow: ('.prev'),
    responsive: [
      {
        breakpoint: 1024,
        setting: {
          slidesToShow: 5,
          infinite: false,
        }
      },
      {
        breakpoint: 700,
        setting: {
          slidesToShow: 3,
          infinite: false,
        }
      },      
      {
        breakpoint: 415,
        setting: {
          slidesToShow: 1.5,
          infinite: false,
        }
      }
    ]
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
      });
  });