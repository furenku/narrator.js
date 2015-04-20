
Content = function( name_ ) {

	ElementList.call( this, name_ );

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
