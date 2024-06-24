// $(document).ready(function() {
// AOS.init({
//   duration: 1200,
// })
// });



//scroll-------

$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() >60) {
        $('.phone-date').hide().addClass('fade-effect');
        $('.navbar').addClass('fixed-top fade-effect');
        
        
      }
       else 
       {
        $('.phone-date').show().removeClass('fade-effect');
        $('.navbar').removeClass('fixed-top fade-effect');
      }
      
    });
});




//fixed-icon --------

$(window).scroll(function() {
  if ($(this).scrollTop() > 30) {
    $('.scroll-up').show();
  }
   else 
   {
    $('.scroll-up').hide();
  }
  
});


//en-de ----------


$(window).on('resize', function(){
  var win = $(this); 
  if (win.width() >= 1200) { $('.en-de').show();}
  if (win.width() < 1200) { $('.en-de').hide();}
});





$(".all").click(function()
{
    $("#all").show().addClass('d-flex rotate-animate ');
    $("#starters").hide().removeClass('d-flex rotate-animate ');
    $("#salads").hide().removeClass('d-flex rotate-animate ');
    $("#Specialty").hide().removeClass('d-flex rotate-animate ');

    $(".all").css("color","rgba(249, 189, 110, 0.932)");
    $(".starters").css("color","white");
    $(".salads").css("color","white");
    $(".Specialty").css("color","white");
});


$(".starters").click(function()
{
    $("#all").hide().removeClass('d-flex rotate-animate ');
    $("#starters").show().addClass('d-flex rotate-animate ');
    $("#salads").hide().removeClass('d-flex rotate-animate ');
    $("#Specialty").hide().removeClass('d-flex rotate-animate ');

    $(".starters").css("color","rgba(249, 189, 110, 0.932)");
    $(".all").css("color","white");
    $(".salads").css("color","white");
    $(".Specialty").css("color","white");
});

$(".salads").click(function()
{
    $("#all").hide().removeClass('d-flex rotate-animate ');
    $("#starters").hide().removeClass('d-flex rotate-animate ');
    $("#salads").show().addClass('d-flex rotate-animate ');
    $("#Specialty").hide().removeClass('d-flex rotate-animate ');


    $(".salads").css("color","rgba(249, 189, 110, 0.932)");
    $(".starters").css("color","white");
    $(".all").css("color","white");
    $(".Specialty").css("color","white");
 
});

$(".Specialty").click(function()
{
    $("#all").hide().removeClass('d-flex rotate-animate ');
    $("#starters").hide().removeClass('d-flex rotate-animate ');
    $("#salads").hide().removeClass('d-flex rotate-animate ');
    $("#Specialty").show().addClass('d-flex rotate-animate ');

    $(".Specialty").css("color","rgba(249, 189, 110, 0.932)");
    $(".starters").css("color","white");
    $(".salads").css("color","white");
    $(".all").css("color","white");
 
});


//----------------------------------------------------

$(document).ready(function() {
  
$('.carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  infinite: true,
  arrows:false,
  
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
      }
    }
    
  ]
});
});


//------------------------------------------

$(document).ready(function() {
  $('.events').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    arrows:false,
    
  });
});