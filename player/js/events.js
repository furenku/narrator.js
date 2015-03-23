function Event() {

	this.name = "";
	this.id = -1;
	this.parameters = Array();
	this.triggered=false;
	var Class = this;

	this.function = function(){
		console.log( "Event: "+ Class.name );
	}


	this.execute = function() {
		Class.function();
	}

	return this;

}

// change section
// change seq

// 

function MediaEvent() {

}