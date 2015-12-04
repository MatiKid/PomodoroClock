var pomodoros = 0;


$(document).ready(function() {
	$('#runner').runner({
		startAt: 1000*60*25,
		stopAt: 0,
		countdown: true
	});

	$('#start').click(function() {
		$('#runner').runner('start');
	});

	$('#stop').click(function() {
		$('#runner').runner('stop');
	});
});
