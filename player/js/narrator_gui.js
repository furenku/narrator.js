NarratorGUI = function( parent ) {

	gui = this;
	gui.controller = parent;
	//console.log(this.controller.currentContent )
	this.setupGUI = function(){

		// crear botones para distintas secciones

	}

	$('#prev_arrow, #transport_prev').click(function(){
		if( ! $(this).hasClass('disabled') ) {			
			narrator.previousContent();
		}
	})
	$('#next_arrow, #transport_next').click(function(){
		if( ! $(this).hasClass('disabled') ) {			
			gui.clearContentScreen();
			narrator.nextContent( true );
		}
	})
	$('#transport_play').click(function(){
		narrator.play();
	})
	$('#transport_stop').click(function(){
		narrator.stop();
	})

	this.createSectionMenu = function( sections ) {

		for( var i = 0; i < sections.length; i++ ) {
			
			sectionSequences = [];

			for( var j = 0; j < sections[i].sequences.length; j++ ) {
				sectionSequences.push( sections[i].sequences[j] );
			
			}
			
			var seqdiv; 

			var div = makeDiv( 
				"section_menu_"+sections[i].name,
				"marker section_menu_option"
			)
			div.html( '<button class="secciones_button">' + sections[i].name +  '</button>');
			div.css({
				left: ( (i/sections.length)*$('#timeline_secciones').width() ) + ( ( $('#timeline_secciones').width()/sections.length ) / 4 )
			})

			for( var j = 0; j < sectionSequences.length; j++ ) {
				seqdiv = makeDiv( 
					"sequence_menu_"+sectionSequences[j].name,
					"marker sequence_menu_option hidden"
				)
				seqdiv.html( '<button class="secciones_button">' + sectionSequences[j].name +  '</button>');
				div.append( seqdiv )
			}
			


			$('header #timeline_secciones .markers').append( div )

			div.click(function(){
				console.log( "jump to:" + $(this).index() );
				narrator.jump( $(this).index() );
				var seqdivs = $(this).find('.sequence_menu_option');
				$('header #timeline_secuencias .markers').html('')
				if( seqdivs.length > 1 )
				seqdivs.each(function(i){
					
					var seqdiv = $(this);
					
					seqdiv.removeClass('hidden')

					$('header #timeline_secuencias .markers').append( seqdiv )
					seqdiv.css({
						left: ( (i/seqdivs.length)*$('#timeline_secuencias').width() ) + ( ( $('#timeline_secuencias').width()/seqdivs.length ) / 4 )
					});
					seqdiv.find('button').click(function(j){
						narrator.jumpToSequence( $(this).parent().index() );
					})
				});
			})

		}
	}






	this.placeCover = function() {
		$('.pantalla').first().html('')
		$('.pantalla').first().html('<video class="fullWH" autoplay loop><source src="edc/vd/anim.mp4" type="video/mp4"><source src="edc/vd/anim.webm" type="video/webm"><source src="edc/vd/anim.ogg" type="video/webm">Tu navegador no soporta la etiqueta video. Prueba actualizándolo o instalando otro más moderno.</video>')
	}
	this.removeCover = function() {
		$('.pantalla video').remove();

	}



	this.openContent = function( mediaItem )
	{
		if( mediaItem != "" ) {

			if( mediaItem.getType() === "image" ) {

				content = $('<img>').attr('src', mediaItem.media );
				content = $('<a>').attr('href',mediaItem).attr('data-lightbox',"content").attr('data-title','').html( content );		
				var vtable = makeDiv("","vcenter_content imgLiquid imgLiquidNoFill").html( content );
				vtable = makeDiv("","vcenter_container").html( vtable );
				vtable = makeDiv("","vcenter_table").html( vtable );
				content = vtable;
				$('.pantalla').eq(1).html( content )
				$('.pantalla').eq(1).stop().show().css({opacity:0}).animate({opacity:1},1000);

				$('.pantalla').eq(1).html( content )

				$('.imgLiquidNoFill').imgLiquid({fill:false})

			}

			if( mediaItem.getType() === "vimeoid" ) {
				id = mediaItem.media;
				this.openVimeo( id );
				n.vimeoPlaying();
				//console.log( "VIMEO:", mediaItem )
			}

			/*if( mediaItem.getType() === "text" ) {
				var vtable = makeDiv("","vcenter_content").html( mediaItem.media );
				vtable = makeDiv("","vcenter_container").html( vtable );
				vtable = makeDiv("","vcenter_table").html( vtable );
				content = vtable;
				$('.pantalla').eq(1).html( content )
				$('.pantalla').eq(1).stop().show().css({opacity:0}).animate({opacity:1},1000);

			}*/

			if( mediaItem.getType() === "video" ) {
				
				var src = $('<source>').attr('src',mediaItem.media );
				
				if( $('.pantalla').find('video').length == 0 ) {
					var video = $('<video>').attr('autoplay','autoplay');
					video.addClass('wh100');
					video.append( src );
					$('.pantalla').eq(1).html( video );
					//$('.pantalla').eq(1).find( 'video' ).get(0).currentTime = 0;
				} else {
					$('.pantalla').eq(1).find('video').append(src);
				}

				
				$('.pantalla').eq(1).stop().show().css({opacity:0}).animate({opacity:1},1000);
		   	
			}

			if( mediaItem.getType() === "text" ) {

				var text = mediaItem.media;


				$('.pantalla').eq(1).html( '' );
				
				var htmlstr = '<div class="text vcenter_table"><div class="vcenter_container"><div class="vcenter_content">';
				htmlstr += text;
				htmlstr += '</div></div></div>';
				
				$('.pantalla').eq(1).html( htmlstr );
      

				$('.pantalla').eq(1).stop().show().css({opacity:0}).animate({opacity:1},1000);
			}


/*
			if( key === "imagenes" ) {
				content = $('<img>').attr('src', mediaItem );
				content = $('<a>').attr('href',mediaItem).attr('data-lightbox',contenido.info.title).attr('data-title','').html( content );												
			}

			if( key === "videos" ) {
				content = $('<a>').attr({href:mediaItem,target:'_blank'}).html( $('<video>').append( $('<source>').attr('src',mediaItem) ).attr('autoplay', 'autoplay') );												
			}

			if( key === "audios" ) {
				content = $('<a>').attr({href:mediaItem,target:'_blank'}).html( $('<audio>').append( $('<source>').attr('src',mediaItem) ).attr('autoplay', 'autoplay')  );												
			}

			if( key === "tweet_ids" ) {
				content = $('<div>').html( mediaItem );												
			}

			if( key === "urls" ) {

				var url = mediaItem.url;
				var inicio = mediaItem.inicio;
				var final = mediaItem.final;


				var url = url.split("=")[1];
				console.log( url,inicio,final );
				
				var vd = $('<div>').addClass('video');
				pantalla.append( vd );
				//vcenter(vd,pantalla)
				vd.player({
					video: url,
					width: pantalla.width(),
					height: ( pantalla.width() / 1.77 ),
					playerVars: { 
						autoload: true,
						autoplay: true,
						start: 60,
						controls: 0
					},
					events: {
						play: onPlay,
						stop: onPause,
						end: onPause
					}    
				});

				content = vd;												
			}

					
			console.log( content );
			
			var mediaP = $('<div>').attr("class","media_" + key + " media").html( content );

			mediaP.width( pantalla.width() );
			mediaP.css({ maxHeight: pantalla.width() });
*/
		}


	}


	this.onPause = function(id) {
	    //status.text('paused');
	}

	this.onSeek = function(data, id) {
		n.vimeoSeek(data)
	}
	this.onFinish = function(id) {
	    n.videoPosition = -1;
	    n.vimeoFinished();
	    gui.clearScreens();

	    //switchit();
	    //this.controller.currentContent.done = true;

	}


	this.onPlayProgress = function(data, id) {
	    //console.log(n.getCurrentContent().name);
	    n.videoFwd( data );
	    //status.text(data.seconds + 's played');
	}

	this.vimeoupdate = function(id) {
	    $('.pantalla').first().prepend( $('<div>').attr('id','iframe'));
	    /**/
	    $('#iframe').addClass('wh100 text-center').prepend('<iframe id="player1" src="http://player.vimeo.com/video/'+id+'?api=1&player_id=player1" width="400" height="225" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
	    //$('#iframe').css({textAlign:'center'});
	    $('#iframe iframe').addClass('wh100');
	    
	    
	    var iframe = $('#player1')[0],
	    player = $f(iframe),
	    status = $('.status');

		// When the player is ready, add listeners for pause, finish, and playProgress
		player.addEvent('ready', function() {
		    //status.text('ready');

		    player.addEvent('pause', gui.onPause);
		    player.addEvent('finish', gui.onFinish);
		    player.addEvent('seek', gui.onSeek);
		    player.addEvent('playProgress', gui.onPlayProgress);
		    
		    player.api("play");

		});

		// Call the API when a button is pressed
		/*
		$('button').bind('click', function() {
		    player.api($(this).text().toLowerCase());
		});
		*/
		    

	}
	this.createVimeo = function (id){
	    //player.api("finish");
		this.clearScreens();    
		this.vimeoupdate(id);
	}


	this.openVimeo = function( id ) {
		clog("openVimeo")
		this.createVimeo(id);
	}

	this.seekVimeo = function ( seconds ) {
		var iframe = $('#player1')[0],
	    player = $f(iframe),
	    status = $('.status');


		player.api("seekTo",seconds);
		narrator.videoPosition = seconds;
	}


	this.clearScreens = function() {
		$('#iframe').html('');    
		$('#iframe').remove();
	}

	this.clearContentScreen = function() {
		//console.log("clera SSSSSCCCC")
		//$('.pantalla').eq(1).find('video').fadeOut();
		$('.pantalla').eq(1).stop().fadeOut(1000,function(){
			$('.pantalla').eq(1).hide();
			$('.pantalla').eq(1).html('');
		})
	}


	this.disableNext = function() {
		$('#next_arrow').addClass('disabled')
		$('#transport_next').addClass('disabled')
	}

	this.enableNext = function() {
		$('#next_arrow').removeClass('disabled')
		$('#transport_next').removeClass('disabled')
	}

}