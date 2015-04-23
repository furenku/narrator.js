Narrator = function() {

	this.n = new Narrative("A19");

	this.playing = false;
	this.playhead = 0;

	gui = new NarratorGUI( this );


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


	drawSections = function( sections ) {
		gui.createSectionMenu( sections );
	}

	loadSections = function( sections ) {
		for( var i=0; i< sections.length; i++ ) {
			this.n.addSection( sections[i] )
		}

		console.log( this.n )
	}
	

	this.loadDB = function() {
		$.ajax({
			url: 'http://localhost/web/A19/db',
			dataType: 'json',
			success: function( data ) {
				
				sectionsHTML = [];
				sectionObjects = [];
				
				for(var i=0; i < data.length; i++) {
					var section = data[i];		
					if( typeof( section.sequences ) != "undefined" ) {

						var sequences = section.sequences;
						sectionObject = new Section(section.name);
						sectionObject.setType('section');

						for(var j=0; j<sequences.length; j++){
							var sequence = sequences[j];
							var contents = sequence.contents;
							
							sequenceObject = new Sequence(sequence.name);
							sequenceObject.setType('linear');
							
							for(var k=0; k<contents.length; k++  ){
								
								var contentMedia = contents[k].media;
								contentObject = new Content( contents[k].info.name )
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
								 				mediaObject = new Text('text');

									 		if( type === "images" )
								 				mediaObject = new Image('img');

									 		if( type === "videos" )
								 				mediaObject = new Video('video');

									 		if( type === "audios" )
								 				mediaObject = new Sound('sound');

									 		if( type === "tweet_ids" )
								 				mediaObject = new Tweet('tweet');

									 		if( type === "urls" )
								 				mediaObject = new Url('url');

									 		if( type === "htmls" )
								 				mediaObject = new Embed('html');


								 			if( typeof(mediaObject)!="undefined") {
							 					mediaObject.setMedia( mediaItem );
							 					contentObject.addItem( mediaObject );
								 			}

						 					

									 	}
									}
								}
								sequenceObject.addItem( contentObject );
							}
							sectionObject.addItem( sequenceObject );
						}
						sectionObjects.push( sectionObject );
						sectionsHTML.push( section );
					}
		
				}
			
				loadSections( sectionObjects );
				drawSections( sectionsHTML );
			}
		});
	}

}