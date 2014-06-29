var TIME_TRANSITION = 1000;

$(document).ready(function(){
	$(document).on('click','a.smooth', function(e){
		e.preventDefault();
		var $link = $(this);
		var anchor = $link.attr('href');
		$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top
		}, TIME_TRANSITION);
	});
});