Narrator = function() {

	this.n = new Narrative("A19");
	this.name="narrA19";
	this.playing = false;
	this.playhead = 0;

	gui = new NarratorGUI( this );

	currentSection = 0;
	currentSequence = 0;
	currentContent = 0;

	this.play = function() {
		
		clearInterval(narration)
		narration = setInterval( n.narrate,1);

		this.playing = true;
		console.log( "play" );
		//this.jump( this.playhead ):
	}
	this.pause = function() {
		this.playing = false;
		console.log( "pause" );
	}
	this.stop = function() {
		this.n.getItem( this.playhead ).reset();
		gui.clearScreens();
		this.playing = false;
		console.log( "stop" );
		this.playhead = 0;
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
		currentSection = this.n.getItem( index );
		
		if( currentSection == false ) {
			this.stop();
		} else {
			currentSection.reset();
			currentSequence = currentSection.getItem(0); 
			currentContent = currentSequence.getItem(0); 
		}

	}

	this.previousContent = function() {}
	this.nextContent = function() {}


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
	

	this.loadDB = function( callback ) {
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
								clog( contents[k] );
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

											if( type === "vimeoids" )
								 				mediaObject = new VimeoID('html');


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
				
				callback();
			}
		});
	}

	narration = 0;

	this.testDB = function() {
		console.log("testDNB!");

		loadSections( sectionObjects );
		drawSections( sectionsHTML );


		n.jump( 0 );
		//clog( currentSection );
		clearInterval(narration)
		narration = setInterval( n.narrate,100);
	}
	
	this.testVimeo = function() {
		gui.openVimeo(0);
	}


	this.getCurrentContent = function() {
		return currentContent;
	}

	this.narrate = function() {
		if( ! currentSection )
			clearInterval(narration)
		else {
			//currentContent = currentSequence.next();
			if( typeof( currentContent ) == "undefined" )
				currentContent = currentSequence.next();
			else {
				if( currentContent.done  )
					currentContent = currentSequence.next();
			}
		
			if( currentContent != "done" && typeof( currentContent ) != "undefined" ) {

				if( ! currentContent.started  ) {
					for (var i = currentContent.getItems().length - 1; i >= 0; i--)		 {
						//lastTime = new Date();
						gui.openContent( currentContent.getItems()[i] )
						//var contentType = currentContent.getItems()[i].getType();

					}
					currentContent.started = true;
				}	
			} else {
				currentSequence = currentSection.next();
				console.log( currentSequence )
			}			
		
			if( currentSequence=="done") this.fwd();

			
		}
	}
}