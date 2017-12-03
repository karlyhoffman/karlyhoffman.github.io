(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    // About page footer
    var pathName = window.location.pathname;
    pathName == '/about.html' ? $('footer').addClass('white-copy') : $('footer').removeClass('white-copy');

    // Homepage project list
    var listItem = $('.project-list > li');
    $(listItem).mouseenter(function() {
      // Navigation Animation
      $(listItem).each(function() {
        $( this ).removeClass('active');
      });
      $(this).addClass('active');
      var activeSrc = $(".project-list > .active > a").attr('href');
      $('.feat-img').attr('href', activeSrc);
      // Image Change
      for (var i = 1; i < listItem.length + 1; i++) {
        if ($(this).hasClass('proj-' + i )) {
          $('.img-cont').css('background-image', 'url(../assets/img/project' + i + '.png)');
          $('.bg-color').attr('class', 'bg-color').addClass('proj--' + i );
        }
      }
    });

    // Safari Autoplay Videos
    var videos = $('.demo');
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      for (var i = 0; i < videos.length; i++) {
        videos[i].play();
      }
    }

    // Scroll to href
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if(target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }

    });

    // Reveal animations
    var controller = new ScrollMagic.Controller();

    $( ".reveal" ).each(function( index, elem ) {
     var revealIn = TweenMax.fromTo(this, 0.4, { "opacity": "0", marginTop: 40 }, { "opacity": "1", marginTop:0, ease: Power0.easeNone });
     var revealScene = new ScrollMagic.Scene({triggerHook: "0.72", triggerElement: this}).setTween(revealIn).addTo(controller);
    });

    $( ".fade" ).each(function( index, elem ) {
     var fadeIn = TweenMax.fromTo(this, 0.5, {"opacity": "0"}, {"opacity": "1", ease: Power0.easeNone});
     var fadeScene = new ScrollMagic.Scene({triggerHook: "0.95", triggerElement: this}).setTween(fadeIn).addTo(controller);
    });

    $( ".reveal-stagger" ).each(function( index, elem ) {
     var animStaggerSubjects = $(elem).find('.reveal-elmt');
     var fadeStaggerIn = TweenMax.staggerFromTo(animStaggerSubjects, 0.3, {"opacity": "0", marginTop:20}, {"opacity": "1", marginTop:0, ease: Power2.easeOut}, 0.2);
     var revealStaggerScene = new ScrollMagic.Scene({triggerHook: "0.75", triggerElement: this}).setTween(fadeStaggerIn).addTo(controller);
    });

    $( ".stagger-x" ).each(function( index, elem ) {
     var animStaggerSubjects = $(elem).find('.x-elmt');
     var fadeStaggerIn = TweenMax.staggerFromTo(animStaggerSubjects, 0.4, {"opacity": "0", marginLeft:-200}, {"opacity": "1", marginLeft:-5, ease: Power2.easeOut}, 0.2);
     var revealStaggerScene = new ScrollMagic.Scene({triggerHook: "0.75", triggerElement: this}).setTween(fadeStaggerIn).addTo(controller);
    });

    $( ".line-cont" ).each(function( index, elem ) {
      var lineAnim = $(elem).find('.line');
      var lineIn = TweenMax.fromTo(lineAnim, 2, {"height": "0"}, {"height": "200%", ease: Power0.easeNone});
      var revealLine = new ScrollMagic.Scene({triggerHook: "0.7", triggerElement: elem}).setTween(lineIn).addTo(controller);
    });

    $( ".grow" ).each(function( index, elem ) {
     var revealIn = TweenMax.fromTo(this, 0.4, { "opacity": "0", "width" : "0", "height" : "0" }, { "opacity": "1", "width" : "18px", "height" : "18px", ease: Power0.easeNone });
     var revealScene = new ScrollMagic.Scene({triggerHook: "0.85", triggerElement: this}).setTween(revealIn).addTo(controller);
    });

  });

})(jQuery, window, document);
