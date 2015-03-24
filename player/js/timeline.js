/*
<div class="marker current" data-pos="0.25">marker1</div>
<div class="marker" data-pos="0.75">marker2</div>
*/


function Contenido() {
	this.name = "";
	this.media = Array();
}

function Secuencia(){
	this.name = "";
	this.secuencias = Array();
	this.contenidos= Array();
	this.playSecuencia() = function(){}
	this.playContenido() = function(){}

	return this;
}




function Seccion(){

	this.name = "";
	this.secuencias = Array();
	var secuenciaActual = -1;

	var Clase = this;
	
	this.siguienteSecuencia = function() {
		Clase.abrirSecuencia( secuenciaActual );
		secuenciaActual++;
		wrap( secuenciaActual, Clase.secuencias );
	}
	this.anteriorSecuencia = function() {
		Clase.abrirSecuencia( secuenciaActual );
		secuenciaActual--;
		wrap( secuenciaActual, Clase.secuencias );
	}
	return this;


}



function Narrativa() {
	this.name = "";
	this.secciones = Array();
	return this;
}



function Narrator() {

	this.playing = 0;	
	this.narrativa = Narrativa();
	
	var Clase = this;

	this.playSection = function() {}
	
	this.addSection = function( seccion ) {
		// calcular duracion:
		//console.log( "IMPLEMENTAR: duracion real");

		//var duracion = 5000;
		//seccion.duracion = duracion;
		Clase.narrativa.secciones.push( seccion );
	}

	return this;
}


var n;
$(document).ready(function(){



	n = Narrator();

	var a = Array();

	$.ajax({
		url: 'http://localhost/web/A19/db',
		dataType: 'json',
		success: function( data ) {
			
			for(var i=0; i < data.length; i++) {
				var seccion = data[i];		

				if( typeof( seccion.secuencias ) != "undefined" ) {

					n.narrativa.secciones.push(seccion);	
					console.log( seccion );
				}
	/*		
	seqDiv.append( h( 6, "inicio: "+ Math.floor( secuencias[j].ms / 60 ) + ":" + n( secuencias[j].ms % 60 )) );
	seqDiv.append( h( 6, "duracion: "+ Math.floor( secuencias[j].duracion / 60000 ) + ":" + n( (secuencias[j].duracion/1000) % 60 )) );
	*/
			
	/*
	for(j in seccion.secuencias ) {
		var secuencia = seccion.secuencias[j];
		console.log( seccion.title, secuencia.title, secuencia );
		doMedia( function(x){console.log("do:",x)},secuencia );
	}
	*/
			}
			drawTimeline();

		}
	});



})




function mediaDiv( type, content ) {

	var mDiv = $('<div>').attr('class','media media_' + type );
	var scrB = $('<div>').attr("class","screenbuttons row");
	scrB.prepend( $('<div>').attr("class","screenbutton") );
	scrB.prepend( $('<div>').attr("class","screenbutton") );
	scrB.prepend( $('<div>').attr("class","screenbutton") );
	mDiv.prepend( scrB );
	mDiv.append( $('<div>').attr("class","tipo row") );
	mDiv.append( $('<div>').attr("class","contenido row").html( content ) );

	return mDiv;

}


function onPlay(event) {
	var player = this.p;
	console.log(player)
}

function onPause(event) {
	var player = this.p;
	player.clearVideo()

	// player.css({opacity:0});
}


