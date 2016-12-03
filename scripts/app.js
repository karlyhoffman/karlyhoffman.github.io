$(function() {
	console.log("Linked.");

	var paddingHeight = $(window).height() * .035 ;
	console.log(paddingHeight);
	var landingHeight = paddingHeight + $("#landing").height() + $("#bar").height() + $("h2").height() + $("nav").height() + $("label").height(); 


	console.log(landingHeight);

	var paddingHeight = $(window).height();

	$(window).scroll(function() {
	    var height = $(window).scrollTop();
	    var nav = $('nav');

	    if( height >= landingHeight) {
			console.log("Hit the nav!");
			nav.addClass('fix-nav')
	    } else {
	    	console.log("Haven't hit the nav, yet.");
	    	nav.removeClass('fix-nav')
	    }
	});

	function scrollNav() {
		$('#bar, #projects').click(function(){  
	    //Animate
		    $('html, body').animate({
			    scrollTop: $("#projects").offset().top
			}, 1000);
		});
	};
	scrollNav();
});
