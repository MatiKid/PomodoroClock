var pomodoros = 1;
var loop = 1;
var pomodoroLength = 10000//25 * 60 * 1000;
var breakLength = 5000//2 * 60 * 1000;


$(document).ready(function() {

	// Sets timer inital parameters
	$('#runner').runner({
		startAt: pomodoroLength,
		milliseconds: false,
		stopAt: 0,
		countdown: true
		// After first timer cycle
	}).on('runnerFinish', function(eventObject, info) {

		// Loop keeps track of Pomodoro - Break order
		if(loop % 2 === 0) {
			// Pomodoro
			pomodoros++;
			loop++;
			
			$('#pomodoroNum').text('Pomodoro #' + pomodoros);
			// Creates Reset button if it doesn't exist
			if(!$('#reset').length) {
				$('#buttons').append('<button id="reset">Reset</button>');
			}

			info.settings.startAt = pomodoroLength;

			// Check 'Start Next Pomodoro Automatically' option
			if($('#automatic-cycle').is(':checked')) {
				$('#runner').runner('start');
			} else {
				$('#runner').runner('reset');
				$('#main-btn').text('Start');
			};
				
		} else if (loop % 2 !== 0) {
			// Break
			loop++;

			$('#pomodoroNum').text('Break');
			$('#reset').remove();

			info.settings.startAt = breakLength;
			$('#runner').runner('start');
		};
	});

	//Changes main button text and functionality
	$('#main-btn').click(function() {
		if($(this).text() === 'Start') {
			$(this).text('Pause');
			$('#runner').runner('start');
			// Creates the first Reset button
			if(!$('#reset').length) {
				$('#buttons').append('<button id="reset">Reset</button>');
			}
		} else if($(this).text() === 'Pause') {
			$(this).text('Resume');
			$('#runner').runner('stop');
		} else if($(this).text() === 'Resume') {
			$(this).text('Pause');
			$('#runner').runner('start');
		}
	});

	// Watch Reset button
	$('#buttons').on('click', '#reset', function() {
		$('#runner').runner('reset', true);
		$('#main-btn').text('Start');
	});

	// Set custom lengths for Pomodoros and Breaks
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

