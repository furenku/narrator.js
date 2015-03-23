// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


var wH = $('body').height();
var fitH;




fitH();
fillH();
crearPantallas();
mediaScroll();
timeline();
/*

var pantalla = $('#pantallas .pantalla').first();
var pantalla2 = $('#pantallas .pantalla').eq(2);

var start = 30;
var end = 36;
end = end - start;

var vd1 = $('<div>').addClass('video');
pantalla.append( vd1 );
//vcenter(vd1,pantalla)
vd1.player({
	video: '_9glPPNLQyg',
	width: pantalla.width(),
	height: ( pantalla.width() / 1.77 ),
	playerVars: { 
		autoload: true,
		autoplay: true,
		start: 60,
		controls: 0
	},
	events: {
		play: onPlay,
		stop: onPause,
		end: onPause
	}    
});

var vd2 = $('<div>').addClass('video');
pantalla.append( vd2 );
//vcenter(vd2,pantalla)
vd2.player({
	video: '1kXprJk8hm4',
	width: pantalla.width(),
	height: ( pantalla.width() / 1.77 ),
	playerVars: { 
		autoload: true,
		autoplay: true,
		start: 60,
		controls: 0
	},
	events: {
		play: onPlay,
		stop: onPause,
		end: onPause
	}  
});

function onPlay(event) {
	var player = this.p;
	console.log(player)
}

function onPause(event) {
	var player = this.p;
	player.clearVideo()

	// player.css({opacity:0});
}



var stopCount = 0;
setInterval(function(){
	stopCount++;
	if(stopCount%2==0) {

		vd1.data('player').play()//.stopVideo();
		vd2.data('player').pause()//.stopVideo();
		
		pantalla.find('iframe').eq(1).css({opacity:0});
		pantalla.find('iframe').eq(0).css({opacity:1});
		
	}
	else {

		vd2.data('player').play()//.stopVideo();
		vd1.data('player').pause()//.stopVideo();
		vd1.hide();
		pantalla.find('iframe').eq(1).css({opacity:1});
		pantalla.find('iframe').eq(0).css({opacity:0});
		
	}
	//vd.remove();
//	alert(123);
}, 3000 );

*/



/*
$('#secuencia_media').scrollLeft(0);
$('#secuencia_media').animate({'scrollLeft':300},3000);
*/

//setTimeout(function(){location.reload();},10000)