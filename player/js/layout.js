var wW = $('#pantallas').width();
var wH = $(window).height();


function crearPantallas() {

  var pW = wW;
  var pH = wW / (16/9);
  var pantallas = Array();
  pantallas.push({name:"A",width: pW,height:pH});
  //pantallas.push({name:"B",width: pW,height:pH});
  
  /*
  pantallas.push({name:"sim_2",width:300,height:300});
  pantallas.push({name:"sim_3",width:300,height:300});
  */

  var scrW = 0;
  var scrH = 0;


    for(i in pantallas) {

      var pantalla = $('<div>');
      pantalla.addClass("pantalla");
      pantalla.attr('id', "pantalla_" + pantallas[i].name );
      
      var realW = scrW;

      pantalla.width( pantallas[i].width ).height( pantallas[i].height ).css({    left: scrW, top: scrH });

      scrW = scrW + pantallas[i].width;
          
      var cnt = '';
      
      $('#pantallas').append( pantalla.html( cnt ) );

    }

  

}



function mediaScroll(){
  var totalW = 0;
  $('.scrollX .media').each(function(){
    totalW += $(this).width();
  });
  $('.scrollX').width( totalW );

  $('.scrollX').scroll(function(){
    console.log("scroll")
  })
}



function timeline(){
  $('.progress').animate({width:'100%'},3000);

  $('.marker').each(function(){
    var marker = $(this);
    var pos = marker.attr('data-pos');
    console.log(marker.parent().width() * pos, pos, marker.parent().width);
    marker.offset({left: marker.parent().width() * pos });

    marker.click(function(){
      console.log( "IMPLEMENT click marker: " + marker.text() + ", " + pos );
    })

  });

}