var pomodoros = 1;


$(document).ready(function() {
	$('#runner').runner({
		startAt: 10000, //1000*60*25,
		milliseconds: false,
		stopAt: 0,
		countdown: true
	}).on('runnerFinish', function(eventObject, info) {
		console.log(eventObject);
		console.log(info);
		pomodoros++;
		updatePomodoroNum(pomodoros);

		info.settings.autostart = true;
		$('#runner').runner('start');
	});

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
	};
});