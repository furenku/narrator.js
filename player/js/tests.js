content_tests = function() {

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
}


structure_tests = function(){

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

	n.gui = new NarratorGUI();
	n.gui.setupGUI();

	for(var i = 0; i<3; i++) {
		s = new Section( "section" + ( i + 1 ) );

		for(var j = 0; j<3; j++) {
			q = new Sequence( "seq" + ( j + 1 ) );
			q.addItem( c ); 
			s.addItem( q );
		}
		n.addSection( s );
	}

}




transport_tests = function() {
	n.play();
	n.pause();
	n.stop();

	for(var i = 0; i<10; i++) {
		n.fwd();
	}
	for(var i = 0; i<10; i++) {
		n.rew();
	}

}
