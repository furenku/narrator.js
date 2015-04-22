
Content = function( name_ ) {

	ElementList.call( this, name_ );

	this.type = "content";

}

inheritPrototype( Content, ElementList );

Content.prototype.removeMedia = function( media_ ) {
	var index = -1;
	for(i in this.items ) {
		if( this.items[i].media === media_ ) {
			index = i;
		}
	}
	this.items.splice( index, 1 );
}

Content.prototype.next = function() {
	var n = ElementList.prototype.next.apply(this);
	console.log("Content NEXT::::", n);
	return n;
}



Sequence = function( name_ ) {

	ElementList.call( this, name_ );

	this.type = "sequence";

}

inheritPrototype( Sequence, ElementList );


Sequence.prototype.next = function() {
	var n = ElementList.prototype.next.apply(this);	
	console.log("Sequence NEXT::::", n.next());
	return n;
}


Section = function( name_ ) {

	ElementList.call( this, name_ );

	this.type = "section";
	
}

inheritPrototype( Section, ElementList );

Section.prototype.next = function() {
	var n = ElementList.prototype.next.apply(this);
	console.log("Section NEXT::::", n.next());
	return n;
}



Narrative = function( name_ ) {

	ElementList.call( this, name_ );

	this.type = "narrative";

}

inheritPrototype( Narrative, ElementList );


Narrative.prototype.next = function() {	
	var n = ElementList.prototype.next.apply(this);
	if( n!="done" && n!=false) {
		
	} 
	else {

	}
	//console.log("Narrative NEXT::::", n.next());
	return n;
}