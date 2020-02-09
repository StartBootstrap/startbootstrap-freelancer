(function($) {
  'use strict'; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 71
          },
          1000,
          'easeInOutExpo'
        );
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($('#mainNav').offset().top > 100) {
      $('#mainNav').addClass('navbar-shrink');
    } else {
      $('#mainNav').removeClass('navbar-shrink');
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Floating label headings for the contact form
  $(function() {
    $('body')
      .on('input propertychange', '.floating-label-form-group', function(e) {
        $(this).toggleClass(
          'floating-label-form-group-with-value',
          !!$(e.target).val()
        );
      })
      .on('focus', '.floating-label-form-group', function() {
        $(this).addClass('floating-label-form-group-with-focus');
      })
      .on('blur', '.floating-label-form-group', function() {
        $(this).removeClass('floating-label-form-group-with-focus');
      });
  });

  //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
  function autoPlayYouTubeModal() {
    var trigger = $('body').find('[data-toggle="modal"]');
    /* console.log('trigger :', trigger); */
    trigger.click(function() {
      var theModal = $(this).data('target'),
      videoSRC = $(this).attr('data-theVideo'),
      videoSRCauto = videoSRC + '?autoplay=1';
      $(theModal + ' iframe').attr('src', videoSRC/* auto */);
      if (theModal === '#portfolioModal5') {
        $(theModal).on('show.bs.modal', function(e) {
          speedUpVideoPlayback();
        })
        $(theModal).on('hidden.bs.modal', function() {
          player.stopVideo();
        })
      } else {
        $(theModal).on('hidden.bs.modal', function() {
          $(theModal + ' iframe').attr('src', '');
        });
      }
    });
  }
  
  $(document).ready(function() {
    autoPlayYouTubeModal();
  });

function speedUpVideoPlayback() {
  var tag = document.createElement('script');
  tag.id = 'iframeAPI';
  tag.src = 'https://www.youtube.com/iframe_api';
  var iframeAPIScriptTag = document.getElementsByTagName('script')[0];
  iframeAPIScriptTag.parentNode.insertBefore(tag, iframeAPIScriptTag);
}
var player;
window.onYouTubeIframeAPIReady = function() {
  player = new YT.Player('player', {
    events: {
      'onReady': onPlayerReady
    }
  });
}
function onPlayerReady(event) {
  player.setPlaybackRate(1.5);
  event.target.playVideo()
}

  
})(jQuery); // End of use strict