function abrirContenido( contenido, i ) {
	var pantalla = $('#pantallas .pantalla').eq(i);
	var result;
	console.log( contenido.info.title )
	if( typeof(  contenido.media ) != 'undefined' ) {
		var num =  contenido.media.length;
		console.log( num, contenido.media );
		result = $('<div>').addClass('media_player');
		for (var j = 0; j <= num; j++) {
			if( typeof(  contenido.media[j] ) != 'undefined' ) {

				var mediaHolder =  contenido.media[j];								

				var key = mediaHolder.tipo;
				for( var m = 0; m <  mediaHolder.media.length; m++) {
					var mediaItem = mediaHolder.media[m];
					var content;
					content = mediaItem;
					if( mediaItem != "" ) {

						if( key === "imagenes" ) {
							content = $('<img>').attr('src', mediaItem );
							content = $('<a>').attr('href',mediaItem).attr('data-lightbox',contenido.info.title).attr('data-title','').html( content );												
						}

						if( key === "videos" ) {
							content = $('<a>').attr({href:mediaItem,target:'_blank'}).html( $('<video>').append( $('<source>').attr('src',mediaItem) ).attr('autoplay', 'autoplay') );												
						}

						if( key === "audios" ) {
							content = $('<a>').attr({href:mediaItem,target:'_blank'}).html( $('<audio>').append( $('<source>').attr('src',mediaItem) ).attr('autoplay', 'autoplay')  );												
						}

						if( key === "tweet_ids" ) {
							content = $('<div>').html( mediaItem );												
						}

						if( key === "urls" ) {
							console.log( "url" );


							var url = mediaItem.split("=")[1];
							
							var vd = $('<div>').addClass('video');
							pantalla.append( vd );
							//vcenter(vd,pantalla)
							vd.player({
								video: url,
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

							content = vd;												
						}

								
						console.log( content );
						
						var mediaP = $('<div>').attr("class","media_" + key + " media").html( content );

						mediaP.width( pantalla.width() );
						mediaP.css({ maxHeight: pantalla.width() });
						result.append( mediaP );
					}

				}


			}

			
		}
	}

	console.log( result );
	//pantalla.find('video').remove();
	pantalla.html(result);
	
}





function abrirSecuencia( secuencia ) {

	var nDiv = $('#secuencia_media .scrollX');
	nDiv.html('');
	var contenidos = secuencia.contenidos;
	if( typeof( contenidos ) != 'undefined' ) {
		var num = contenidos.length;
		for (var j = 0; j <= num; j++) {
			if( typeof( contenidos[j] ) != 'undefined' ) {
										
				var cnt = contenidos[j];	
				
				var nombre = cnt.info.title;
				var media = cnt.media;
				var cntDiv = mediaDiv("contenido",nombre);//$('<div>').addClass('marker media');		
				
				cntDiv.find('.screenbutton').click(function(){
					console.log (  "SCR", $(this).parent().parent().index(), $(this).index() );
					abrirContenido (  contenidos[ $(this).parent().parent().index() ], $(this).index() );
				});		
				cntDiv.css({left:( $(window).width() / num ) * j })
				nDiv.append( cntDiv );
				
			}
		}
	}

}


function abrirSeccion( seccion ) {

	var nDiv = $('#secuencias_timeline .markers');
	nDiv.html('');
	var secuencias = seccion.secuencias;
	if( typeof( secuencias ) != 'undefined' ) {
		var num = secuencias.length;
		for (var j = 0; j <= num; j++) {
			if( typeof( secuencias[j] ) != 'undefined' ) {
				

						
				var seq = secuencias[j];	
				var nombre = seq.title;

				var seqDiv = $('<div>').addClass('marker secuencia');		
				seqDiv.html( nombre );
				seqDiv.click(function(){
					abrirSecuencia (  secuencias[ $(this).index() ] );
				});		
				seqDiv.css({left:( $(window).width() / num ) * j })
				nDiv.append( seqDiv );
				

			}
		}
	}

}


function drawTimeline() {
	
	
	var nDiv = $('#secciones_timeline .markers');
	var num = n.narrativa.secciones.length;
	for( var i = 0; i < num; i++ ) {

		var seccion = n.narrativa.secciones[i];	
		var nombre = seccion.title;
		var secuencias = seccion.secuencias;
		var seccionDiv = $('<div>').addClass('marker seccion').html( n.narrativa.secciones[i].title );		
		seccionDiv.click(function(){
			abrirSeccion (  n.narrativa.secciones[ $(this).index() ] );
		});		
		seccionDiv.css({left:( $(window).width() / num ) * i })
		nDiv.append( seccionDiv );
	
	}



}
