      


function crearPantallas() {

  var pantallas = Array();
  pantallas.push({name:"sim_1",width:300,height:300});
  pantallas.push({name:"sim_2",width:300,height:300});
  pantallas.push({name:"sim_3",width:300,height:300});

  var scrW = 0;
  var scrH = 0;


  for(i in pantallas) {

    var pantalla = $('<div>').addClass("pantalla").attr('id',pantallas[i].name );
    var realW = scrW;


    var wW;
    var wH;

    if( $(window).width() > 1200 ) {

      wW = $(window).width() / pantallas.length;
      if( i == 0 )
        wW -= $('#twitter').width();
      wH = fitH;
    }
    else {

      wW = ( $(window).width() - $('#twitter').width() ) / pantallas.length;
      wH =  wW / (16/9);
      scrH = ( fitH - wH ) / 2;

    }

    pantalla.width( wW ).height( wH ).css({    left: scrW, top: scrH });
    scrW = scrW + wW;
        
    var cnt = '<div class="imagen"><img src="http://fakeimg.pl/350x350/333/aaa" alt=""></div>';
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