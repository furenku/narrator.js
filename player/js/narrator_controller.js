Narrator = function() {

	this.n = new Narrative("A19");
	
	this.playing = false;
	this.playhead = 0;

	gui = new NarratorGUI( this );

	var sections = [];

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


	loadSections = function( sections ) {
		gui.createSectionMenu( sections );
	}


	this.loadDB = function() {
		$.ajax({
			url: 'http://localhost/web/A19/db',
			dataType: 'json',
			success: function( data ) {
				
				for(var i=0; i < data.length; i++) {
					var section = data[i];		

					if( typeof( section.sequences ) != "undefined" ) {

						var sequences = section.sequences;
						for(var j=0; j<sequences.length; j++){
							var contents = sequences[j].contents;
							for(var k=0; k<contents.length; k++  ){
								
								var contentMedia = contents[k].media;

								for(var l=0; l < contentMedia.length; l++ ){
									var type = contentMedia[l].type;
									var mediaItems = contentMedia[l].media;
									
									for( m in mediaItems ){
										var mediaItem = mediaItems[m];
									 	if( mediaItem != ""
									 		&& typeof(mediaItem) != "undefined"
									 		&& typeof(mediaItem) != "function" ) {

									 		
									 		var mediaObject;
									 		if( type === "texts" )
								 				mediaObject = new Text('img_name');

									 		if( type === "images" )
								 				mediaObject = new Image('img_name');

									 		if( type === "videos" )
								 				mediaObject = new Video('img_name');

									 		if( type === "audios" )
								 				mediaObject = new Sound('img_name');

									 		if( type === "tweet_ids" )
								 				mediaObject = new Tweet('img_name');

									 		if( type === "urls" )
								 				mediaObject = new Url('img_name');

									 		if( type === "htmls" )
								 				mediaObject = new Embed('img_name');


								 			if( typeof(mediaObject)!="undefined")
							 					mediaObject.setMedia( mediaItem );

						 					console.log( mediaObject );

									 	}
									}
								}
							}
						}
						sections.push( section );
					}
		
				}
			
				loadSections( sections );
			}
		});
	}

}