var SMALL ='60px';//40
var BIG = '100px';
var MINWITH = 480;
var ANIMATION_TIME = 600;

var SMALL_RESPONSIVE ='60px';

/**
	Es necesario ajustar el tamaño del header en el css de tal forma que en el tamaño para tablet
	se ajuste el menú (o, cambias el tamaño para que trate la tablet tambien como el movil y no lo
	rediimensione)

	Revisar interación porque cuando se minimiza, no se redimenciona al tamaño grande
*/


function resizeHeader(){
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
}

$(document).ready(function(){
	$('header').data('size','big');
	$(window).scroll(function(){
		if ($(window).width() >= MINWITH){
			resizeHeader();
		}
	});
	$(window).on('resize', function(){
		console.log("Se redimenciona");
      	if ($(window).width() >= MINWITH){
			resizeHeader();
		}
      	else{
      		$('header').data('size','small');
					$('header').stop().animate({
					    height:SMALL_RESPONSIVE
					},ANIMATION_TIME);
      	}
	});
});