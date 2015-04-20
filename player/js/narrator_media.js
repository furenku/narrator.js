Media = function( name_, type_ ) {
	Element.call( this, name_ );

	this.type = type_;
	
	this.media = "";

}

inheritPrototype( Media, Element );

Media.prototype.setMedia = function( media_ ) {
	this.media = media_;
}
Media.prototype.getMedia = function() {
	return this.media;
}
Media.prototype.setType = function( type_ ) {
	this.type = type_;
}
Media.prototype.getType = function() {
	return this.type;
}



Image = function( name_ ) {

	Media.call( this, name_, "image" );

	
}

inheritPrototype( Image, Media );

Video = function( name_ ) {
	Media.call( this, name_, "video" );
}

inheritPrototype( Video, Media );


Text = function( name_ ) {
	Media.call( this, name_, "text" );
}

inheritPrototype( Text, Media );


Sound = function( name_ ) {
	Media.call( this, name_, "sound" );
}

inheritPrototype( Sound, Media );


Embed = function( name_ ) {
	Media.call( this, name_, "embed" );
}

inheritPrototype( Embed, Media );


Tweet = function( name_ ) {
	Media.call( this, name_, "tweet" );
}

inheritPrototype( Tweet, Media );

