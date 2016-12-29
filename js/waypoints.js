var firstResumeBtn = new Waypoint.Inview({
	element: $('#resume-btn-skills'),
	entered: function(direction) {
		var t = this.element;
		t.addClass('animated swing');
	},
	offset: '90%',
	exit: function(direction) {
		var t = this.element;
		t.removeClass('animated swing');
	}
});
var secondResumeBtn = new Waypoint.Inview({
	element: $('#resume-btn-work'),
	entered: function(direction) {
		var t = this.element;
		t.addClass('animated swing');
	},
	offset: '90%',
	exit: function(direction) {
		var t = this.element;
		t.removeClass('animated swing');
	}
});
var portfolioResumeBtn = new Waypoint.Inview({
	element: $('#resume-btn-portfolio'),
	entered: function(direction) {
		var t = this.element;
		t.addClass('animated swing');
	},
	offset: '95%',
	exit: function(direction) {
		var t = this.element;
		t.removeClass('animated swing');
	}
});