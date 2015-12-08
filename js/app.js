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
		$('#runner').runner({
			startAt: 5000, //1000*60*25,
			milliseconds: false,
			stopAt: 0,
			countdown: true,
			autostart: true
		});
	})

	$('#main-btn').click(function() {
		$('#runner').runner('toggle');

		if($(this).text() === 'Start') {
			$(this).text('Pause');
		} else if($(this).text() === 'Pause') {
			$(this).text('Resume');
		} else if($(this).text() === 'Resume') {
			$(this).text('Pause');
		}
	});


	function updatePomodoroNum(pomodoroNum) {
		$('#pomodoroNum').text('Pomodoro #' + pomodoroNum);
	}
});
