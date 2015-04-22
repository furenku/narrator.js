NarratorGUI = function( parent ) {

	this.parent = parent;

	this.setupGUI = function(){
		console.log( "IMPL: crear botones" )
		// crear botones para distintas secciones

	}

	this.createSectionMenu = function( sections ) {
		for( i in sections ) {
			var div = makeDiv( 
				"section_menu_"+sections[i].name,
				"marker section_menu_option"
			)
			div.text( sections[i].name );

			div.css({
				left: (i/sections.length)*$('#timeline_secciones').width()
			})


			$('header #timeline_secciones .markers').append( div )

			div.click(function(){
				console.log( $(this).index() );
				parent.jump( $(this).index() );
			})

		}
	}











	this.openContent = function( mediaItem )
	{
		if( mediaItem != "" ) {
/*
			if( key === "textos" ) {
				var vtable = makeDiv("","vcenter_content").html( content );
				vtable = makeDiv("","vcenter_container").html( vtable );
				vtable = makeDiv("","vcenter_table").html( vtable );
				content = vtable;

			}

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


}