Narrator = function() {

	this.n = new Narrative("A19");
	
	this.playing = false;
	this.playhead = 0;

	gui = false;

	this.play = function() {
		this.playing = true;
		console.log( "play" );
		console.log( this.n.next() );
	}
	this.pause = function() {
		this.playing = false;
		console.log( "pause" );
	}
	this.stop = function() {
		this.playing = false;
		console.log( "stop" );
	}
	this.rew = function() {
		this.playhead = wrap( this.playhead - 1, this.n.items );
		this.jump( this.playhead )
	}
	this.fwd = function() {
		this.playhead = wrap( this.playhead + 1, this.n.items );		
		this.jump( this.playhead )
	}
	this.jump = function( index ) {
		console.log( "jump", this.n.getItem( index ) );
	}

	this.addSection = function( section ) {		
		if( section.getType() === "section")
			this.n.addItem( section );
	}


}