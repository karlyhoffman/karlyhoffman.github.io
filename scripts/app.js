$(function() {
	console.log("Linked.");
	// Fixed Nav Bar Effect
	var offset = $("nav").offset();
	var navHeight = offset.top;
	$(window).scroll(function() {
	    var height = $(window).scrollTop();
	    var nav = $('nav');
	    if( height >= navHeight) {
			// console.log("Hit the nav!");
			nav.addClass('fix-nav')
	    } else {
	    	// console.log("Haven't hit the nav, yet.");
	    	nav.removeClass('fix-nav')
	    }
	});
	// Scroll to Nav
	function scrollNav() {
		$('#bar').click(function(){  
	    //Animate
		    $('html, body').animate({
			    scrollTop: $("#projects").offset().top
			}, 1000);
		});
		// $('label').click(function(){  
	 //    //Animate
		//     $('html, body').animate({
		// 	    scrollTop: $("#gallery").offset().top
		// 	}, 1000);
		// });
	};
	scrollNav();
});
