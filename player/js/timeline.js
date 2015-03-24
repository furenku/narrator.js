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
		console.log( "IMPLEMENTAR: duracion real");

		var duracion = 5000;
		seccion.duracion = duracion;
		Clase.narrativa.secciones.push( seccion );
	}

	return this;
}





var n = Narrator();



$.ajax({
	url: 'http://localhost/web/A19/db',
	dataType: 'json',
	success: function( data ) {

		for(i in data) {

			var seccion = data[i];		
			if( typeof( seccion.secuencias ) != "undefined" ) {
				if( seccion.secuencias.length > 0 ) {
					
					n.narrativa.secciones.push( seccion );	

						seqDiv.append( h( 6, "inicio: "+ Math.floor( secuencias[j].ms / 60 ) + ":" + n( secuencias[j].ms % 60 )) );
						seqDiv.append( h( 6, "duracion: "+ Math.floor( secuencias[j].duracion / 60000 ) + ":" + n( (secuencias[j].duracion/1000) % 60 )) );


				}
			}

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







function abrirSeccion( seccion ) {

		for (var j = 0; j <= secuencias.length; j++) {
			if( typeof( secuencias[j] ) != 'undefined' ) {
				console.log( secuencias[j] )
			}
		}


}


function drawTimeline() {
	
	var nDiv = $('#narrativa');

	for( i in n.narrativa.secciones ) {


		var seccion = n.narrativa.secciones[i];
		
	
		var nombre = seccion.title;
		
		var secuencias = seccion.secuencias;

		
		
		var seccionDiv = $('<div>').addClass('seccion');
		
		seccionDiv.append( nombre );

		seccionDiv.click(function(){
			abrirSeccion ( seccion );
		});
		
		nDiv.append( seccionDiv );
	
	}
}
