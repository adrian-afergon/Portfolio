$(document).ready(function(){
	
	$('.project').hover(function(){
		$(this).find('img').addClass('selected',{duration:1000});
	}, function(){
		$(this).find('img').removeClass('selected',{duration:1000});
	});
});