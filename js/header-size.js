var SMALL ='40px';
var BIG = '100px';
var MINWITH = 480;
var ANIMATION_TIME = 600;

var SMALL_RESPONSIVE ='60px';

/**
	Es necesario ajustar el tamaño del header en el css de tal forma que en el tamaño para tablet
	se ajuste el menú (o, cambias el tamaño para que trate la tablet tambien como el movil y no lo
	rediimensione)


	Controlar que cuando estás en movil no es necesario cambiar el tamaño, sino dejar el que tiene por
	defeto de 60px
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
      	if ($(window).width() >= MINWITH){
			resizeHeader();
		}
      	else{
      		//
      			//No me gusta, posible refactorización
      		//
      		$('header').data('size','big');
					$('header').stop().animate({
					    height:BIG
					},ANIMATION_TIME);
      	}
	});
});