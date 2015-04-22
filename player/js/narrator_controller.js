Narrator = function() {

	this.n = new Narrative("A19");
	
	this.playing = false;
	this.playhead = 0;
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
		console.log( "rew", this.playhead );
	}
	this.fwd = function() {
		this.playhead = wrap( this.playhead + 1, this.n.items );		
		console.log( "fwd", this.playhead );
	}
	this.jump = function( index ) {
		console.log( "rew", index );
	}

	this.addSection = function( section ) {		
		this.n.addItem( section );
	}


}