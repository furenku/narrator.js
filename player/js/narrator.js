var n, narrator;


$.when(
    $.getScript( "js/narrator_utils.js" ),
    $.getScript( "js/narrator_base.js" ),
    $.getScript( "js/narrator_media.js" ),
    $.getScript( "js/narrator_structures.js" ),
    $.getScript( "js/narrator_controller.js" ),
    $.getScript( "js/narrator_gui.js" ),
    $.getScript( "js/tests.js" ),
    //$.getScript( "js/test.js" ),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
).done(function(){



    $(document).ready(function(){

        narrator = n = new Narrator();
        n.loadDB( n.testDB );
        
	
	})

})