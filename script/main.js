$(function(){


    //Smooth scroll on all a tags.
    var $root =$('html, body');
        $('a').click(function(){
         $root.animate({
           scrollTop: $($.attr(this, 'href')).offset().top
         }, 800);
         return false;
    });


    //Sticky navigation on scroll.
      $(document).on('scroll', function(){
        if($(this).scrollTop() > 1){
            $('header').addClass('navbar-sticky');
        }else{
            $('header').removeClass('navbar-sticky');
        }
    });


    // //Add active class to the nav on click.
    $('.nav li a').click(function(){
    $('.nav li a').removeClass('active');
    $(this).addClass('active');
    });


    //Add active class to the nav on scoll window.
    $(window).on('scroll', function(event){
      var scrollPos = $(document).scrollTop();
      $('.nav li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));

        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          currLink.parent().addClass("active").siblings().removeClass("active");
          return;
        }
        else{
          currLink.parent().removeClass("active");
        }
      })
    })



});
