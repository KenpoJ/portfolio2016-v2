function portfolioDisplay() {
	var display = $('.portfolio');
	
	// get portfolio JSON file
	$.getJSON('js/portfolio-info.json', {
		format: "json"
	})
	.done(function(data) {
		console.log(data);
		$.each(data.items, function(key, item) {
			console.log($(this)[key]);

			//item = item[0][i].title;
			//item.appendTo('.portfolio');
			//console.log(data.items);
		});
	})
	.fail(function(error) {
		console.log(error);
	});
}

portfolioDisplay();