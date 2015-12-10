var pomodoros = 1;
var loop = 1;


$(document).ready(function() {
	$('#runner').runner({
		startAt: 10000, //1000*60*25,
		milliseconds: false,
		stopAt: 0,
		countdown: true
	}).on('runnerFinish', function(eventObject, info) {

		if(loop % 2 === 0) {
			pomodoros++;
			loop++;
			$('#pomodoroNum').text('Pomodoro #' + pomodoros);

			info.settings.autostart = true;
			info.settings.startAt = 10000;
			$('#runner').runner('start');	
		} else if (loop % 2 !== 0) {
			loop++;
			$('#pomodoroNum').text('Break');

			info.settings.autostart = true;
			info.settings.startAt = 5000;
			$('#runner').runner('start');
		};
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
});