function hcenter( div, target ) {
var pW = target.height();
var d = ( pW - div.width() ) / 2;
div.css({left:d,position:'absolute'});
}
function vcenter( div, target ) {
var pH = target.height();
var d = ( pH - div.height() ) / 4;
console.log(pH, d)
div.css({top:d,position:'absolute'});        
}

function fitH() {
    fitH = wH - ( $('header').height() + $('footer').height() );  

    $('.fitH').each(function(){
      var fitDiv = $(this);
      fitDiv.height( fitH );
    });

}

function fillH() {

    $('.fillH').each(function(){
        var div = $(this);
        var h = div.parent().height() - div.offset().top;
        div.height(h);
    });
  
}


function getClosestTo(val, array) {
    if (array[val] !== undefined) {
        return val;
    } else {
        var upper = val;
        var upperMatched = false;
        var lower = val;
        var lowerMatched = false;

        while(upper < this.length) {
            if (array[++upper] !== undefined) {
                upperMatched = true;
                break;
            };
        };

        while(lower > -1) {
            if (array[--lower] !== undefined) {
                lowerMatched = true;
                break;
            };
        };

        if (upperMatched && lowerMatched) {
            return upper - val < val - lower ? upper : lower;
        } else if (upperMatched) {
            return upper;
        } else if (lowerMatched) {
            return lower;
        };
    };

    return -1;
};


function keysrt(key,desc) {
  return function(a,b){
   return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
  }
}



function wrap( index_, array_ ) {
    
    var index = index_;

    if( index_ > array_.length )
        index = 0;
    if( index_ < 0 )
        index = array_.length - 1 ;
    
    return index;

}


function n(n){
    return n > 9 ? "" + n: "0" + n;
}
function clog( what ){
    console.log(what);
}
function h(n_,txt_){
    return '<h'+n_+'>'+txt_+'</h'+n_+'>';
}
function makeDiv( id_, class_ ) {
    return $('<div>').attr('class',class_).attr('id',id_);
}
function makeImg( src_ ) {
    return $('<img>').attr('src',src_);
}