Narrator = function() {

	this.n = new Narrative("A19");
	this.name="narrA19";
	this.playing = false;
	this.playhead = 0;

	gui = new NarratorGUI( this );

	currentSection = 0;
	currentSequence = 0;
	currentContent = 0;


	this.narration = 0;


	this.play = function() {
		n.jump( this.playhead );
	}
	this.pause = function() {
		this.playing = false;
		console.log( "pause" );
	}
	this.stop = function() {
		clearInterval(this.narration)

		this.n.getItem( this.playhead ).reset();
		gui.clearScreens();
		this.playing = false;
		console.log( "stop" );
		this.playhead = 0;
		gui.placeCover();
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

		this.playhead = index;

		gui.clearScreens();

		this.n.getItem( this.playhead ).reset();
		

		//clog( currentSection );
		//this.jump( this.playhead ):

		gui.removeCover();

		currentSection = this.n.getItem( index );

		
		if( currentSection == false ) {
			this.stop();
		} else {
			currentSection.reset();
			currentSequence = currentSection.getItem(0); 
			currentContent = currentSequence.getItem(0); 

			currentContent.startTime = currentSequence.startTime = new Date().getTime();
		}
		console.log(currentSection)
		console.log(currentSequence)
		console.log(currentContent)

		$('.markers .marker').siblings().removeClass('current')
		$('.markers .marker').eq(index).addClass('current')
		
		gui.removeCover();
		

		if(typeof(this.narration)!="undefined")
		clearInterval(this.narration)
		this.narration = setInterval( n.narrate,1000);

		this.playing = true;
	}

	this.previousContent = function() {
		currentContent = currentSequence.previous();
	}
	this.nextContent = function() {
		currentContent = currentSequence.next();
		if(currentContent==="done" && typeof( currentContent ) != "undefined" ) {
			console.log("currentContent",done)
		currentContent.started=false;

			currentSequence = currentSection.next();
			if( currentSequence != "done" && typeof(currentSequence) != "undefined" ) {
				var items = currentSequence.getItems();
				for( var h = 0; h<items.length; h++) {
					items[h].started=false;
					currentSequence.started=false;
				}
			}
		}
		if(currentSection==="done")
			this.stop()

		console.log(currentContent)
	
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
	

	this.loadDB = function( callback ) {
		$.ajax({
			url: 'http://localhost/web/A19/db',
			//url: 'http://162.243.159.61/furenku/A19/?page_id=80',
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
							 					mediaObject.playback = contents[k].playback;	
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


	this.testDB = function() {
		//console.log("testDNB!");
//console.log("sectionObjects",sectionObjects)
		loadSections( sectionObjects );
		drawSections( sectionsHTML );


		//gui.placeCover();

		
	}
	
	this.testVimeo = function() {
		gui.openVimeo(0);
	}


	this.getCurrentContent = function() {
		return currentContent;
	}

	lastTime = 0;
	this.narrate = function() {
		
		var newTime = new Date().getTime();
		console.log( newTime );
		lastTime = newTime;
		console.log(  newTime,  currentContent.startTime + currentContent.getItem(0).playback.duracion * 1000 );
		if(  newTime > currentContent.startTime + currentContent.getItem(0).playback.duracion * 1000 ){
			currentContent.done = true;
		
		}
		if( currentContent.done ) {
			console.log( "done!" )
		}
		/*
		if( ! currentSection )
			clearInterval(this.narration)
		else {
			//currentContent = currentSequence.next();
			if( typeof( currentContent ) == "undefined" || currentContent === "done" )
				currentContent = currentSequence.next();
			else {
				if( currentContent.done  )
					currentContent = currentSequence.next();
			}
		
			if( currentContent != false && currentContent != "done" && typeof( currentContent ) != "undefined" ) {
				console.log("currentContent:",currentContent)
				if( ! currentContent.started  ) {
					for (var i = currentContent.getItems().length - 1; i >= 0; i--)		 {
						//lastTime = new Date();
						gui.openContent( currentContent.getItems()[i] )
						//var contentType = currentContent.getItems()[i].getType();

					}
					currentContent.started = true;
				}	
			} 

			if(currentContent === "done" || ! currentContent ) {
				currentContent = currentSequence.next();
				if( currentSequence != "done" && typeof(currentSequence) != "undefined" ) {
					var items = currentSequence.getItems();
					for( var h = 0; h<items.length; h++) {
						items[h].started=false;
						currentSequence.started=false;
					}
				}

				
			}			
		
			if( currentSequence==="done") narrator.fwd();

			
		}

		*/

		console.log("narrate!")
	}



}