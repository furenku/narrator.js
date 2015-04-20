$.when(
    $.getScript( "js/narrator_utils.js" ),
    $.getScript( "js/narrator_base.js" ),
    $.getScript( "js/narrator_media.js" ),
    /*
    $.getScript( "js/narrator_content.js" ),
    $.getScript( "js/narrator_sequence.js" ),
    */
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
).done(function(){
    
/*
	c = new Content( "tst_cnt" );

	m = new Video( "tstVideo" ); m.setMedia( "Video!" );
	c.addMedia( m );
	m = new Text( "tstText" ); m.setMedia( "Text!" );
	c.addMedia( m );
	m = new Image( "tstImage" ); m.setMedia( "Image!" );
	c.addMedia( m );
	m = new Sound( "tstSound" ); m.setMedia( "Sound!" );
	c.addMedia( m );
	m = new Embed( "tstEmbed" ); m.setMedia( "Embed!" );
	c.addMedia( m );
	m = new Tweet( "tstTweet" ); m.setMedia( "Tweet!" );
	c.addMedia( m );
	
*/

	var l = new ElementList( "" );

	l.addItem( 1 );
	l.addItem( 2 );

//	console.log( l.items );
	console.log( l.next() );
	console.log( l.next() );

	console.log( l.getItem(0) );
	console.log( l.getItem(3) );
	console.log( l.getItems() );


//	console.log( c.getMedia() )

})