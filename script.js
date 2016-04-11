var scrollW;
var lastP = 0;
var navMenu = $('nav');
var menuHeight = navMenu.outerHeight();

function verschuifM() {
	scrollW = $(this).scrollTop();
	if (scrollW > lastP) {
		console.log('scroll naar beneden');
		lastP = scrollW;
		navMenu.css('top', -menuHeight + 'px');
	} else {
		console.log('haal het menu');
		lastP = scrollW;
		navMenu.css('top', 0);

	}

}
$(window).on('scroll', verschuifM);