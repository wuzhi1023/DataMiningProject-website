$(function() {
	$hero = $('#hero-image');
	$shadow = $('#shadow');
	var heroHeight = $hero.height();
	$(window).scroll(function(){
	var top = $(window).scrollTop()/3;
	var ratio = $(window).scrollTop()/heroHeight;
	var string = 'blur('+4*ratio+'px)';
	var color = 'rgba(0,0,0,'+(0.2+ratio/5)+')';
	console.log(color);
	// $('#hero-image').css('top', top);
	$hero.css('-webkit-filter', string);
	$hero.css('-moz-filter', string);
	$hero.css('-o-filter', string);
	$hero.css('-ms-filter', string);
	$hero.css('-filter', string);
	$shadow.css('background-color', color);
	})
});