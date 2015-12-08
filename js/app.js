var pomodoros = 0;


$(document).ready(function() {
	$('#runner').runner({
		startAt: 5000, //1000*60*25,
		milliseconds: false,
		stopAt: 0,
		countdown: true
	}).on('runnerFinish', function() {
		pomodoros++;
		updatePomodoroNum(pomodoros);
		console.log(pomodoros);
		$('#runner').runner({
			startAt: 5000, //1000*60*25,
			milliseconds: false,
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

	function updatePomodoroNum(pomodoroNum) {
		$('#pomodoroNum').text('Pomodoro #' + pomodoroNum);
	}
});
