var twitterPlay = false;
var max_id
var tweets = Array();
var tweetsID = Array();
var newTweets = Array();

var loaded = false;
var prevSearch;


tweets = Array();
tweetsID = Array();
var searchTW = function(){
	if( twitterPlay ) {

		var search = $('#search input').val();

		search = search.replace(" " ,"%20");
		search = search.replace("á" ,"a");
		search = search.replace("é" ,"e");
		search = search.replace("í" ,"i");
		search = search.replace("ó" ,"o");
		search = search.replace("ú" ,"u");
		search = search.replace("ñ" ,"n");
		
		$.ajax({
			url:'http://localhost/web/twitterServer/search.php',
			datatype:'jsonp',
			data: {q: search },
			success: function( response ){
				prevSearch = search;
				json = $.parseJSON( response );
				var changed = false;
				newTweets = Array();
				for(i in json.statuses){	
					
					if( tweetsID.indexOf( json.statuses[i].id ) == -1 ) {
						tweetsID.push( json.statuses[i].id )
						if( ! loaded ) 
							tweets.push( json.statuses[i] )
						else
							tweets.unshift( json.statuses[i] )

						newTweets.push( json.statuses[i] )
						changed = true;
					}

				}

				if(tweets.length>0)
					loaded = true;

				
				if( changed ) {
					$('#twitter #tools #notify').animate({color:'#4099ff'},300,function(){
						$('#twitter #tools #notify').animate({color:'#666'},3000);
					})
					//$('#tweetDB').html('');
					//$('#twitter_media .scrollX').html("");
					console.log(tweets[0])
					for( i in tweets ) {
						tweet = $('<div>').addClass("medium-12 columns tweet");
						if( typeof(tweets[i].user) != "undefined" )
						tweet.append( '<div class="row user"><div class="avatar small-3 medium-2 columns"><img src="' + tweets[i].user.profile_image_url +'"></div><div class="name small-9 medium-10 end columns">'+tweets[i].user.screen_name+'</div>' );					
						tweet.append( '<div class="row date">' + moment( new Date( tweets[i].created_at)).fromNow() + '</div>' );					
						tweet.append( '<div class="row text">' + tweets[i].text + '</div>' );					
						tweet.append( '<div class="row media_display"></div>' );					
						if( typeof(tweets[i].entities) != "undefined" ) {
							
							var media = tweets[i].entities.media ;
							if( typeof(tweets[i].entities.media) != "undefined" ) {
								for( j in media ) {

									if( media[j].type == "photo" ) {

										tweet.find('.media_display').append( $('<div>').addClass('media').html(
											$('<a>').attr('href',media[j].media_url ).html(
											$('<img>').attr('src',media[j].media_url ) ) ) );
									}
								}
							}
						}
						$('#tweetDB').append( tweet );					
					}

					for( var i = newTweets.length - 1; i>=0; i-- ) {
						var newTweet = newTweets[ i ];
						tweet = $('<div>').addClass("medium-12 columns tweet");
						if( typeof(newTweet.user) != "undefined" )
						tweet.append( '<div class="row user"><div class="avatar small-4 medium-3 large-3 columns"><img src="' + newTweets[i].user.profile_image_url +'"></div><div class="name small-8 medium-9 large-9 columns">'+newTweets[i].user.screen_name+'</div>' );					
						tweet.append( '<div class="row date">' + moment( new Date( newTweet.created_at)).fromNow() + '</div>' );					
						tweet.append( '<div class="row text">' + newTweet.text + '</div>' );					
						tweet.append( '<div class="row media_display"></div>' );					
						if( typeof(newTweet.entities) != "undefined" ) {
							
							var media = newTweet.entities.media ;
							if( typeof(newTweet.entities.media) != "undefined" ) {
								for( j in media ) {

									if( media[j].type == "photo" ) {

										tweet.find('.media_display').append( $('<div>').addClass('media').html(
											$('<a>').attr('href',media[j].media_url ).html(
											$('<img>').attr('src',media[j].media_url ) ) ) );
									}
								}
							}
						}
						$('#tweets').prepend( tweet );					
					}
				}	
				max_id = json.search_metadata.max_id;
				if( max_id != json.search_metadata.max_id ) {
					max_id == json.search_metadata.max_id;
					alert("new maxid: "+ max_id);
				}


			}
		})

		var pantallaIndex = 0;
		var twitterIndex = 0;
		function twitterFill(){
			var tweets = $('#tweetDB .tweet');
			var tweet = tweets.eq( twitterIndex );

			var pantallas = $('#pantallas .pantalla');
			var pantalla =  pantallas.eq( pantallaIndex );

			var div  = $('<div>').attr('id',"tweet_"+Math.floor(Math.random()*10000)).attr('class',"tweet contenedor");


			var dW = pantalla.width() * 0.8;
			var dH = pantalla.height() * 0.8;

			var randW = ( dW * 0.5 * Math.random() ) + (pantalla.width() * 0.25 );
			var randH = ( dH * 0.5 * Math.random() ) + (pantalla.height() * 0.25 );

			var randY = ( dH * Math.random() ) + (pantalla.height() * 0.1 );
			if( randY > dH - randH ) {
				randY = dH - randH ;
			}
			var randX = ( dW * Math.random() ) + (pantalla.width() * 0.1 );
			if( randX > dW - randW ) {
				randX = dW - randW ;
			}
			
			div.css({ left: randX, top: randY, fontSize: dH / 30 });
			div.css({ border: '1px solid #444', color: "#ffffff" });
			div.html(tweet);
			div.animate({ opacity: 0 },8000,function(){div.remove()});
			//div.animate({ opacity: 0, top: randY - 20, left: randX - 50 },8000,function(){div.remove()});
			// div.addClass('scaler');
			// div.css({ transform: 'scale(0)' });

			pantalla.append( div );
			pantallaIndex++;
			if( pantallaIndex > pantallas.length )
				pantallaIndex = 0;
			
			twitterIndex++;
			if( twitterIndex > tweets.length )
				twitterIndex = 0;
		}
		clearInterval( twitterAnimation );
		twitterAnimation = setInterval(twitterFill, 1000);

	}
};
var search = $('#search input');

search.on("click",function(e){
	search.val("");
});


$('#tools .toggle').click(function(){
	var boton = $(this);
	$('#tools .toggle').removeClass('active');
	boton.addClass('active');
});


$('#tools #play').click(function(){
	var boton = $(this);
	boton.toggleClass('active');
	if( boton.hasClass('active') ) {
		twitterPlay = true;
	} else {

		twitterPlay = false;
	}
});


var twitterAnimation;
var twitterSearch;
$('#search .boton').click(function(){
	
	tweets = Array();
	tweetsID = Array();
	$('#twitter #tweetDB').html('');	
	$('#twitter #tweets').html('');	
	searchTW();
	clearInterval( twitterSearch );
	twitterSearch = setInterval(searchTW,12000);
})
//searchTW();