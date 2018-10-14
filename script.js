$(function () {

	$('.btn-primary').click(function () {
		changeCase();
	});

	function changeCase () {
		var input = $('.inp').val();
		let newText = input.toLowerCase();
		$('.inp').val(newText);
	}
});
