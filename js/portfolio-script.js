function portfolioDisplay() {
	var display = $('.portfolio');
	
	// get portfolio JSON file
	$.getJSON('js/portfolio-info.json', {
		format: "json"
	})
	.done(function(data) {
		//console.log(data.portfolio[0]);
		$.each(data.portfolio, function(i, item) {
			title = item.title;
			$('<li><a class="portfolio-piece hvr-grow-rotate" rel="' + item.page + '" data-toggle="modal" data-target="#portfolio_showing" onClick="mediaClick();"><img src="' + item.thumbnail_link + '"></a></li>').appendTo('.portfolio');
		});
	})
	.fail(function(error) {
		console.log(error);
	});
}

function mediaClick() {
	// PORTFOLIO MODAL BEHAVIOR
	var pp = $('.portfolio li');

	pp.hover(function() {
		$(this).css({
			"cursor": "pointer"
		});
	});

	pp.click(function(e) {
		e.preventDefault();
		var item = $(this);
		var link = item.children().attr('rel');

		//$('#portfolio_showing').modal('toggle');

		$.ajax({
			method: 'GET',
			url: link,
			dataType: 'html',
			cache: 'false'
		})
		.done(function(html) {
			$('#portfolio_display').css({
			'max-height': $(window).height() * 0.8,
			'overflow': 'auto'
		})
		.html(html);
		});
	});
}

// PORTFOLIO LINKS BEHAVIOR
var pp = $('.portfolio-piece');
var ph = $('.portfolio-piece h4');
var pi = $('.portfolio-piece img');

console.log(pp)

pp.mouseenter(function() {
	var t = $(this);
	var tImg = t.find('img');
	var tOverlay = t.find('div.overlay');
	var th = $(this).height();

	tOverlay.animate({
		top: 0
	}), 50;

});
pp.mouseleave(function() {
	var t = $(this);
	var tImg = t.find('img');
	var tOverlay = t.find('div.overlay');
	var th = $(this).height();

	tOverlay.animate({
		top: '100%'
	}), 100;
});

// PORTFOLIO MODAL BEHAVIOR
var port_link = $('a[data-toggle*="modal"] ~ div.overlay');
var pp = $('#portfolio_piece');
var overlay = pp.find('div.overlay');

console.log(pp)

port_link.click(function() {
    var media_link = $(this).siblings('a').attr('rel');
    pp.html('');
    
    $('#portfolio_showing').modal('toggle');

    $.ajax({
        method: 'GET',
        url: media_link,
        dataType: 'html',
        cache: 'false'
    })
    .done(function(html) {
        $('#portfolio_display').css({
        	'max-height': $(window).height() * 0.8,
        	'overflow': 'auto'
        })
        .html(html);
    });
});


//portfolioDisplay();