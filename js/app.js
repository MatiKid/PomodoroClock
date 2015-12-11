var pomodoros = 1;
var loop = 1;
var pomodoroLength = 25 * 60 * 1000;
var breakLength = 2 * 60 * 1000;


$(document).ready(function() {

	function timer() {
		$('#runner').runner({
			startAt: pomodoroLength,
			milliseconds: false,
			stopAt: 0,
			countdown: true
		}).on('runnerFinish', function(eventObject, info) {

			if(loop % 2 === 0) {
				pomodoros++;
				loop++;
				$('#pomodoroNum').text('Pomodoro #' + pomodoros);

				info.settings.autostart = true;
				info.settings.startAt = pomodoroLength;
				$('#runner').runner('start');	
			} else if (loop % 2 !== 0) {
				loop++;
				$('#pomodoroNum').text('Break');

				info.settings.autostart = true;
				info.settings.startAt = breakLength;
				$('#runner').runner('start');
			};
		});
	};

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

	$('#set-pomodoro-length').click(function() {
		var pomodoroLengthInput = parseInt($('#pomodoro-length').val());
		if(!isNaN(pomodoroLengthInput)) {
			pomodoroLength = pomodoroLengthInput * 60 * 1000;
			timer();
		}
	});
	$('#set-break-length').click(function() {
		var breakLengthInput = parseInt($('#break-length').val());
		if(!isNaN(breakLengthInput)) {
			breakLength = breakLengthInput * 60 * 1000;
			timer();
		}
	});

	timer();
});

