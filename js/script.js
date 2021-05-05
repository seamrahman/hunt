
// wow js start//
new WOW().init();

// wow js start//

//====== fixed navbar part start =======//

$(window).scroll(function(){
  if($(window).scrollTop() > 100){
    $(".menu").addClass("fixed")
  }else{
    $(".menu").removeClass("fixed")
  }

  if($(window).scrollTop() > 1000){
    $(".backtotop").fadeIn()
  }else{
    $(".backtotop").fadeOut()
  }
})

//====== fixed navbar part end =======//

//====== smooth scroll part start =======//

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 90
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//====== smooth scroll part end =======//

//====== back to top part start =======//

$(".backtotop").click(function(){
  $("html,body").animate({
    scrollTop:0,
  },3000)
})

//====== back to top part start =======//

//====== banner part start =======//
$('.banner_slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    fade: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-arrow-circle-left prev"></i>',
    nextArrow: '<i class="fas fa-arrow-circle-right next"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
//====== banner part end =======//

//====== portflo part start =======//
$('.portflo-slider').slick({
  dots: false,
  infinite: true,
    arrows: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//====== portflo part end =======//

//====== port venobox part start =======// 
$(document).ready(function(){
  $('.venobox').venobox(); 
});

//====== port venobox part end =======//

//====== service part start =======//
$('.service_slider').slick({
  dots: false,
    arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  centerMode: true,
  centerPadding: "0",
  prevArrow: '<i class="fas fa-chevron-up prev"></i>',
    nextArrow: '<i class="fas fa-chevron-down next"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        arrows: false,
        dots: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


//====== service part end =======//

//======  info-slider part start =======//
$('.info-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  centerMode:true,
  centerPadding:"0",
  asNavFor:'.testi-slider',
  prevArrow: '<i class="fas fa-chevron-up prev"></i>',
    nextArrow: '<i class="fas fa-chevron-down next"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: false,
        prevArrow: '<i class="fas fa-chevron-left prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right next"></i>',
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        prevArrow: '<i class="fas fa-chevron-left prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right next"></i>',
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


//======  info-slider part end =======//

//======  testi-slider part start =======//

$('.testi-slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  asNavFor:'.info-slider',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//======  testi-slider part end =======//
//======  counter part start =======//


$('.counter').counterUp({
  delay: 10,
  time: 2000
});

//======  counter part end =======//

//======  market part start =======//
$('.market-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



//======  market part end =======//