
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


Sequence = function( name_ ) {

	ElementList.call( this, name_ );

	this.type = "sequence";

}

inheritPrototype( Sequence, ElementList );



Section = function( name_ ) {

	ElementList.call( this, name_ );

	this.type = "section";
	
}

inheritPrototype( Section, ElementList );



Narrative = function( name_ ) {

	ElementList.call( this, name_ );

	this.type = "narrative";

}

inheritPrototype( Narrative, ElementList );

