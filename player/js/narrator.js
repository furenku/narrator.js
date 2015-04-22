$.when(
    $.getScript( "js/narrator_utils.js" ),
    $.getScript( "js/narrator_base.js" ),
    $.getScript( "js/narrator_media.js" ),
    $.getScript( "js/narrator_structures.js" ),
    $.getScript( "js/narrator_controller.js" ),
    $.getScript( "js/tests.js" ),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
).done(function(){

	console.log("NARRATOR READY!")
	
})