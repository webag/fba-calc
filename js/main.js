/***********************
Trial modal BEGIN
***********************/
function open_modal() {
	$('.modal').addClass('visible');
}
function close_modal() {
	$('.modal').removeClass('visible');
}

$(document).ready(function() {
	$('.remind-link').on('click',function (e) {
		e.preventDefault();
		close_modal();
	});
});
/***********************
Trial modal END
***********************/