
Content = function( name_, type_ ) {

	Element.call( this, name_ );

	this.type = type_;
	
	this.media = [];

}

inheritPrototype( Content, Element );

Content.prototype.addMedia = function( media_ ) {
	this.media.push( media_ );
}
Content.prototype.getMedia = function( index_ ) {
	console.log( 'get media index:', index_ );
}
Content.prototype.getMedia = function() {
	console.log( this.media );
}

Content.prototype.removeMedia = function( media_ ) {
	var index = -1;
	for(i in this.media ) {
		if( this.media[i].media === media_ ) {
			index = i;
		}
	}
	this.media.splice( index, 1 );
}
