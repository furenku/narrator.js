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
	return this;
}


function Seccion(){
	this.name = "";
	this.secuencias = Array();
	return this;
}

function Narrativa() {
	this.name = "";
	this.secciones = Array();
	return this;
}



function Narrator() {

	this.playing = 0;



}