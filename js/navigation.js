var navAnchor = $('nav li a');

// STICKY NAVIGATION
$(window).scroll(function() {
	if($(this).scrollTop() > 10) {
		$('header').addClass('sticky');
	} else {
		$('header').removeClass('sticky');
	}
})

navAnchor.click(function(e) {
	e.preventDefault();
	var t = $(this);
	var target = t.attr('href');
	var adjTarget = $(target).offset().top;

	$(document.body).animate({
		'scrollTop': adjTarget
	}, 500);
});