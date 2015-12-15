var pomodoros = 1;
var loop = 1;
var pomodoroLength = 10000//25 * 60 * 1000;
var breakLength = 5000//2 * 60 * 1000;


$(document).ready(function() {

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

			info.settings.startAt = pomodoroLength;
			$('#runner').runner('start');

			// if($('#automatic-cycle').is(':checked')) {
			// 	console.log('checked');
			// } else {
			// 	$('#runner').runner('start');
			// 	console.log('NOT checked');
			// };
				
		} else if (loop % 2 !== 0) {
			loop++;

			$('#pomodoroNum').text('Break');

			info.settings.startAt = breakLength;
			$('#runner').runner('start');
		};
	});


	$('#main-btn').click(function() {
		if($(this).text() === 'Start') {
			$(this).text('Pause');
			$('#runner').runner('start');
		} else if($(this).text() === 'Pause') {
			$(this).text('Resume');
			$('#runner').runner('stop');
		} else if($(this).text() === 'Resume') {
			$(this).text('Pause');
			$('#runner').runner('start');
		}
	});

	$('#set-pomodoro-length').click(function() {
		var pomodoroLengthInput = parseInt($('#pomodoro-length').val());
		if(!isNaN(pomodoroLengthInput)) {
			pomodoroLength = pomodoroLengthInput * 60 * 1000;

			if($('#pomodoroNum').text() !== 'Break') {
				var runnerInfo = $('#runner').runner('info');
				runnerInfo.settings.startAt = pomodoroLength;
				$('#runner').runner('reset');
			}
		}
	});

	$('#set-break-length').click(function() {
		var breakLengthInput = parseInt($('#break-length').val());
		if(!isNaN(breakLengthInput)) {
			breakLength = breakLengthInput * 60 * 1000;
			
			if($('#pomodoroNum').text() === 'Break') {
				var runnerInfo = $('#runner').runner('info');
				runnerInfo.settings.startAt = breakLength;
				$('#runner').runner('reset');
			}
		}
	});
});

