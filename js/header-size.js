var SMALL ='60px';//40
var BIG = '100px';
var MINWITH = 480;
var ANIMATION_TIME = 600;

var SMALL_RESPONSIVE ='60px';

function resizeHeader(){
	if($(window).scrollTop() > 0){
		if($('header').data('size') == 'big'){
			$('header').data('size','small');
			$('header').stop().animate({
				height:SMALL
			},ANIMATION_TIME);
			$('#socialities').toggle();
		}
	}
	else{
		if($('header').data('size') == 'small'){
			$('header').data('size','big');
			$('header').stop().animate({
				height:BIG
			},ANIMATION_TIME);
			$('#socialities').toggle();
		}  
	}
}

$(window).ready(function(){
	$('header').data('size','big');
	$(window).scroll(function(){
		if ($(window).width() >= MINWITH){
			resizeHeader();
		}
	});
	$(window).on('resize', function(){
      	if ($(window).width() >= MINWITH){
			resizeHeader();
		}
      	else{
      		$('header').data('size','small');
					$('header').stop().animate({
					    height:SMALL_RESPONSIVE
					},ANIMATION_TIME);
					$('#socialities').hide();
      	}
	});
});