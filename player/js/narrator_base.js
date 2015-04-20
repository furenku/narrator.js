Element = function( name_ ) {
	this.name = name_;
	this.type = "Element";	
}

Element.prototype.setName = function( name_ ){
	this.name = name_;
}
Element.prototype.getName = function(){
	return this.name;
}

Element.prototype.setType = function( type_ ){
	this.type = type_;
}
Element.prototype.getType = function(){
	return this.type;
}






ElementList = function( name_ ) {
	Element.call(this, name_);
	this.items = [];
	this.currentItem = -1;
	this.loop = false;
	this.started = false;
	this.done = false;
}

inheritPrototype( ElementList, Element );

ElementList.prototype.addItem = function( item_ ) {
	this.items.push( item_ );
}
ElementList.prototype.removeItem = function( item_ ) {
	var index = this.items.indexOf( item_ );
	this.items.splice( index, 1 );
}

ElementList.prototype.getItem = function( index_ ) {
	if( index_ in this.items )
		return this.items[ index_ ];
	else
		return false;	
}
ElementList.prototype.getItems = function() {
	return this.items;
}

ElementList.prototype.next = function() {
	
	var item;
	
	if( this.currentItem in this.items ) {
		this.started = true;
		item = this.items[ this.currentItem ];
	}

	
	this.currentItem++;

	if( this.loop) {
		this.currentItem = wrap( this.currentItem, this.items );
	} 
	else {
		if( this.currentItem > this.items.length - 1 ) {
			this.done = true;
			this.currentItem = this.items.length - 1;
		}
	
	}

	if( ! this.done )
		return item;
	else 
		return "done";
	
}

ElementList.prototype.previous = function() {
	
	var item;

	if( this.currentItem in this.items ) {
		this.started = true;
		item = this.items[ this.currentItem ];
	}
	
	if( this.loop) {
		this.currentItem = wrap( this.currentItem, this.items );
	} 
	else {
		if( this.currentItem < 0 ) {
			this.started = false;
		}
	}
	this.currentItem--;

	if( this.started )
		return item;
	else 
		return "not started";
	
}
