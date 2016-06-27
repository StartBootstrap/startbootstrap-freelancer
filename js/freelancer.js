// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
<<<<<<< HEAD
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
=======

        $('html, body')
        .bind('scroll mousedown DOMMouseScroll mousewheel keyup', function(){
          $('html, body').stop();
        })
        .stop()
        .animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');

>>>>>>> 3ba328e3235fd85c0f2f9bf73e21dc2e6a7f3f0a
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

<<<<<<< HEAD
    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
=======
// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});
>>>>>>> 3ba328e3235fd85c0f2f9bf73e21dc2e6a7f3f0a

})(jQuery); // End of use strict
