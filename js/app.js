
$(document).ready(function() {
	$('#runner').runner();

	$('#start').click(function() {
		$('#runner').runner('start');
	});

	$('#stop').click(function() {
		$('#runner').runner('stop');
	});
});
