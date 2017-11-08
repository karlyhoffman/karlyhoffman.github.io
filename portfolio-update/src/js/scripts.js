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
      // Image Change
      for (var i = 1; i < listItem.length + 1; i++) {
        if ($(this).hasClass('proj-' + i )) {
          $('.img-cont').css('background-image', 'url(../assets/img/temp' + i + '.jpg)');
          $('.bg-color').attr('class', 'bg-color').addClass('proj--' + i );
        }
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

  });

})(jQuery, window, document);
