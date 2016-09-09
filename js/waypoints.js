var firstResumeBtn = new Waypoint.Inview({
	element: $('#resume-btn-skills'),
	enter: function(direction) {
		var t = this.element;
		t.addClass('animated swing');
	},
	exit: function(direction) {
		var t = this.element;
		t.removeClass('animated swing');
	}
});
var secondResumeBtn = new Waypoint.Inview({
	element: $('#resume-btn-work'),
	enter: function(direction) {
		var t = this.element;
		t.addClass('animated swing');
	},
	exit: function(direction) {
		var t = this.element;
		t.removeClass('animated swing');
	}
});
var portfolioResumeBtn = new Waypoint.Inview({
	element: $('#resume-btn-portfolio'),
	enter: function(direction) {
		var t = this.element;
		t.addClass('animated swing');
	},
	exit: function(direction) {
		var t = this.element;
		t.removeClass('animated swing');
	}
});