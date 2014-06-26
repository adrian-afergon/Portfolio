var SMALL ='40px';
var BIG = '100px';
var ANIMATION_TIME = 600;

$(document).ready(function(){

	$('header').data('size','big');
	$(window).scroll(function(){
	    if($(document).scrollTop() > 0){
			if($('header').data('size') == 'big'){
				$('header').data('size','small');
				$('header').stop().animate({
				    height:SMALL
				},ANIMATION_TIME);
			}
		}
		else{
		    if($('header').data('size') == 'small'){
				$('header').data('size','big');
				$('header').stop().animate({
				    height:BIG
				},ANIMATION_TIME);
			}  
		}
	});
});