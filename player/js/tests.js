
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
	
	n = new Narrator();

	for(var i = 0; i<10; i++) {
		s = new Section( "section" + ( i + 1 ) );

		for(var j = 0; j<10; j++) {
			q = new Sequence( "seq" + ( j + 1 ) );
			q.addItem( c ); 
			s.addItem( q );
		}
		n.addSection( s );
	}
	n.play();
	
/*

*/		

//	console.log("CHECK:", n.next().next().next().next() );
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