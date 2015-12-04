var pomodoros = 0;


$(document).ready(function() {
	$('#runner').runner({
		startAt: 5000,//1000*60*25,
		stopAt: 0,
		countdown: true
	}).on('runnerFinish', function() {
		pomodoros++;
		console.log(pomodoros);
		$('#runner').runner({
			startAt: 5000,//1000*60*25,
			stopAt: 0,
			countdown: true,
			autostart: true
		});
	})

	$('#start').click(function() {
		$('#runner').runner('start');
	});

	$('#stop').click(function() {
		$('#runner').runner('stop');
	});
});
