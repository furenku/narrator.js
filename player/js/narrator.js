$.when(
    $.getScript( "js/narrator_utils.js" ),
    $.getScript( "js/narrator_base.js" ),
    $.getScript( "js/narrator_media.js" ),
    $.getScript( "js/narrator_structures.js" ),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
).done(function(){
   
	c = new Content( "tst_cnt" );

	m = new Video( "tstVideo" ); m.setMedia( "Video!" );
	c.addItem( m );
	m = new Text( "tstText" ); m.setMedia( "Text!" );
	c.addItem( m );
	m = new Image( "tstImage" ); m.setMedia( "Image!" );
	c.addItem( m );
	m = new Sound( "tstSound" ); m.setMedia( "Sound!" );
	c.addItem( m );
	m = new Embed( "tstEmbed" ); m.setMedia( "Embed!" );
	c.addItem( m );
	m = new Tweet( "tstTweet" ); m.setMedia( "Tweet!" );
	c.addItem( m );
	

	q = new Sequence( "seq1" );
	q.addItem( c );

	s = new Section( "section1" );
	s.addItem( q );

	n = new Narrative( "n1" );
	n.addItem( s );


	console.log("CHECK:", n.next().next().next().next() );
//	console.log( l.items );

/*
	console.log( c.next() );
	console.log( c.next() );
	console.log( c.next() );
	console.log( c.next() );
	console.log( c.next() );
	console.log( c.next() );
	console.log( c.next() );
	console.log( c.next() );
	console.log( c.next() );
	console.log( c.next() );
	
	console.log( c.previous() );
	console.log( c.previous() );
	console.log( c.previous() );
	console.log( c.previous() );
	console.log( c.previous() );
	console.log( c.previous() );
	console.log( c.previous() );
	console.log( c.previous() );
	console.log( c.previous() );
	console.log( c.previous() );
*/	

/*
	console.log( l.getItem(0) );
	console.log( l.getItem(3) );
	console.log( l.getItems() );
*/

//	console.log( c.getMedia() )

})