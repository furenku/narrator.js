Narrator = function() {

	this.n = new Narrative("A19");
	this.name="narrA19";
	this.playing = false;
	this.playhead = 0;
	narrator = this;	
	gui = new NarratorGUI( this );

	currentSection = 0;
	currentSequence = 0;
	currentContent = 0;


	this.narration = 0;

	this.videoPosition = -1;



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
		

		//console.log( currentSection );
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
/*
		console.log(currentSection)
		console.log(currentSequence)
		console.log(currentContent)
*/
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

	this.playCurrentContent = function() {

		console.log("playContent:", currentContent.name)
		
		if( currentContent==="done" ) {
			
			currentContent.started=false;

			currentSequence = currentSection.next();
			if( currentSequence != "done" && typeof(currentSequence) != "undefined" ) {			
				currentSequence.reset();
			}
		}
		if( currentSequence === "done" ) {
			clog( "IMPLEMENT currSeq Done" )
		}
		if(currentSection==="done")
			this.stop()

	}

	this.nextContent = function() {
		console.log("nextContent():")
		if( 1 ) { //currentContent.started ) {

			if( currentContent.started ) {
				currentContent = currentSequence.next();
				console.log( currentContent, currentSequence )
			}

			if( currentContent != "done" && typeof( currentContent ) != "undefined" )  {

				currentContent.reset();

				if( currentContent.getType() === "vimeoid" ) {
					this.playCurrentContent();
					vimeoContent = currentContent;
					narrator.nextContent();
				}
				else if( currentSequence.vimeoPlaying ) {
					var startSeconds = currentContent.getItem(0).playback.inicio ;
					if ( startSeconds > 1 )
						startSeconds -= 1;
					
					if ( startSeconds > 0 )
						gui.seekVimeo( startSeconds )

				}

			}
			if(currentContent!=="done" && typeof( currentContent ) != "undefined" ) 

			this.playCurrentContent();
		}
	
	}

	this.jumpToSequence = function(i) {
		currentSequence = currentSection.getItem( i );
		currentSequence.reset();
		this.nextContent();	
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

		//console.log( this.n )
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
								console.log( contents[k] );
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
									 		var mediaType = "";
									 		if( type === "texts" ) {
								 				mediaType = 'text';
								 				mediaObject = new Text(mediaType);
									 		}

									 		if( type === "images" ) {
								 				mediaType = 'image';
								 				mediaObject = new Image(mediaType);
									 		}

									 		if( type === "videos" ) {
								 				mediaType = 'video';
								 				mediaObject = new Video(mediaType);
									 		}

									 		if( type === "audios" ) {
								 				mediaType = 'sound';
								 				mediaObject = new Sound(mediaType);
									 		}

									 		if( type === "tweet_ids" ) {
								 				mediaType = 'tweet';
								 				mediaObject = new Tweet(mediaType);
									 		}

									 		if( type === "urls" ) {
								 				mediaType = 'url';
								 				mediaObject = new Url(mediaType);
									 		}

									 		if( type === "htmls" ) {
								 				mediaType = 'html';
								 				mediaObject = new Embed(mediaType);
									 		}

											if( type === "vimeoids" ) {
								 				mediaType = 'vimeoid';
								 				mediaObject = new VimeoID(mediaType);
											}


								 			if( typeof(mediaObject)!="undefined") {
							 					mediaObject.setMedia( mediaItem );
							 					mediaObject.playback = contents[k].playback;	
							 					contentObject.addItem( mediaObject );
						 						contentObject.setType( mediaType );
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


	this.videoFwd = function (data){
		this.videoPosition = data.seconds;
		//console.log("video:"+this.videoPosition)
	}

	this.vimeoPlaying = function() {
		currentSequence.vimeoPlaying = true;
	}
	
	this.vimeoFinished = function() {
	    currentSequence.vimeoPlaying = false;
	    console.log("vimeo finished!")
	}

	this.vimeoSeek = function(data) {

		var s = data.seconds;
		console.log( "seek ", s )

		setCurrentItem = false;
		for(var i = 0; i < currentSequence.getItems().length; i++) {
			var item = currentSequence.getItem(i).getItem(0);
			var inicio = item.playback.inicio;
			//console.log( inicio )
			if( inicio > s ) {
				if( ! setCurrentItem ){
					currentSequence.done = false;
					currentSequence.currentItem = i;
					currentSequence.getItem( i ).reset();
					currentSequence.startTime = new Date().getTime() - (s*1000);

					//console.log( currentSequence.startTime )
					currentContent = currentSequence.getItem(i);
					//console.log("reset:", currentSequence.getItem( i ).name, "curr:",  currentContent.name)
					setCurrentItem = true;
				}
				item.started = false;
			}

		}

	}

	this.getCurrentContent = function() {
		return currentContent;
	}

	lastTime = 0;
	this.narrate = function() {

		var newTime;
		
		if( n.videoPosition >= 0 ) {
			newTime = currentSequence.startTime + ( n.videoPosition * 1000 );
			//console.log( newTime )
		}
		else {
			newTime = new Date().getTime();
		}

		lastTime = newTime;


		if( ! currentSection )
			clearInterval(this.narration)
		else {
			//currentContent = currentSequence.next();
			if( typeof( currentContent ) == "undefined" || ! currentContent ) 
			{

				currentContent = currentSequence.next();
				currentContent.startTime = newTime;
				//console.log("open", currentContent)

			}
			if( currentContent === "done" ) {

				console.log("DONE!" )
				if( currentSequence !== "done" && typeof(currentSequence) != "undefined" ) {
		
		
					currentContent = currentSequence.next();
					currentContent.startTime = newTime;

	
					var items = currentSequence.getItems();
					for( var h = 0; h<items.length; h++) {
						items[h].started=false;
						currentSequence.started=false;
					}
					if( currentContent === "done" && ! currentSequence.vimeoPlaying ) {
						//console.log("newsq",currentSequence)
						currentSequence = currentSection.next();
						currentSequence.startTime = newTime;
					}
				}


				
				
			}
			else {

				if( currentContent != "done" ) {

					var timeToStartContent = false;

					var contentTime = currentContent.getItem(0).playback.inicio * 1000;
					var sequenceTime = currentSequence.startTime;

					//console.log("cCCC", currentSequence.startTime , currentContent.startTime )

					if( newTime > ( contentTime + sequenceTime  ) || contentTime == 0 ) {
						timeToStartContent = true;
					} else {
						gui.disableNext();

					}

					if( ! currentContent.started && timeToStartContent ) {
						
						//console.log("currentContent:",currentContent)
						
						for (var i = 0; i < currentContent.getItems().length; i++) {
							gui.clearContentScreen();
							gui.openContent( currentContent.getItems()[i] );
							if( currentContent.getType() === "vimeoid" ) {
								currentContent.done = true;
							}
							

						}
						currentContent.started = true;

						gui.enableNext();
					}	
					
					if(  currentContent.started  && newTime > contentTime + sequenceTime +  currentContent.getItem(0).playback.duracion * 1000 && contentTime > 0 ){
						currentContent.done = true;
					
					}

					

					if( currentContent.done ) {
					
						gui.clearContentScreen();
						//console.log("clear()ar gui!!")

						narrator.nextContent();

					}
				}
				else {
						console.log( "DINE!")
				}
			}
		
			
					

			if( currentSequence==="done") narrator.fwd();

			
		}

		//console.log("narrate!")

	}


}